import "./css/Publish.css";
import { Redirect } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

import Cookies from "js-cookie";

const Publish = ({ setUserInfo }) => {
  const token = Cookies.get("token");
  const [files, setFiles] = useState();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("files", files);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("color", color);

    try {
      const response = await axios.post(
        "https://orion21-vinted.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      if (error.response.status === 500) {
        console.error("An error occurred");
      } else {
        console.error(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: "0px",
          bottom: "120px",
        }}
      >
        <Header setUserInfo={setUserInfo} />
      </div>
      {token ? (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            placeholder="title"
            type="text"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
          <input
            placeholder="Description"
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
          />
          <input
            placeholder="Price"
            type="text"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            value={price}
          />
          <input
            placeholder="Brand"
            type="text"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
            value={brand}
          />
          <input
            placeholder="Size"
            type="text"
            onChange={(event) => {
              setSize(event.target.value);
            }}
            value={size}
          />
          <input
            placeholder="Condition"
            type="text"
            onChange={(event) => {
              setCondition(event.target.value);
            }}
            value={condition}
          />
          <input
            placeholder="City"
            type="text"
            onChange={(event) => {
              setCity(event.target.value);
            }}
            value={city}
          />
          <input
            placeholder="Color"
            type="text"
            onChange={(event) => {
              setColor(event.target.value);
            }}
            value={color}
          />
          <input
            name="files"
            multiple="true"
            type="file"
            onChange={(event) => {
              console.log(event.target.files[0]);

              setFiles(event.target.files[0]);

              console.log(files);
            }}
          />
          <input type="submit" />
        </form>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};
export default Publish;
