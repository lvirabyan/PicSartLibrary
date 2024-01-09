import Sidebar from "./Sidebar/Sidebar";
import Data from "../Data/data.json"
import FilteredBooks from "./FilteredBooks/FilteredBooks";
import { useState } from "react";
import Card from "../Card/Card";
 function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  //input Filter
  const [query, setQuery] =useState("");
  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const filterdItems = Data.filter(book => book.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

  //radio Filter 
  const handleSelectedCategory = event => {
    setSelectedCategory(event.target.value)
  }
function FilteredBook (book, selected) {
  let filteredBook = book;
  if(query) {
    filteredBook = filterdItems;
  }
  if(selected) {
    filteredBook = filteredBook.filter(({title, authors, category}) => 
      title === selected || authors === selected || category === selected
    );
  }
  return filteredBook.map( (book, index )=> {
    <Card index = {index} book = {book}/>
  })
} 
const result = FilteredBook (Data, selectedCategory,query);

  return (
    <div>
      <Card book= {Data[0]}/>
      <Sidebar handleSelectedCategory = {handleSelectedCategory} handleInputChange = {handleInputChange} query = {query} />
      <FilteredBooks result = {result}/>
    </div>
  )
}
export default Catalog
