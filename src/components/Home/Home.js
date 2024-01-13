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
    let isMounted = true;
  
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3003/book/allbooks", {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (!isMounted) {
          return; // Avoid updating state if component is unmounted
        }
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const booksData = await response.json();
        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
  
    fetchData();
  
    return () => {
      // Cleanup function to set isMounted to false when the component is unmounted
      isMounted = false;
    };
  }, []);
  
   
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
      </div>
      <Footer/>
    </>
    
  );
};

export default Home;
