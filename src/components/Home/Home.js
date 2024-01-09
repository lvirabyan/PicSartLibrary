import React from 'react';
import FeaturedBooks from '../FeaturedBooks/FeaturedBooks';
import Header from '../Header/Header';
import RecentAdditionsCarousel from '../RecentAdditionsCarousel/RecentAdditionsCarousel';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer'
import './Home.css'


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
    console.log(books);

    // let mainBook = books.slice(0, 3);
    // console.log(mainBook);
  return (
    <>
      <Header/>
      <div className="banner-container">
        <div className="banner-overlay">
          <h1 className="banner-heading">Welcome to the Library</h1>
          <p className="banner-subheading">Explore a world of books</p>
            <FeaturedBooks recentBooks={books}/>
        </div>
      </div>
      <Footer/>
    </>
    
  );
};

export default Home;
