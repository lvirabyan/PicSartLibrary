import "./FilterBy.css";

function FilterBy({handleSelectedCategory}) {
  console.log(handleSelectedCategory,55555555);
  return (
    <div>
      <h3>Filter By</h3>
      <lable className="sidebar-lable-conteiner">
        <input type="radio"/>
        <span className="checkmark"></span> Title
      </lable>
      <lable className="sidebar-lable-conteiner"> 
        <input type="radio"/>
        <span className="checkmark"></span> Autors
      </lable>
      <lable className="sidebar-lable-conteiner"> 
        <input type="radio"/>
        <span className="checkmark"></span> Category
      </lable>
    </div>
  )
}
export default FilterBy;

