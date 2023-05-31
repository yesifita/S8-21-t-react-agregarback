import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function NavLogo() {
  return (
    <nav>
      <Link to={'/recruiter/dashboard'} className="block px-10 py-5">
        <img src={logo} alt="" />
      </Link>
      <hr />
    </nav>
  )
}
