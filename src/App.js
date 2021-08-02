import "./App.css";
import Offer from "./container/Offer";
import Home from "./container/Home";
import Signup from "./container/Signup";
import Login from "./container/Login";
import Publish from "./container/Publish";
import Cookies from "js-cookie";

import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [token, setToken] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1000);
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState("price-asc");

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
            <Home
              setUserInfo={setUserInfo}
              priceMin={priceMin}
              priceMax={priceMax}
              sort={sort}
              title={title}
              setPriceMin={setPriceMin}
              setPriceMax={setPriceMax}
              setSort={setSort}
              setTitle={setTitle}
            />
          </Route>
          <Route exact path="/offer/:id">
            <Offer
              setUserInfo={setUserInfo}
              // priceMin={priceMin}
              // priceMax={priceMax}
              // sort={sort}
              // title={title}
              // setPriceMin={setPriceMin}
              // setPriceMax={setPriceMax}
              // setSort={setSort}
              // setTitle={setTitle}
            />
          </Route>
          <Route path="/user/signup">
            <Signup
              setUserInfo={setUserInfo}
              // priceMin={priceMin}
              // priceMax={priceMax}
              // sort={sort}
              // title={title}
              // setPriceMin={setPriceMin}
              // setPriceMax={setPriceMax}
              // setSort={setSort}
              // setTitle={setTitle}
            />
          </Route>
          <Route path="/login">
            <Login
              setUserInfo={setUserInfo}
              // priceMin={priceMin}
              // priceMax={priceMax}
              // sort={sort}
              // title={title}
              // setPriceMin={setPriceMin}
              // setPriceMax={setPriceMax}
              // setSort={setSort}
              // setTitle={setTitle}
            />
          </Route>
          <Route path="/publish">
            <Publish setUserInfo={setUserInfo} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
