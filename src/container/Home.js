import "./css/Home.css";
import Header from "../components/Header";
import Image from "../components/Image";
import Offers from "../components/Offers";
import { useState } from "react";

const Home = ({
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
  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: "0px",
          bottom: "120px",
          // zIndex: "100",
        }}
      >
        <Header
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
        {/* <Image style={{ position: "relative", top: "100px" }} />
        <Offers
          style={{ position: "relative", top: "300px" }}
          priceMin={priceMin}
          priceMax={priceMax}
          sort={sort}
          title={title}
        /> */}
      </div>
      {/* <Image style={{ position: "relative", top: "100px" }} />
      <Offers
        style={{ position: "relative", top: "300px" }}
        priceMin={priceMin}
        priceMax={priceMax}
        sort={sort}
        title={title}
      /> */}

      <Image />
      <Offers
        priceMin={priceMin}
        priceMax={priceMax}
        sort={sort}
        title={title}
      />
    </div>
  );
};
export default Home;
