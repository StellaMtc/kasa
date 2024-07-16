import { Link } from "react-router-dom";
import "../styles/Home.scss";
import sloganBackground from "../assets/slogan-background.png";
import apartment from "../datas/logements.json";
import Banner from "../components/Banner";

function Home() {
  return (
    <main>
      <Banner image={sloganBackground} slogan="Chez vous, partout et ailleurs" />
      <section className="gallery">
        {apartment.map((apartment) => (
          <Link to={`/Kasa/logements/${apartment.id}`} key={apartment.id} className="apartment-card">
            <img
              src={apartment.cover}
              alt={apartment.title}
              className="apartment-card-image"
            />
            <p className="apartment-card-title">{apartment.title}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Home;