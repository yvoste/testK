import FullStar from "../../assets/full_star.png";
import EmptyStar from "../../assets/empty_star.png";

import "./rating.scss";

const Rating = ({ rating }) => {
  const score = Number(rating); // S'assure que c'est un nombre

  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <p key={i}>
          {i < score ? (
            <img src={FullStar} alt="Étoile pleine" className="full-star" />
          ) : (
            <img src={EmptyStar} alt="Étoile vide" className="empty-star" />
          )}
        </p>
      ))}
    </div>
  );
};

export default Rating;
