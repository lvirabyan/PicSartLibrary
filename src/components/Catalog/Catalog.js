import Sidebar from "./Sidebar/Sidebar";
import Data from "../Data/data.json"
import FilteredBooks from "./FilteredBooks/FilteredBooks";
import { useState } from "react";
import Header from "./../Header/Header.js"
import "./Catalog.css"
 function Catalog() {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //     fetch("http://localhost:3001/books/allbooks", {
  //         method: 'GET',
  //         credentials: 'include',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         }
  //     })
  //         .then((response) => {
  //             return response.json()
  //         })
  //         .then((books) => {
  //             setBooks(books);
  //         }).catch((e) => {
  //             console.log(e)
  //         })
  // }, [])

  // let mainBook = books.slice(0, 3);
  // console.log(mainBook);

// const handleFilteredBook = 

//   const [selectedCategory, setSelectedCategory] = useState(null);
//   //input Filter
//   const [query, setQuery] =useState("");
//   const handleInputChange = event => {
//     setQuery(event.target.value);
//   }

//   const filterdItems = Data.filter(book => book.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

//   //radio Filter 
//   const handleSelectedCategory = event => {
//     setSelectedCategory(event.target.value)
//   }
// function FilteredBook (book, selected) {
//   let filteredBook = book;
//   if(query) {
//     filteredBook = filterdItems;
//   }

//   if(selected) {
//     filteredBook = filteredBook.filter(({title, authors, category}) => 
//       title === selected || authors === selected || category === selected
//     );
//   }

//   return filteredBook
// } 
// const result = FilteredBook (Data, selectedCategory,query);
  return (
    <>
    <Header/>
    <div className="app-container">
      <div className="sidebar">
        <Sidebar
          // handleSelectedCategory={handleSelectedCategory}
          // handleInputChange={handleInputChange}
          // query={query}
        />
      </div>
      <div className="filtered-books">
        {/* <FilteredBooks result={result} /> */}
      </div>
    </div>
    </>
  )
}
export default Catalog
