import "./css/Publish.css";
import { Redirect, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";

import { useState } from "react";
import axios from "axios";

import Cookies from "js-cookie";

const Publish = ({ setUserInfo }) => {
  let history = useHistory();
  const token = Cookies.get("token");
  const [files, setFiles] = useState();
  const [valid, setValid] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [color, setColor] = useState("");
  const validateInput = () => {
    !price && setValid(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // validateInput();

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
      console.log(response.data);
      const id = response.data.id;
      history.push(`/offer/${id}`);
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
          zIndex: 100,
        }}
      >
        <Header setUserInfo={setUserInfo} />
      </div>
      {token ? (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Input type="text" label="Title" value={title} setValue={setTitle} />
          <Input
            type="textarea"
            label="Description"
            value={description}
            setValue={setDescription}
          />
          <Input type="text" label="Price" value={price} setValue={setPrice} />
          <Input type="text" label="Brand" value={brand} setValue={setBrand} />

          <Input type="text" label="Size" value={size} setValue={setSize} />
          <Input
            type="text"
            label="Condition"
            value={condition}
            setValue={setCondition}
          />

          <Input type="text" label="City" value={city} setValue={setCity} />
          <Input type="text" label="Color" value={color} setValue={setColor} />

          <input
            required
            name="files"
            type="file"
            onChange={(event) => {
              setFiles(event.target.files[0]);
            }}
          />
          <input type="submit" />
        </form>
      ) : (
        <Redirect to="/login" />
      )}
      <div>
        {valid && (
          <p>
            Check your input and follow these rules - Price must be a number
            greater than 0
          </p>
        )}
      </div>
    </div>
  );
};
export default Publish;
