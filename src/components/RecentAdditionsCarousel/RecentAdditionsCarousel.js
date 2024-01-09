import React from 'react';
// import Slider from 'react-slick';
import './RecentAdditionsCarousel.css';

const RecentAdditionsCarousel = ({ recentBooks }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(5, recentBooks.length), // Ensure slidesToShow is not greater than the number of books
    slidesToScroll: 1,
  };

  return (
    <div className="recent-additions-carousel">
      {/* <Slider {...settings}>
        {recentBooks.map((book, index) => (
          <div key={index} className="carousel-item">
            <img src={book.cover_url} alt={book.title} />
            <p className="book-title">{book.title}</p>
          </div>
        ))}
      </Slider> */}
    </div>
  );
};

export default RecentAdditionsCarousel;
