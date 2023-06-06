import editar from '../../assets/icons/editpencil.svg'
import telefono from '../../assets/icons/telefono.svg'
import mail from '../../assets/icons/mail.svg'
import mapa from '../../assets/icons/location.svg'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillBehanceSquare } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import check from '../../assets/icons/check_box.svg'
import { Link } from 'react-router-dom'

const CardDatosContacto = () => {
  return (
    <>
      <div className="h-64 mr-12 border-2 border-solid w-734 rounded-xl drop-shadow-md border-secundaryGreyLight2">
        <header className="flex flex-row justify-around mt-4 mb-2">
          <h3 className="mr-8 text-base font-bold pr-28 font-primaria text-primaryBlueDark ">
            Datos de contacto
          </h3>
          <button className="grid h-8 grid-cols-2 pl-2 mt-1 ml-40 text-center border-2 border-solid w-78 border-secundaryGreyLight2 bg-secundaryGreyLight">
            Editar
            <img src={editar} className="pt-1 pl-2 "></img>
          </button>
        </header>
        <main className="">
          <div className="flex flex-row justify-between pt-2 pr-6">
            <div id="imput telefono/mail" className="flex flex-col gap-3">
              <div className="flex flex-row items-center justify-start pl-4">
                <div className="flex justify-center w-10 h-10 bg-white border-2 border-solid border-secundaryViolet rounded-xl">
                  <img src={telefono} className="w-6 "></img>
                </div>
                <input
                  type="number"
                  name="23-5990022"
                  value="23-5990022"
                  placeholder="223-5990022"
                  className="h-10 pl-3 ml-2 text-xs font-semibold text-secondary font-primaria text-start rounded-xl w-168 bg-secundaryGreyLight2"
                ></input>
              </div>
              <div className="flex flex-row items-center justify-start pl-4">
                <div className="flex justify-center w-10 h-10 bg-white border-2 border-solid rounded-xl border-secundaryViolet">
                  <img src={mail} className="w-6 "></img>
                </div>
                <input
                  type="mail"
                  name="Eduardo.medina@mail.com"
                  value="Eduardo.medina@mail.com"
                  placeholder="Eduardo.medina@mail.com"
                  className="h-10 pl-3 pr-2 ml-2 font-semibold text-xxs text-secondary font-primaria text-start rounded-xl w-168 bg-secundaryGreyLight2"
                ></input>
              </div>
            </div>

            <div id="iconos_redes" className="grid w-48 h-12 grid-cols-4 gap-1">
              <div className="flex items-center justify-center border-2 rounded-xl border-secundaryViolet">
                <AiFillGithub />
              </div>
              <div className="flex items-center justify-center border-2 rounded-xl border-secundaryViolet">
                <AiFillBehanceSquare />
              </div>
              <div className="flex items-center justify-center border-2 rounded-xl border-secundaryViolet">
                <AiOutlineInstagram />
              </div>
              <div className="flex items-center justify-center border-2 rounded-xl border-secundaryViolet">
                <AiFillLinkedin />
              </div>
            </div>
          </div>
          <div className="flex h-20 mt-8 ml-4 w-483">
            <div className="h-10 rounded-tl-xl rounded-bl-xl bg-secundaryGreyLight2 w-72">
              <div className="flex flex-row h-10 gap-2 py-2 w-80 ">
                <img src={mapa} className="w-4 ml-2"></img>
                <p className="w-56 pt-1 text-xs font-semibold text-start font-primaria text-secundaryViolet">
                  Buenos Aires,Mar del Plata. ARG
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center h-10 pt-2 items-centerw-56 bg-secundaryGreyLight2 rounded-br-xl rounded-tr-xl">
              <img src={check} className="w-10 h-10 pb-3 pl-3 pr-2 "></img>
              <p className="w-56 pt-1 pl-1 text-xs font-semibold h-80 text-start text-secundaryViolet">
                Disponible para trabajo remoto
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default CardDatosContacto
