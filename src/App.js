import "./App.css";
import Offer from "./container/Offer";
import Home from "./container/Home";
import Signup from "./container/Signup";
import Login from "./container/Login";
import Cookies from "js-cookie";

import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [token, setToken] = useState("");

  // Manages users authentification through Cookies token.
  // The Cookie is set / unset in this function.
  // As the a state every change will trigger a rendering.

  const setUserInfo = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 7 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home setUserInfo={setUserInfo} />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/user/signup">
            <Signup setUserInfo={setUserInfo} />
          </Route>
          <Route path="/login">
            <Login setUserInfo={setUserInfo} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
