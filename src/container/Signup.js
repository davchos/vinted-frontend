import "./css/Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

const Signup = ({
  setUserInfo,
  priceMin,
  priceMax,
  sort,
  title,
  setPriceMin,
  setPriceMax,
  setSort,
  setTitle,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form");
    const data = {
      email: email,
      username: username,
      phone: phone,
      password: password,
    };
    console.log(data);

    try {
      const response = await axios.post(
        "https://orion21-vinted.herokuapp.com/user/signup",

        data
      );
      setUserInfo(response.data.token);
      history.push("/");
    } catch (e) {
      // manage 4XX/5XX response code
      console.log(e);
    }
  };
  return (
    <div>
      <Header
        priceMin={priceMin}
        priceMax={priceMax}
        sort={sort}
        title={title}
        setPriceMin={setPriceMin}
        setPriceMax={setPriceMax}
        setSort={setSort}
        setTitle={setTitle}
      />
      <div className="signup-container">
        <span className="signup-title">S'inscrire</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={(event) => {
              setUsername(event.target.value);
              console.log(username);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Phone"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input type="submit" value="S'inscrire" />
        </form>

        <Link className="signup-login" to="/login">
          <span>Tu as déja un compte ? Connecte toi </span>
        </Link>
      </div>
    </div>
  );
};
export default Signup;
