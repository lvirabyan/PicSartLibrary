import "./Card.css"
function Card({ book, key }) {
  return (
    <section className="card" key = {key}>
      <img className="card-img" src={`${process.env.PUBLIC_URL}/images/${book.cover_url}`} alt={book.title} />
      <div className="card-details">
        <h3 className="card-title">{book.title}</h3>
        <h4 className="card-author">{book.authors}</h4>
      </div>
    </section>
  );
}

export default Card;
