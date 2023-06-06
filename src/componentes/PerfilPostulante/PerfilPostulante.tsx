import logo from '../../assets/images/logo.png'
import NavLogo from '../Nav/NavLogo'
import NavMenu from '../Nav/NavMenu'
import Cardfoto from './Cardfoto'

const PerfilPostulante = () => {
  return (
    <>
      <div className="relative flex">
        <div className="z-10">
          <NavMenu />
        </div>

        <div className="absolute w-full pl-16">
          <NavLogo />
        </div>

        <div>
            <Cardfoto/>
        </div>
      </div>
    </>
  )
}

export default PerfilPostulante
