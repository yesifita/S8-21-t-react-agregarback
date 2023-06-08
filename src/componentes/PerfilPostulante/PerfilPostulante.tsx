import NavLogoPostu from '../Nav/NavLogoPostu'
import NavMenuPostu from '../Nav/NavMenuPostu'
import CardDatosContacto from './CardDatosContacto'
import CardEducacion from './CardEducacion'
import Cardfoto from './CardFoto'

const PerfilPostulante = () => {
  return (
    <>
      <div className="relative flex">
        <div className="z-10 ">
          <NavMenuPostu />
        </div>

        <div className="absolute w-full pl-16 bg-secundaryGreyLight">
          <NavLogoPostu />
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
