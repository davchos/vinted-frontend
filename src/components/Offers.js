import "./css/Offers.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Offers = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="offers-container">
      {data.offers.map((elem, index) => {
        return (
          <div key={index} className="offers-offer">
            <span> {elem.owner.account.username}</span>
            <Link
              to={(location) => ({
                ...location,
                pathname: `/offer/${elem._id}`,
              })}
            >
              <div className="offers-offer-image">
                <img
                  src={elem.product_pictures[0].secure_url}
                  alt="offerItem"
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Offers;
