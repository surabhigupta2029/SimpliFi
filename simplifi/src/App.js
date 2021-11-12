import Hero from "./components/Hero"
import Login from "./components/Login.tsx"
import Signup from "./components/Signup"
import Footer from "./components/Footer"
import About from "./components/About"
import Logout from "./components/Logout"
import MainMenu from "./components/MainMenu"
import Transactions from "./components/Transactions"
import Balances from "./components/Balances"
import Loans from "./components/Loans"
import Investments from "./components/Investments"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';







function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/about" component={About} />
          <Route path="/logout" component={Logout} />
          <Route path="/mainmenu" component={MainMenu} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/balances" component={Balances} />
          <Route path="/loans" component={Loans} />
          <Route path="/investments" component={Investments} />
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
