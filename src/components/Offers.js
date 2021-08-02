import "./css/Offers.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Offers = ({ priceMin, priceMax, sort, title }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([1]);
  const [limit, setLimit] = useState(5);
  let query =
    "?limit=" +
    limit +
    "&page=" +
    page +
    "&priceMin=" +
    priceMin +
    "&priceMax=" +
    priceMax +
    "&sort=" +
    sort;
  title !== "" && (query += "&title=" + title);
  useEffect(() => {
    const fetchData = async () => {
      console.log(query);
      try {
        const response = await axios.get(
          `https://orion21-vinted.herokuapp.com/offers${query}`
        );
        setData(response.data);
        setTotalPages(Math.ceil(response.data.count / limit));
        const arrayLength = Math.ceil(response.data.count / limit);
        const tmp = new Array(arrayLength).fill(1);
        setPages(tmp);
        setIsLoading(false);
      } catch (error) {
        // Todo manage 4XX/5XX
        console.log(error);
      }
    };

    fetchData();
  }, [page, priceMin, priceMax, sort, title]);

  const setPagesArray = () => {
    console.log(data.count);
    console.log(limit);
    let tmp = [];
    for (let i = 1; i <= totalPages; i++) {
      tmp.push(0);
    }
    setPages(tmp);
  };
  const updatePage = (index) => {
    setPage(index + 1);
  };

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <div className="offers-container">
        {data.offers.map((elem, index) => {
          console.log(elem);
          return (
            <div key={index} className="offers-offer">
              <span className="offer-info-owner">
                {elem.owner.account.username}
              </span>
              <Link
                to={(location) => ({
                  ...location,
                  pathname: `/offer/${elem._id}`,
                })}
              >
                {elem.product_image && (
                  <img
                    className="offers-offer-image"
                    src={elem.product_image[0].secure_url}
                    alt="offerItem"
                  />
                )}
              </Link>
              <div className="offer-price">
                {elem.product_price && <span>{elem.product_price} € </span>}
              </div>
              <div className="offer-info">
                {elem.product_details[1] && (
                  <span>{elem.product_details[1].ETAT}</span>
                )}
              </div>
              <div className="offer-info">
                {elem.product_details[1] &&
                  elem.product_details[0].MARQUE !== "SANS MARQUE" && (
                    <span>{elem.product_details[0].MARQUE}</span>
                  )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="offers-container">
        <span className="offers-pages">page:</span>
        {pages.map((elem, index) => {
          const update = () => {
            updatePage(index);
          };
          console.log(" index " + index);
          return (
            <span className="offers-pages" key={index} onClick={update}>
              {index + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
