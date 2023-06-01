import React from 'react'

const Vacante = () => {
  return (
    <div id="conteiner-job" className="w-screen h-screen bg-red-400">
      <form className="w-3/4 h-screen bg-white">
        <div id="content-top">
          <div>
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
            <label>Modalidad </label>
            <label>Presencial</label>
            <input type="radio" id="presencial" name="modo" value="presencial"></input>

            <label>Virtual</label>
            <input type="radio" id="hibrido" name="modo" value="hibrido"></input>
            <label>Hibrido</label>
            <input type="radio" id="virtual" name="modo" value="virtual"></input>
          </div>
        </div>
        <div>
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
        <p>------------------------------------------------------------------</p>
        <div id="content-medium">
          <div>
            <label>Breve descripcipn del puesto</label>
            <textarea className="h-48 w-36 bg-slate-200"></textarea>
          </div>
          <div>
            <label>Requerimientos del puesto </label>
            <label>
              <input type="checkbox" id="requerimiento" name="requerimientos" value="js"></input> JS
            </label>
            <label>
              <input type="checkbox" id="requerimiento" name="requerimientos" value="js"></input>{' '}
              Node
            </label>
            <label>
              <input type="checkbox" id="requerimiento" name="requerimientos" value="js"></input>{' '}
              Express
            </label>
            <label>
              <input type="checkbox" id="requerimiento" name="requerimientos" value="js"></input> TS
            </label>
          </div>
          <div>
            <label>nivel ingles </label>
            <select>
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
          <p>------------------------------------------------------------------</p>
          <div id="content-botton">
            <div>
              <label>Beneficios</label>
              <label>
                <input type="checkbox" id="requerimiento" name="requerimientos" value="js"></input>{' '}
                horario flexible
              </label>
              <label>
                <input type="checkbox" id="requerimiento" name="requerimientos" value="js"></input>{' '}
                Clases de Ingles
              </label>
              <label>
                <input type="checkbox" id="requerimiento" name="requerimientos" value="js"></input>{' '}
                Bebidas y Snack
              </label>
              <label>
                <input type="checkbox" id="requerimiento" name="requerimientos" value="js"></input>{' '}
                Computadora
              </label>
              <label>
                <input type="checkbox" id="requerimiento" name="requerimientos" value="js"></input>{' '}
                Cobertura Prepaga
              </label>
              <label>
                <input type="checkbox" id="requerimiento" name="requerimientos" value="js"></input>{' '}
                Servicio Tecnico para PC
              </label>
              <label>
                <input type="checkbox" id="requerimiento" name="requerimientos" value="js"></input>{' '}
                Vacaciones Extras
              </label>
              <label>
                <input type="checkbox" id="requerimiento" name="requerimientos" value="js"></input>{' '}
                Descuentos en Platzi
              </label>
              <div>
                <label> 
                <input type="checkbox"></input>Acepto termino y condiciones</label>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-blue-400">Publicar Oferta</button>
          <button className="bg-blue-400">cancelar</button>
      </form>
    </div>
  )
}

export default Vacante
