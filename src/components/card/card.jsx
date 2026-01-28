import { Link } from "react-router";

import "./card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/details/${id}`} className="card-link">
      <article key={id} className="card">
        <img src={cover} alt={title} className="card-img" />
        <div className="card-overlay">
          <h2 className="card-title">{title}</h2>
        </div>
      </article>
    </Link>
  );
};

export default Card;
