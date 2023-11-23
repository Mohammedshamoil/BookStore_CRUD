import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: null,
  });
  // when we click on add button it direct go to home page we naviagte router dom
  const navigate = useNavigate();
  //add data into backend
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);
  return (
    <div className="form">
      <h1>Add New Book</h1>

      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="file"
        placeholder="cover picture"
        id="images"
        onChange={handleChange}
        accept="image/*"
        name="cover"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <button className="formBtn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default Add;
