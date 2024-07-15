import './card.scss'

function Card({ cover, name }) {
  return (
    <div className="lodging-card">
      <img className="lodging-card-image" src={cover} alt={name} />
      <div className="card-gradient"></div>
      <p>{name}</p>
    </div>
  )
}

export default Card