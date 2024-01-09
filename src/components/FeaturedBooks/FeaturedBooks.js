import React, { useState } from 'react';
import './FeaturedBooks.css'; 

const Book = ({ title, authors, thumbnail }) => (
  <div className="book">
    <img src={`${thumbnail}`} alt={title} />
    <p className="book-title">{title}</p>
    <p className="book-author">{authors}</p>
  </div>
);


const FeaturedBooks = ({recentBooks}) => {
  const [visibleBooks, setVisibleBooks] = useState(3);
  const totalBooks = recentBooks.length;

  const handleViewAllClick = () => {
    setVisibleBooks(prevVisibleBooks => prevVisibleBooks + 3);
  };

  const booksToShow = recentBooks.slice(0, visibleBooks);

  return (
    <div className="recent-additions">
      <h2>Recent Additions</h2>
      <div className='books-container'>
        {booksToShow.map((book, index) => (
          <Book key={index} title={book.title} authors={book.authors} thumbnail={book.cover_url} />
        ))}
      </div>
      {visibleBooks < totalBooks && (
        <div className="view-all-button-container">
          <button className="view-all-button" onClick={handleViewAllClick}>
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedBooks;
