import { useUser } from '../../context/UserProvider'
const CrearVacanteReclutador = () => {
  const authUser = useUser()
  return (
    <>
    <h1>Crear nueva oferta de empleo</h1>
      <form
        id="conteiner-job"
        className="flex flex-col items-center justify-start w-screen h-screen bg-white"
      >
        <div className='w-48 h-48 bg-orange-700 rounded-full'>
          <img>
          </img>
        </div>
        <div className="h-screen bg-orange-300">
          <div id="group-input" >
            <div className="bg-slate-200">
              <label>
                experiencia
                <select defaultValue="">
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
              <h4>Modalidad </h4>
              <label>Presencial</label>
              <input type="radio" id="presencial" name="modo" value="presencial"></input>
              <label>Virtual</label>
              <input type="radio" id="hibrido" name="modo" value="hibrido"></input>
              <label>Hibrido</label>
              <input type="radio" id="virtual" name="modo" value="virtual"></input>
            </div>
          </div>
          <div id="group-input">
            <div className="bg-slate-200">
              <label>Ubicacion</label>
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

          <div id="group-input" >
            <div className="flex flex-col ">
              <label>Breve descripcipn del puesto</label>
              <textarea className="w-64 h-36 bg-slate-200"></textarea>
            </div>
            <div className='flex flex-col bg-white'>
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
              <h4 className="pb-2">Beneficios</h4>

              <div className="grid grid-cols-3 gap-x-96 gap-y-12">
                <label className="w-48 ml-2 bg-red-500 text-start">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                  ></input>{' '}
                  horario flexible
                </label>
                <label className="w-48 ml-56 bg-red-500 text-start">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                  ></input>{' '}
                  Clases de Ingles
                </label>
                <label className="w-48 bg-red-500 ml-72 text-start">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                  ></input>{' '}
                  Bebidas y Snack
                </label>
                <label className="w-48 ml-2 bg-red-500 text-start">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                  ></input>{' '}
                  Computadora
                </label>
                <label className="w-48 ml-56 bg-red-500 text-start">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                  ></input>{' '}
                  Cobertura Prepaga
                </label>
                <label className="w-48 bg-red-500 ml-72 text-start">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                  ></input>{' '}
                  Servicio Tecnico para PC
                </label>
                <label className="w-48 ml-2 bg-red-500 text-start">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                  ></input>{' '}
                  Vacaciones Extras
                </label>
                <label className="w-48 ml-56 bg-red-500 text-start">
                  <input
                    type="checkbox"
                    id="requerimiento"
                    name="requerimientos"
                    value="js"
                  ></input>{' '}
                  Descuentos en Platzi
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox"></input>Acepto termino y condiciones
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-around w-screen bg-slate-500">
          <button className="w-48 h-12 bg-blue-400 ">Publicar Oferta</button>
          <button className="w-48 h-12 bg-blue-400 ">cancelar</button>
        </div>
      </form>
    </>
  )
}

export default CrearVacanteReclutador
