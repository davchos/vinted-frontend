import "./css/Home.css";
import Header from "../components/Header";
import Image from "../components/Image";
import Offers from "../components/Offers";
// import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Image />
      <Offers />
    </div>
  );
};
export default Home;
