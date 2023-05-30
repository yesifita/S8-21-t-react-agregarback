import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function NavLogo() {
  return (
    <nav>
      <Link to={'/recruiter/dashboard'} className="block py-5 px-10">
        <img src={logo} alt="" />
      </Link>
      <hr />
    </nav>
  )
}
