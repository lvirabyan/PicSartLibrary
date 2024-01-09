import "./Card.css"
function Card({book, index}) {
  return (
        <section key ={index} className="card">
            <img className="card-img" src={book.cover_url} alt={book.title}/>
            <div className="card-detalis">
            <h3 className="card-title">{book.title}</h3>
            <h4 className="card-title">{book.autors}</h4>
            </div>
        </section> 
  )
}
export default Card;
