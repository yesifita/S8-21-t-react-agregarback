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
const CrearVacanteReclutador = () => {
  const authUser = useUser()
  return (
    <>
      <h1 className="pb-1 pl-6 text-3xl font-bold">Crear nueva oferta de empleo</h1>
      <form
        id="conteiner-job"
        className="flex flex-col items-start justify-start w-screen h-screen bg-white"
      >
        <div className="flex justify-around w-screen ">
          <div className="items-center justify-center text-center border-2 border-dashed text-xxs border-slate-400 w-87 h-14 rounded-xl">
            <div className="items-center pl-8">
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
          <div className="flex flex-row ">
            <div className="justify-center p-4 pl-8 bg-black w-87 h-14 rounded-xl">
              <img src={imgIconPerson}></img>
            </div>
            <input
              type="text"
              placeholder="perfil buscado:UX/UI"
              className="pl-2 bg-white border-none w-96 h-14"
            ></input>
          </div>
        </div>
        <div className="h-screen bg-orange-300">
          <div id="group-input">
            <div className="flex flex-col max-w-sm">
              <label className="flex flex-col pr-4 text-lg ">
                Experiencia
                <select defaultValue="">
                  <option id="" value="selecciona">
                    Selecciona nivel de experiencia{' '}
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
              </label>
            </div>
            <div>
              <h4 className="text-lg ">Modalidad </h4>
              <label className="m-6 ml-0">Presencial</label>
              <input type="radio" id="presencial" name="modo" value="presencial"></input>
              <label className="m-6 ml-12">Virtual</label>
              <input type="radio" id="hibrido" name="modo" value="hibrido"></input>
              <label className="m-6 ml-12">Hibrido</label>
              <input type="radio" id="virtual" name="modo" value="virtual"></input>
            </div>
          </div>
          <div id="group-input">
            <div className="bg-slate-200">
              <label className="flex flex-col text-xl">Ubicacion</label>
              <select defaultValue="">
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
            <div>
              <label>Salario </label>
              <select defaultValue="">
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
            <div className="flex flex-col">
              <label>Breve descripcipn del puesto</label>
              <textarea className="w-64 h-36 bg-slate-200"></textarea>
            </div>
            <div className="flex flex-col bg-white">
              <div className="flex flex-col mb-10 bg-red-400">
                <h4>Requerimientos del puesto </h4>
                <div className="flex-row">
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                    ></input>{' '}
                    JS
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                    ></input>{' '}
                    Node
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                    ></input>{' '}
                    Express
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                    ></input>{' '}
                    TS
                  </label>
                </div>
              </div>
              <div className="flex flex-col pb-4">
                <label>nivel ingles </label>
                <select className="w-48 h-10 border-2 border-solid border-slate-200 rounded-xl">
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

          <div id="group-input">
            <div className="flex flex-col mt-20">
              <h4 className="pb-4">Beneficios</h4>

              <div className="grid grid-cols-3 gap-x-96 gap-y-6">
                <div className='grid h-6 grid-rows-1'>
                  <img src={horario} className='ml-2'></img>
                <label className="w-48 pl-1 ml-2">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                    className="ml-6 mr-2 text-base font-normal"
                  ></input>{' '}
                  Horario flexible
                </label></div>
                <div className='grid h-6 grid-rows-1'>
                  <img src={clases} className='ml-56 '></img>
                <label className="w-48 ml-56">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                    className="ml-6 mr-2 text-base font-normal"
                  ></input>{' '}
                  Clases de Ingles
                </label></div>
                <div className='grid h-6 grid-rows-1'>
                  <img src={bebidas} className=' ml-72'></img>
                <label className="w-48 pl-1 ml-72">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                    className="ml-6 mr-2 text-base font-normal"
                  ></input>{' '}
                  Bebidas y Snack
                </label>
                </div>
                <div className='grid h-6 grid-rows-1'>
                  <img src={computadora} className='ml-2'></img>
                <label className="w-48 pl-1 ml-2">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                    className="ml-6 mr-2 text-base font-normal"
                  ></input>{' '}
                  Computadora
                </label>
                </div>
                <div className='grid h-6 grid-rows-1'>
                  <img src={prepaga} className='ml-56'></img>
                <label className="w-48 pr-1 ml-56">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                    className="ml-6 mr-2 text-base font-normal"
                  ></input>{' '}
                  Cobertura Prepaga
                </label>
                </div>
                <div className='grid h-6 grid-rows-1 '>
                  <img src={service} className='ml-72'></img>
                <label className="w-56 pr-1 ml-72 ">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                    className="ml-6 mr-2 text-base font-normal"
                  ></input>{' '}
                  Servicio Tecnico para PC
                </label>
                </div>
                <div className='grid h-6 grid-rows-1'>
                  <img src={vacaciones} className='ml-2'></img>
                <label className="w-48 pr-1 ml-2 ">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                    className="ml-6 mr-2 text-base font-normal"
                  ></input>
                  Vacaciones Extras
                </label>
                </div>
                <div className="grid h-6 grid-rows-1 bg-slate-200">
                  <img src={platzi} className="ml-56"></img>

                  <label className="pr-1 ml-56 w-72">
                    <input
                      type="checkbox"
                      id="requerimiento"
                      name="requerimientos"
                      value="js"
                      className="ml-6 mr-2 text-base font-normal"
                    ></input>
                    Descuentos en Platzi
                  </label>
                </div>
              </div>
              <div>
                <label className='bg-red-400 '>
                  <input type="checkbox" className='mt-12 ml-4'></input>Acepto termino y condiciones
                  </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-around w-screen pt-4 mt-2 ">
          <button className="w-48 h-12 bg-blue-400 ">Publicar Oferta</button>
          <button className="w-48 h-12 bg-blue-400 ">cancelar</button>
        </div>
      </form>
    </>
  )
}

export default CrearVacanteReclutador
