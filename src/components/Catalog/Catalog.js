import "./Catalog.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../images copy/51xYxhz7xzL (1).jpg";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(6);

  useEffect(() => {
    fetch("http://localhost:3003/book/allbooks", {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((books) => {
      setTotalBooks(books);
      setDisplayedBooks(books.slice(0, displayLimit));
    })
    .catch((e) => console.log(e));
  }, [displayLimit]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    let filteredBooks = totalBooks.filter((book) => {
      return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setDisplayedBooks(filteredBooks.slice(0, displayLimit));
  };

  const handleMoreBooks = () => {
    setDisplayLimit((prevDisplayLimit) => prevDisplayLimit + 6);
  };

  const filterBooks = (e) => {
    if (e.target.value === "Reset filters") {
      setDisplayLimit(6);
    } else if (e.target.value === "All books") {
      setDisplayLimit(totalBooks.length);
    } else {
      let filteredBooks = totalBooks.filter((book) =>
        book.category.includes(e.target.value)
      );
      setDisplayedBooks(filteredBooks.slice(0, displayLimit));
    }
  };

  return (
    <>
    <Header/>
      <div className="mainCatalog">
        <div className="search-bar">
          <form className="form">
            <div>
              <label htmlFor="search" className="label"></label>
              <input
                type="text"
                id="search"
                onChange={handleSearch}
                className="input"
                placeholder="Type to search"
              />
            </div>
          </form>
          <div className="forButton">
            <h4>Filter Options</h4>
            <div><button onClick={filterBooks} value={"All books"}>All books</button></div>
            <div><button onClick={filterBooks} value={"Fiction"}>Fiction</button></div>
            <div><button onClick={filterBooks} value={"Non Fiction"}>Non Fiction</button></div>
            <div><button onClick={filterBooks} value={"Biography"}>Biography</button></div>
            <div><button onClick={filterBooks} value={"History"}>History</button></div>
          </div>
          <button className="reset-filters" onClick={filterBooks} value={"Reset filters"}>Reset filters</button>
        </div>
        <div className="all-books">
          <div className="main">
            {displayedBooks.map((item, index) => (
              <div className="books" key={index}>
                <Link to={`/${item.isbn}`}>
                  <img src={image} alt="" />
                </Link>
                <div className="product-info">
                  <h2>{item.title}</h2>
                  <p>{item.authors[0]}</p>
                </div>
              </div>
            ))}
            <div className="ViewAll">
              <button onClick={handleMoreBooks}>View More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
