import { useUser } from '../../context/UserProvider'
import imgupload from '../../assets/icons/upload_img.svg'
import imgIconPerson from '../../assets/icons/icon_person_form_createJob.svg'
import vacaciones from '../../assets/icons/vacaciones_beneficios.svg'
import service from '../../assets/icons/service_beneficios.svg'
import computadora from '../../assets/icons/computer_beneficios.svg'
import horario from '../../assets/icons/clock_beneficios.svg'
import bebidas from '../../assets/icons/tapas_beneficios.svg'
import prepaga from '../../assets/icons/prepaga_beneficios.svg'
import platzi from '../../assets/icons/platzi_beneficios.svg'
import clases from '../../assets/icons/clases_beneficios.svg'
import close from '../../assets/icons/close X.svg'
import { Link } from 'react-router-dom'

const CrearVacanteReclutador = () => {
  const authUser = useUser()
  return (
    <>
      <div id="header_container" className="flex justify-between w-full pt-1 flex-cols-2">
        <h1 className="pb-1 pl-6 text-3xl font-bold">Crear nueva oferta de empleo</h1>
        <Link to="/recruiter/dashboard">
          <button className="mr-6 w-14 h-14 bg- bg-secondary_grey">
            <img src={close} className="p-4 "></img>
          </button>
        </Link>
      </div>
      <form
        id="conteiner-form"
        className="flex flex-col items-start justify-start w-full h-full bg-white"
      >
        <div id="conteiner_upload_image" className="flex flex-row w-full">
          <div id="conteiner_ imput_img" className="flex ml-20 flex-rows ">
            <div className="items-center justify-center text-center border-2 border-dashed text-xxs border-slate-400 w-87 h-14 rounded-xl">
              <div className="items-center pl-8 ">
                <img src={imgupload}></img>
              </div>
              <label className="">
                subir imagen
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="h-6 border-2 border-dashed cursor-pointer w-14 rounded-xl border-slate-400 opacity-20"
                ></input>
              </label>
            </div>
            <input
              type="text"
              className="w-64 ml-4 border-b-2 border-slate-500"
              placeholder="Ingrese el nombre de su empresa"
            ></input>
          </div>
          <div className="flex flex-row ml-505">
            <div className="justify-center p-4 pl-8 bg-black w-87 h-14 rounded-xl">
              <img src={imgIconPerson}></img>
            </div>
            <input
              type="text"
              placeholder="Perfil buscado:UX/UI"
              className="w-64 pr-2 ml-4 bg-white border-b-2 border-slate-500 h-14"
            ></input>
          </div>
        </div>
        {/* -------inputs superiores(experiencia y modalidad)------------- */}
        <div className="w-full h-full">
          <div id="group-input" className="">
            <div className="flex flex-col max-w-sm ">
              <label className="pb-2 pr-4 text-xl font-medium ">Experiencia</label>
              <select
                defaultValue=""
                className="items-center px-6 pr-2 text-white w-327 h-14 bg-primary rounded-xl"
              >
                <option id="" value="selecciona">
                  Selecciona nivel de experiencia
                </option>
                <option id="traine" value="traine">
                  Trainee
                </option>
                <option id="junior" value="junior">
                  Junior
                </option>
                <option id="semisenior" value="semisenior">
                  SemiSenior
                </option>
                <option id="senior" value="senior">
                  Senior
                </option>
              </select>
            </div>
            <div className="pl-0">
              <h4 className="pb-2 text-xl font-medium">Modalidad </h4>
              <label className="pl-0 mr-4 text-base font-normal">
                <input
                  type="radio"
                  id="presencial"
                  name="modo"
                  value="presencial"
                  className="mr-2"
                ></input>
                Presencial
              </label>
              <label className="pl-12 mr-4 text-base font-normal">
                <input
                  type="radio"
                  id="hibrido"
                  name="modo"
                  value="hibrido"
                  className="mr-2"
                ></input>
                Virtual
              </label>
              <label className="pl-12 mr-4 text-base font-normal">
                <input
                  type="radio"
                  id="virtual"
                  name="modo"
                  value="virtual"
                  className="mr-2"
                ></input>
                Hibrido
              </label>
            </div>
          </div>
          <div id="group-input">
            <div className="flex flex-col ">
              <label className="pb-2 text-xl font-medium">Ubicacion del Empleo</label>
              <select
                defaultValue=""
                className="items-center px-6 pr-2 text-white w-327 h-14 bg-primary rounded-xl"
              >
                <option id="cordoba" value="cordoba">
                  cordoba
                </option>
                <option id="bs as" value="bs as">
                  buenod aires
                </option>
                <option id="mendoza" value="mendoza">
                  mendoza
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="pb-2 text-xl font-medium">Salario </label>
              <select
                defaultValue=""
                className="items-center px-6 pr-2 text-white w-253 h-14 bg-primary rounded-xl"
                placeholder="Seleciona un rango"
              >
                <option id="0" value="0">
                  Seleciona un rango
                </option>
                <option id="0" value="0">
                  0-50.000
                </option>
                <option id="5" value="5">
                  50.000-100.000
                </option>
                <option id="10" value="10">
                  100.000-250.000
                </option>
                <option id="25" value="25">
                  250.000-400.000
                </option>
                <option id="40" value="40">
                  400.000-600.000
                </option>
              </select>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------- */}

          <div id="group-input">
            <div className="flex flex-col ">
              <label className="pb-1 text-xl font-medium">Breve descripcion del puesto</label>
              <p className="pl-2 mb-2 text-xs font-normal w-80 h-7">
                ¿De qué tareas será responsable el/la postulante? ¿A qué desafíos diarios se
                enfrentará?
              </p>
              <textarea
                className="h-56 pt-2 pl-3 border-2 resize-none w-325 border-secondary rounded-xl"
                placeholder="Las tareas que tendras que realizar a diario..."
              ></textarea>
            </div>
            <div className="flex flex-col h-56 mb-12 ">
              <div className="flex flex-col pb-6">
                <h4 className="pb-2 text-xl font-medium">Requerimientos del puesto </h4>
                <p className='text-base font-normal'>¿Qué perfil técnico y herramientas debería manejar el/la postulante? ¿Cuáles son las skills para este puesto?</p>
                <div id="requerimientos" className="grid grid-cols-3 pt-2">
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                      className="mr-3"
                    ></input>
                    Visual studio code
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                    ></input>{' '}
                    PHP
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                    ></input>{' '}
                    Eclipse
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                    ></input>{' '}
                    FIgma
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                    ></input>{' '}
                    Design Thinking
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                    ></input>{' '}
                    Java
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                    ></input>{' '}
                    React Native
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                    ></input>{' '}
                    React
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                    ></input>{' '}
                    Node Js
                  </label>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="pb-2 text-xl font-medium">Nivel Ingles </label>
                <select className="items-center px-6 pr-2 text-white w-253 h-14 bg-primary rounded-xl">
                  <option id="notiene" value="notiene">
                    No requiere
                  </option>
                  <option id="ados" value="ados">
                    A2
                  </option>
                  <option id="bdos" value="bdos">
                    B2
                  </option>
                  <option id="cuno" value="cuno">
                    C1
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col mt-6">
              <h4 className="pb-4 pl-16 text-xl font-medium">Beneficios</h4>
              <div className="grid grid-cols-3 gap-y-3">
                <div className="grid h-4 grid-rows-1 ml-4">
                  <img src={horario} className="ml-10"></img>
                  <label className="w-48 pl-6 ml-5">
                    <input
                      type="checkbox"
                      id="horario"
                      name="requerimientos"
                      value="horario"
                      className="ml-6 mr-2 text-base font-normal"
                    ></input>{' '}
                    Horario flexible
                  </label>
                </div>
                <div className="grid h-6 grid-rows-1">
                  <img src={clases} className="ml-36 "></img>
                  <label className="w-48 ml-36">
                    <input
                      type="checkbox"
                      id="ingles"
                      name="requerimientos"
                      value="ingles"
                      className="ml-6 mr-2 text-base font-normal"
                    ></input>{' '}
                    Clases de Ingles
                  </label>
                </div>
                <div className="grid h-6 grid-rows-1">
                  <img src={bebidas} className="ml-48 "></img>
                  <label className="w-48 pl-1 ml-48">
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                      className="ml-5 mr-2 text-base font-normal"
                    ></input>{' '}
                    Bebidas y Snack
                  </label>
                </div>
                <div className="grid h-6 grid-rows-1 ml-4">
                  <img src={computadora} className="ml-10"></img>
                  <label className="w-48 pl-1 ml-10">
                    <input
                      type="checkbox"
                      id="computadora"
                      name="requerimientos"
                      value="computadora"
                      className="ml-6 mr-2 text-base font-normal"
                    ></input>{' '}
                    Computadora
                  </label>
                </div>
                <div className="grid h-6 grid-rows-1">
                  <img src={prepaga} className="ml-36"></img>
                  <label className="w-48 pr-1 ml-36">
                    <input
                      type="checkbox"
                      id="prepaga"
                      name="requerimientos"
                      value="prepaga"
                      className="ml-6 mr-2 text-base font-normal"
                    ></input>{' '}
                    Cobertura Prepaga
                  </label>
                </div>
                <div className="grid h-6 grid-rows-1">
                  <img src={service} className="ml-48"></img>
                  <label className="pr-1 ml-48 ">
                    <input
                      type="checkbox"
                      id="service"
                      name="requerimientos"
                      value="service"
                      className="ml-6 mr-2 text-base font-normal"
                    ></input>{' '}
                    Servicio Tecnico para PC
                  </label>
                </div>
                <div className="grid h-6 grid-rows-1 ml-4">
                  <img src={vacaciones} className="ml-10"></img>
                  <label className="w-48 pl-1 ml-10 ">
                    <input
                      type="checkbox"
                      id="vacaciones"
                      name="requerimientos"
                      value="vacaciones"
                      className="ml-6 mr-2 text-base font-normal"
                    ></input>
                    Vacaciones Extras
                  </label>
                </div>
                <div className="grid h-6 grid-rows-1 ">
                  <img src={platzi} className="ml-36"></img>

                  <label className="pr-1 ml-36 w-72">
                    <input
                      type="checkbox"
                      id="platzi"
                      name="requerimientos"
                      value="platzi"
                      className="ml-6 mr-2 text-base font-normal"
                    ></input>
                    Descuentos en Platzi
                  </label>
                </div>
              </div>
              <div className="h-6 pt-6 pb-0 mb-0">
                <label className="text-xl font-medium ">
                  <input type="checkbox" className="ml-16 mr-2 "></input>He leido y
                  estoy de acuerdo con la politica de Reclutando
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around w-full pt-16">
          <Link to='/recruiter/dashboard'>
          <button className="w-48 h-12 text-base font-medium bg-white border-2 border-skyblue text-skyblue">
            Cancelar
          </button>
          </Link>
          <button className="w-48 h-12 text-base font-medium text-white bg-primary_green">
            Publicar Oferta
          </button>
        </div>
      </form>
    </>
  )
}

export default CrearVacanteReclutador
