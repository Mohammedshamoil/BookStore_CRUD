// import React from 'react'
import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: null,
  });
  // when we click on add button it direct go to home page we naviagte router dom
  const navigate = useNavigate();
  // find the location of id we use location in dom react
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  // console.log(location.pathname.split("/")[2]);

  //add data into backend
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
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
      <h1>Update New Book</h1>
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
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <button className="formBtn" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
