from flask_cors import CORS
import plaid
from plaid.api import plaid_api
from plaid.model.link_token_create_request_user import LinkTokenCreateRequestUser
import time
from plaid.model.account_subtype import AccountSubtype
from plaid.model.accounts_get_request import AccountsGetRequest
from plaid.model.country_code import CountryCode
from plaid.model.depository_filter import DepositoryFilter
from plaid.model.link_token_account_filters import LinkTokenAccountFilters
from plaid.model.link_token_create_request import LinkTokenCreateRequest
from plaid.model.link_token_create_request_user import LinkTokenCreateRequestUser
from plaid.model.link_token_get_request import LinkTokenGetRequest
from plaid.model.products import Products
from plaid.model.item_public_token_exchange_request import ItemPublicTokenExchangeRequest
from plaid.model.transfer_authorization_create_request import TransferAuthorizationCreateRequest
from plaid.model.transfer_user_address_in_request import TransferUserAddressInRequest
from plaid.model.ach_class import ACHClass
from plaid.model.transfer_type import TransferType
from plaid.model.transfer_user_in_request import TransferUserInRequest
from plaid.model.transfer_network import TransferNetwork
from plaid.model.transfer_create_request import TransferCreateRequest
from plaid.model.transfer_create_idempotency_key import TransferCreateIdempotencyKey

from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from dotenv import load_dotenv
import json
import os
load_dotenv()

app = Flask(__name__)

configuration = plaid.Configuration(
    host=plaid.Environment.Sandbox,
    api_key={
        'clientId': '615e4b5a3de9220011efe114',
        'secret': '5bf0d438d4f1bd5dbd8a649629fbc5',
    }
)

api_client = plaid.ApiClient(configuration)
client = plaid_api.PlaidApi(api_client)


@app.route('/time')
def get_current_time():
    print("wassup")
    return {'time': time.time()}


@app.route('/create_link_token')
def create_link_token():
    print("entered")
    # Create a link_token for the given user
    request = plaid_api.LinkTokenCreateRequest(
        products=[Products('auth')],
        client_name="Plaid Test App",
        country_codes=[CountryCode('US')],
        language='en',
        webhook='http://localhost:3000/',
        user=LinkTokenCreateRequestUser(
            client_user_id=str(time.time())
        )
    )
    response = client.link_token_create(request)
    # Send the data to the client
    return jsonify(response.to_dict())


PLAID_PRODUCTS = os.getenv('PLAID_PRODUCTS', 'transactions').split(',')

access_token = None
public_token = None


@app.route('/api/set_access_token', methods=['POST'])
def get_access_token():
    global access_token
    global item_id
    global transfer_id
    public_token = request.form['public_token']
    try:
        exchange_request = ItemPublicTokenExchangeRequest(
            public_token=public_token)
        exchange_response = client.item_public_token_exchange(exchange_request)
        access_token = exchange_response['access_token']
        item_id = exchange_response['item_id']
        if 'transfer' in PLAID_PRODUCTS:
            transfer_id = authorize_and_create_transfer(access_token)
        return jsonify(exchange_response.to_dict())
    except plaid.ApiException as e:
        return json.loads(e.body)


def authorize_and_create_transfer(access_token):
    try:
        # We call /accounts/get to obtain first account_id - in production,
        # account_id's should be persisted in a data store and retrieved
        # from there.
        request = AccountsGetRequest(access_token=access_token)
        response = client.accounts_get(request)
        account_id = response['accounts'][0]['account_id']

        request = TransferAuthorizationCreateRequest(
            access_token=access_token,
            account_id=account_id,
            type=TransferType('credit'),
            network=TransferNetwork('ach'),
            amount='12.34',
            ach_class=ACHClass('ppd'),
            user=TransferUserInRequest(
                legal_name='FirstName LastName',
                email_address='foobar@email.com',
                address=TransferUserAddressInRequest(
                    street='123 Main St.',
                    city='San Francisco',
                    region='CA',
                    postal_code='94053',
                    country='US'
                ),
            ),
        )
        response = client.transfer_authorization_create(request)
        print(response)
        authorization_id = response['authorization']['id']

        request = TransferCreateRequest(
            idempotency_key=TransferCreateIdempotencyKey(
                '1223abc456xyz7890001'),
            access_token=access_token,
            account_id=account_id,
            authorization_id=authorization_id,
            type=TransferType('credit'),
            network=TransferNetwork('ach'),
            amount='12.34',
            description='Payment',
            ach_class=ACHClass('ppd'),
            user=TransferUserInRequest(
                legal_name='FirstName LastName',
                email_address='foobar@email.com',
                address=TransferUserAddressInRequest(
                    street='123 Main St.',
                    city='San Francisco',
                    region='CA',
                    postal_code='94053',
                    country='US'
                ),
            ),
        )
        response = client.transfer_create(request)
        print(response)
        return response['transfer']['id']
    except plaid.ApiException as e:
        error_response = print(e)
        return jsonify(error_response)


@app.route("/exchange_public_token", methods=['POST'])
def exchange_public_token():
    print("HEYYYYYYY")
    global access_token
    public_token = request.form['public_token']
    exchange_response = \
        client.Item.public_token.exchange(public_token)
    access_token = exchange_response['access_token']
    item_id = exchange_response['item_id']
    return jsonify(exchange_response)


@app.route('/accounts', methods=['GET'])
def get_accounts():
    try:
        request = AccountsGetRequest(access_token=access_token)
        accounts_response = client.accounts_get(request)
    except plaid.ApiException as e:
        response = json.loads(e.body)
        return jsonify({'error': {'status_code': e.status, 'display_message':
                                  response['error_message'], 'error_code': response['error_code'], 'error_type': response['error_type']}})
    return jsonify(accounts_response.to_dict())


if __name__ == "__main__":
    app.run()
