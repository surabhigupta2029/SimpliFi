import React, { useEffect, useState } from 'react';
import Header from './Header';
// import classes from './Login.module.scss';
// import { Route, withRouter, Switch } from 'react-router-dom';
import { usePlaidLink } from 'react-plaid-link';
// function Login() {
//     return (
//         <login>
//             <Header>
//             </Header>
//             <video src="/videos/video.mp4" autoPlay mute loop />
//             <div className={classes.login__intro}>
//                 <h1>Login</h1>
//                 <p>Login stuff will go here</p>
//                 <a href="/mainmenu">
//                     <button>Log in</button>
//                 </a>
//             </div>
//         </login>
//     )
// }

function Login() {
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

  // will retrieve information based on the api call you pass
  // here we are calling for "loans"
  // the other options are: "investments", "transactions", "balance", "accounts"
  const generateInfo = async () => {
    const response = await fetch('/loans');
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
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {linkToken != null ? <Link linkToken={linkToken} /> : <h1>error {currentTime}</h1>}
      <button onClick={() => generateInfo()}>click</button>
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


export default Login