import logo from '../../assets/images/logo.png'
import NavLogo from '../Nav/NavLogo'
import NavMenu from '../Nav/NavMenu'
import CardDatosContacto from './CardDatosContacto'
import CardEducacion from './CardEducacion'
import Cardfoto from './CardFoto'

const PerfilPostulante = () => {
  return (
    <>
      <div className="relative flex">
        <div className="z-10 ">
          <NavMenu />
        </div>

        <div className="absolute w-full pl-16 bg-secundaryGreyLight">
          <NavLogo />
        </div>
        <div>
          <Cardfoto />
        </div>
        <div className='grid grid-rows-2 mt-24'>

          <div className=" ml-72">
            <CardDatosContacto />
          </div>
          <div className="ml-72">
            <CardEducacion />
          </div>
        </div>
      </div>
    </>
  )
}

export default PerfilPostulante
