import "./css/Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

import { useHistory } from "react-router-dom";

const Login = ({ setUserInfo }) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // formulaire + axios
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://orion21-vinted.herokuapp.com/user/login",
        data
        // headers
      );
      setUserInfo(response.data.token);
      history.push("/publish");
    } catch (e) {
      // Manage 4XX / 5XX response code
    }
  };
  return (
    <div>
      <Header setUserInfo={setUserInfo} />
      <div className="login-container">
        <span className="login-title"> Se connecter</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input type="submit" value="Se connecter" />
        </form>
        <Link className="login-signup" to="/user/signup">
          <span>Pas encore de compte ? Inscris-toi </span>
        </Link>
      </div>
    </div>
  );
};
export default Login;
