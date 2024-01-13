import React from 'react';
import FeaturedBooks from '../FeaturedBooks/FeaturedBooks';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer'
import './Home.css'
import image from "../../images copy/algoritms.webp"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3003/book/allbooks", {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((books) => {
                setBooks(books);
            }).catch((e) => {
                console.log(e)
            })
    }, [])
    const CustomPrevArrow = (props) => {
      const { className, onClick } = props;
      return <div className={`${className} custom-arrow prev`} onClick={onClick}></div>;
    };
    const CustomNextArrow = (props) => {
      const { className, onClick } = props;
      return <div className={`${className} custom-arrow next`} onClick={onClick}></div>;
    };
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    };
    const  mainBook = books.slice(0, 3);
    console.log(mainBook);
  return (
    <>
      <Header/>
      <div className="banner-container">
        <div className="banner-overlay">
          <h1 className="banner-heading">Welcome to the Library</h1>
          <p className="banner-subheading">Explore a world of books</p>
          <lider/>
            <FeaturedBooks recentBooks={books}/>
        </div>
        <div className="recent-additions">
          <h2>Recent Additions</h2>
          <Slider {...settings}>
            {mainBook.map((book) => (
              <div key={book.isbn}>
                <div className='imgDiv' key={book.id}>
                  <p>hsdbfsdhjgfkjsdffgkjfhgkjdfhghdjf</p>
                  <img src={image} className="sliderimg" alt={book.title} />
                </div>
              </div>
            ))}
          </Slider>
    </div>
        {/* <div className="sliderContainer"> */}
        {/* <AliceCarousel
          autoPlayInterval={3000}
          dotsDisabled={false}
          items={books.slice(0,3).map((book) => (
            <div className='imgDiv' key={book.id}>
              <img src={image} className="sliderimg" alt={book.title} />
            </div>
          ))}
        />
      </div> */}
      <div className="bookCount">
        <p>Total Books: {books.length}</p>
      </div>
      </div>
      <Footer/>
    </>
    
  );
};

export default Home;
