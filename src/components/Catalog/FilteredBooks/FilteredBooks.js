import "./FilteredBooks.css"
import Card  from "../../Card/Card.js"

function FilteredBooks({books}) {
    console.log("111111", books);
  return (
    <>
    <section className="card-conteiner">
        {books}
    </section>
    </>
  )
}
export default FilteredBooks;