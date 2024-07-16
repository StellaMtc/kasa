import "../styles/Banner.scss";

function Banner(props) {
    return (
        <div className="banner-container">
            <img
                src={props.image}
                alt="Arrière plan de la bannière"
                className="banner-background"
            />
            {props.slogan ? <p className="slogan">{props.slogan}</p> : null}

        </div>
    )
}

export default Banner;