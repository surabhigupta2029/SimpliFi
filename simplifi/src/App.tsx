// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from 'react';
// import { usePlaidLink } from 'react-plaid-link';


// function App() {

//   // const [currentTime, setCurrentTime] = useState(0)

//   // useEffect(() => {
//   //   fetch('/time').then(res => res.json()).then(data => {
//   //     setCurrentTime(data.time);
//   //   });
//   // }, []);

//   const [linkToken, setLinkToken] = useState(null);
//   const [access_token, setAccessToken] = useState(null);

//   const generateToken = async () => {
//     const response = await fetch('/api/create_link_token', {
//       method: 'POST',
//     });
//     const data = await response.json();
//     setLinkToken(data.link_token);
//   };
//   useEffect(() => {
//     generateToken();
//     getAccessToken();
//   }, []);
//   return linkToken != null ? <Link linkToken={linkToken} /> : <></>;
// };
// // LINK COMPONENT
// // Use Plaid Link and pass link token and onSuccess function
// // in configuration to initialize Plaid Link
// // interface LinkProps {
// //   linkToken: string | null;
// // }
// // const Link: React.FC<LinkProps> = (props: LinkProps) => {
// //   const onSuccess = React.useCallback((public_token, metadata) => {
// //     // send public_token to server
// //     const response = fetch('/api/set_access_token', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ public_token }),
// //     });
// //     // Handle response ...
// //   }, []);
// //   const config: Parameters<typeof usePlaidLink>[0] = {
// //     token: props.linkToken!,
// //     onSuccess,
// //   };
// //   const { open, ready } = usePlaidLink(config);
// const getAccessToken = async (publicToken) => {
//   console.log("client side public token", publicToken)
//   const response = await fetch('/api/getAccessToken', {
//     method: 'GET',
//   });
//   const data = response.data.access_token
//   setAccessToken(data)
// }

// return (
//   <div className="App">
//     {access_token === null ? <Link token={token} accessToken={access_token} getAccessToken={this.getAccessToken} /> :
//       <Switch>
//         <Route path="/home" render={(routerprops) => <TransactionsContainer accessToken={this.state.access_token} />} />
//       </Switch>
//     }
//   </div>
// );
// }

// export default App;

// APP COMPONENT
// Upon rendering of App component, make a request to create and
// obtain a link token to be used in the Link component
import React, { useEffect, useState } from 'react';
// import { Route, withRouter, Switch } from 'react-router-dom';
import { usePlaidLink } from 'react-plaid-link';
const App = () => {
  const [linkToken, setLinkToken] = useState(null);
  const [temp, setTemp] = useState("");
  const [currentTime, setCurrentTime] = useState(0)

  const generateToken = async () => {
    console.log("hello");
    const response = await fetch('/create_link_token');
    const data = await response.json();
    console.log('data', data)
    setTemp("hey");
    setLinkToken(data.link_token);
  };

  const generateAccessToken = async () => {
    const response = await fetch('/exchange_public_token');
    const data = await response.json();
    console.log('data access', data)
  };

  useEffect(() => {
    generateToken();
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })
  }, []);


  return (
    <div>
      {linkToken != null ? <Link linkToken={linkToken} /> : <h1>error {currentTime}</h1>}
      <button onClick={() => generateAccessToken()}>click</button>
    </div>
  );

};




//   // useEffect(() => {
//   //   fetch('/time').then(res => res.json()).then(data => {
//   //     setCurrentTime(data.time);
//   //   });
//   // }, []);
// LINK COMPONENT
// Use Plaid Link and pass link token and onSuccess function
// in configuration to initialize Plaid Link
interface LinkProps {
  linkToken: string | null;
}
const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const onSuccess = React.useCallback(async (public_token, metadata) => {
    // send public_token to server
    const response = await fetch('/set_access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_token }),
    });
    // Handle response ...
    console.log(response);
  }, []);
  const config: Parameters<typeof usePlaidLink>[0] = {
    token: props.linkToken!,
    onSuccess,
  };
  const { open, ready } = usePlaidLink(config);
  return (
    <div>
      <button onClick={() => open()} disabled={!ready}>
        Link account
      </button>


    </div>
  );
};
export default App;
