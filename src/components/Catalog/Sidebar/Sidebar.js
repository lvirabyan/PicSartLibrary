import "./Sidebar.css"

function Sidebar({handleSelectedCategory}) {

  return (
    <>
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
        <input 
          type="text"
          className="search-input"
          placeholder="Serch"
        />
    </>
  )
}
export default Sidebar;
