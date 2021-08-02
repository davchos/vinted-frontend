import "./css/Offer.css";
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import Item from "../components/item";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import axios from "axios";

const Offer = ({
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
  const [item, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://orion21-vinted.herokuapp.com//offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };
    fetchData();
    // console.log(response.data.json);
  }, [id]);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="offer-container">
      <div
        style={{
          position: "sticky",
          top: "0px",
          bottom: "120px",
        }}
      >
        <Header setUserInfo={setUserInfo} />
      </div>
      <Item item={item} />
    </div>
  );
};

export default Offer;
