import "./FilteredBooks.css"
import Card from "../../Card/Card";

function FilteredBooks({result}) {
  return (
    <>
    <>
      <section className="card-container">
        {result.map((el, i) => (
          <Card book={el} key={i} />
        ))}
      </section>
    </>
    </>
  )
}
export default FilteredBooks;