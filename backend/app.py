from flask_cors import CORS
import plaid
from plaid.api import plaid_api
from plaid.model.link_token_create_request_user import LinkTokenCreateRequestUser
import time
from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from dotenv import load_dotenv
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
        products=['auth'],
        client_name="Plaid Test App",
        country_codes=['US'],
        language='en',
        webhook='http://localhost:3000/',
        user=LinkTokenCreateRequestUser(
            client_user_id=str(time.time())
        )
    )
    response = client.link_token_create(request)
    # Send the data to the client
    return jsonify(response.to_dict())


access_token = None
public_token = None


@app.route("/exchange_public_token", methods=['POST'])
def exchange_public_token():
    global access_token
    public_token = request.form['public_token']
    exchange_response = \
        client.Item.public_token.exchange(public_token)
    access_token = exchange_response['access_token']
    item_id = exchange_response['item_id']
    return jsonify(exchange_response)


@app.route('/accounts', methods=['GET'])
def get_accounts():
    print('hello')
    try:
        accounts_response = client.Accounts.get(access_token)
    except plaid.errors.PlaidError as e:
        return jsonify({'error': {'display_message': e.display_message, 'error_code': e.code, 'error_type': e.type}})
    return jsonify({'error': None, 'accounts': accounts_response})


if __name__ == "__main__":
    app.run()
