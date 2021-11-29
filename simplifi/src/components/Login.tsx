import React, { useEffect, useState } from "react";
import Header from "./Header";
import { usePlaidLink } from "react-plaid-link";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import MainMenu from "../components/MainMenu";
import { createHashHistory } from "history";

function Login() {
  const [linkToken, setLinkToken] = useState(null);
  const [temp, setTemp] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  const history = useHistory();
  const generateToken = async () => {
    console.log("hello");
    const response = await fetch("/create_link_token");
    const data = await response.json();
    //console.log('data', data)
    setTemp("hey");
    setLinkToken(data.link_token);
  };

  // will retrieve information based on the api call you pass
  // here we are calling for "loans"
  // the other options are: "investments", "transactions", "balance", "accounts"
  const generateInfo = async () => {
    history.push("/mainmenu");
    const response = await fetch("/transactions");
    const data = await response.json();
    console.log("data access", data);
  };

  useEffect(() => {
    generateToken();
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
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
      <button onClick={() => generateInfo()}>click</button>
      <Router>
        <div>
          {linkToken != null ? (
            <Link linkToken={linkToken} />
          ) : (
            <Switch>
              <Route path="/mainmenu" component={MainMenu} />
            </Switch>
          )}
        </div>
      </Router>
    </div>
  );
}

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
  const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 10000));
  };
  const [isOpen, setOpen] = useState(false);
  const history = useHistory();
  const onSuccess = React.useCallback(async (public_token, metadata) => {
    // send public_token to server
    const response = await fetch("/set_access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ public_token }),
    });
    // Handle response ...
    console.log(response);
    setOpen(true);
  }, []);

  const config: Parameters<typeof usePlaidLink>[0] = {
    token: props.linkToken!,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  const redirect = async () => {
    console.log("in REDIRECT");
    await sleep();
    history.push("/mainmenu");
  };

  return (
    <div>
      <button onClick={() => open()} disabled={!ready}>
        Link account
      </button>
      {isOpen ? (
        <Switch>
          <Route path="/mainmenu" component={MainMenu} />
        </Switch>
      ) : (
        history.push("/mainmenu")
      )}
    </div>
  );
};

export default Login;

//history.push("/mainmenu")
