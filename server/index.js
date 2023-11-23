const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const port = 8800;
app.listen(port, () => {
  console.log(`connected to backend ${port}`);
});
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shammu@11",
  database: "bookstore",
});

app.get("/", (req, res) => {
  res.send("hello backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books;";
  db.query(q, (err, data) => {
    if (err) return res.send(err);
    return res.send(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books(`title`,`desc`,`price`,`cover`) VALUES(?)";
  // from user we use
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  // const values=["title from backend","desc from backend","cover from backend"]
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.send("books as been created sucessfully");
  });
});

//delete method

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id=?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.send("books as been deleted sucessfully");
  });
});

//update
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`=?,`desc`=?,`price`=?,`cover`=? where id=?" ;

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];
  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.send("books as been updated sucessfully");
  });
});
