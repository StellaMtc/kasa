import { Link } from 'react-router-dom'
import './error.scss'

function Error() {
  return (
    <main>
      <p className="error404">404</p>
      <p className="error-msg">Oups! La page que vous demandez n'existe pas.</p>
      <Link to={'/'}>
        <p className="link-to-home">Retourner sur la page d'accueil</p>
      </Link>
    </main>
  )
}

export default Error