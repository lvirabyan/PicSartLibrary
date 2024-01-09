import "./Sidebar.css"
import FilterBy from "./FilterBy/FilterBy";
import SearchInput from "../../SearchInput/SearchInput";

function Sidebar({handleSelectedCategory}) {
    console.log(handleSelectedCategory, "1111111 ")
  return (
    <div>
        <SearchInput/>
        <FilterBy handleSelectedCategory = {handleSelectedCategory}/>
    </div>
  )
}
export default Sidebar;
