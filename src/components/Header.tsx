import { Link } from 'react-router-dom'
import  Logo  from '../images/ab-high-resolution-logo-white-transparent.png'

function Header() {
  return (
    <div className="flex justify-around text-white text-xl p-10 align-middle">
      <h1><Link to={"/landingpage"}>Acceuil</Link></h1>
      <h1>A propos</h1>
      <img src={Logo} alt="" className="h-10" />
      <h1>Mon Travail</h1>
      <h1>Me Contacter</h1>
    </div>
  )
}

export default Header