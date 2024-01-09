import React from 'react';
import FeaturedBooks from '../FeaturedBooks/FeaturedBooks';
import Header from '../Header/Header';
import RecentAdditionsCarousel from '../RecentAdditionsCarousel/RecentAdditionsCarousel';
import recentBooks from "../Data/data.json";
import Footer from '../Footer/Footer'
import './Home.css'


const Home = () => {
  return (
    <>
      <Header/>
      <div className="banner-container">
        <div className="banner-overlay">
          <h1 className="banner-heading">Welcome to the Library</h1>
          <p className="banner-subheading">Explore a world of books</p>
            <FeaturedBooks recentBooks={recentBooks}/>
        </div>
      </div>
      <RecentAdditionsCarousel recentBooks={recentBooks} />
      <Footer/>
    </>
    
  );
};

export default Home;
