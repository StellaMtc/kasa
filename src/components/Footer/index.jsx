import logoFooter from '../../assets/img/logo-footer.png'
import './footer.scss'

function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer