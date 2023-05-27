import { useUser } from '../../context/UserProvider'
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 -960 960 960"
                width="18"
              >
                <path d="M479.825-313Q467-313 458.5-321.625T450-343v-341l-99 99q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l150-150q5-5 10.133-7 5.134-2 11-2Q486-788 491-786q5 2 10 7l151 151q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9l-99-98v341q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625ZM220-160q-24 0-42-18t-18-42v-113q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T220-333v113h520v-113q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T800-333v113q0 24-18 42t-42 18H220Z" />
              </svg>{' '}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="white"
              >
                <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5T731-360q31 14 50 41t19 65v94H160Z" />
              </svg>
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
              <label className='m-6 ml-0'>Presencial</label>
              <input type="radio" id="presencial" name="modo" value="presencial"></input>
              <label  className='m-6 ml-12'>Virtual</label>
              <input type="radio" id="hibrido" name="modo" value="hibrido"></input>
              <label  className='m-6 ml-12'>Hibrido</label>
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
