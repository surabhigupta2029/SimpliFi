import Header from "./components/Header"
import Hero from "./components/Hero"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Footer from "./components/Footer"
import About from "./components/About"
import Logout from "./components/Logout"
import MainMenu from "./components/MainMenu"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (  
    <Router>
    <div className ="App">
      <Switch>
      <Route path = "/" exact component={Hero} />
      <Route path = "/login" component={Login} />
      <Route path = "/signup" component={Signup} />
      <Route path = "/about" component={About} />
      <Route path = "/logout" component={Logout} />
      <Route path = "/mainmenu" component={MainMenu} />
      </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
