import "./css/Home.css";
import Header from "../components/Header";
import Image from "../components/Image";
import Offers from "../components/Offers";
import { useState } from "react";

const Home = ({ setUserInfo }) => {
  const [search, setSearch] = useState({
    priceMin: 0,
    priceMax: 100000,
    title: "",
    sort: "price-desc",
  });

  return (
    <div>
      <Header setUserInfo={setUserInfo} search={search} setSearch={setSearch} />
      <Image />
      <Offers search={search} />
    </div>
  );
};
export default Home;
