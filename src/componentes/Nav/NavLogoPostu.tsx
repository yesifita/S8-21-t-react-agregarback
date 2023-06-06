import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

export default function NavLogoPostu() {
    return (
        <nav>
            <Link to={'/postulate/dashboard'} className="block px-10 py-5 w-52">
                <img src={logo} alt="logo" />
            </Link>
            <hr />
        </nav>
    )
}
