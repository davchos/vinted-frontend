import "./css/Offer.css";
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import Item from "../components/item";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import axios from "axios";

const Offer = () => {
  const [item, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
      // console.log(response.data);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="offer-container">
      <Header />
      <Item item={item} />
    </div>
  );
};

export default Offer;
