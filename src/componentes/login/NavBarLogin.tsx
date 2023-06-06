import { Link } from "react-router-dom"
import  logo from '../../assets/images/logo.svg'

const NavBarLogin = () => {



    
  return (
    <nav className="flex flex-row items-center justify-between w-full bg-white h-72">
          
        <img src={logo} alt="logo" className="block px-10 py-5 w-52"/>
    
        <div className="flex flex-row gap-4 mr-14">
          <Link to='/'>
            <button className="h-12 text-base font-medium text-white w-36 bg-primaryGreen rounded-xl">Iniciar sesion</button>
            </Link>
            <Link to='/Registro'>
            <button className="h-12 text-base font-semibold border-2 border-solid w-36 border-primaryGreen text-primaryGreen rounded-xl">Registrate</button>
            </Link>
        </div>
    </nav>
  )
}

export default NavBarLogin