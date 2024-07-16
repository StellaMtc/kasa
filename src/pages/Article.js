import "../styles/Article.scss";
import apartments from "../datas/logements.json";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

function Article() {
  const currentApartmentId = useParams().id;

  const apartment = apartments.filter(function (apartment) {
    return apartment.id === currentApartmentId;
  })[0];

  return (
    <article>
      <Carousel pictures={apartment.pictures} title={apartment.title} />
      <div className="apartement-infos">
        <div className="title-and-location">
          <h1 className="title">{apartment.title}</h1>
          <p className="location">{apartment.location}</p>
        </div>

        <div className="host">
          <p className="host-name">{apartment.host.name}</p>
          <img
            src={apartment.host.picture}
            alt={apartment.host.name}
            className="host-image"
          />
        </div>

        <div className="tags-section">
          {apartment.tags.map((tag) => (
            <p key={tag} className="tag">
              {tag}
            </p>
          ))}
        </div>

        <div className="rating-section">
          <Rating rate={apartment.rating} />
        </div>

        <div id="description-collapse">
          <Collapse title="Description" content={apartment.description} />
        </div>

        <div id="equipements-collapse">
          <Collapse title="Equipements" content={apartment.equipments.map((equipement) => (
            <p key={equipement}>
              {equipement}
            </p>
          ))} />
        </div>

      </div>
    </article>
  );

}

export default Article;