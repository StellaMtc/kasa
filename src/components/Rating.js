import redStar from "../assets/red-star.png";
import whiteStar from "../assets/white-star.png";
import "../styles/Rating.scss";

function Rating(props) {
  const rate = props.rate;
  return (
    <div className="rate-section">
      <div>
        {rate >= 1 ? (
          <img src={redStar} alt="Etoile rouge" />
        ) : (
          <img src={whiteStar} alt="Etoile blanche" />
        )}
      </div>
      <div>
        {rate >= 2 ? (
          <img src={redStar} alt="Etoile rouge" />
        ) : (
          <img src={whiteStar} alt="Etoile blanche" />
        )}
      </div>
      <div>
        {rate >= 3 ? (
          <img src={redStar} alt="Etoile rouge" />
        ) : (
          <img src={whiteStar} alt="Etoile blanche" />
        )}
      </div>
      <div>
        {rate >= 4 ? (
          <img src={redStar} alt="Etoile rouge" />
        ) : (
          <img src={whiteStar} alt="Etoile blanche" />
        )}
      </div>
      <div>
        {rate >= 5 ? (
          <img src={redStar} alt="Etoile rouge" />
        ) : (
          <img src={whiteStar} alt="Etoile blanche" />
        )}
      </div>
    </div>
  );
}

export default Rating;