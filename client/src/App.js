import './style.css';
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Add from "./pages/Add";

import Update from "./pages/Update";
import Book from "./pages/Book";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Book></Book>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
