import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Book = () => {
  const [books,setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data)
        // console.log(res);
      } catch(er) {
        console.log(er);
      }
    };
    fetchAllBooks();
  },[]);

  const handleDelete=async(id)=>{
    try {
      await axios.delete("http://localhost:8800/books/"+id)
      window.location.reload()
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return <div>
    <h1>BookStore Shop</h1>
    <div className="books">
        {books.map((book)=>(
            <div className="book" key={book.id}>
                {book.cover && <img src={book.cover} alt=""></img>}
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>Price: {book.price}</span>
                <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
                <button className="update"><Link to= {`/update/${book.id}`} > update</Link></button>
            </div>

        ))}
    </div>
    <button className="addnewbtn"><Link to="/add"> Add new book</Link></button>

  </div>;
};

export default Book;
