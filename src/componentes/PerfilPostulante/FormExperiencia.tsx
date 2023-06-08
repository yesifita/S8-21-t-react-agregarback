import { useState } from 'react'
import {  FormDataExperiencia } from '../../types'
import { Link } from 'react-router-dom'
import close from '../../assets/icons/close X.svg'
import { db } from '../../service/firebase'
import { collection, addDoc } from 'firebase/firestore'

const FormExperiencia = () => {
  const [inputValues, setInputValues] = useState<FormDataExperiencia['inputValues']>({
    cargo:'',
    empresa:'',
    sector:'',
     mesInicio:'',
     añoInicio:'',
     mesFin:'',
     añoFin:'',
     texto:'',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault(), crearDataExperiencia(inputValues)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    })
  }
  const crearDataExperiencia = async (e) => {
    await addDoc(collection(db, 'DatosExperiencia'), { inputValues })
  }

  return (
    <div
      id="modal_conteiner"
      className="fixed top-0 left-0 right-0 flex items-center justify-center w-screen h-full m-0 bg-fondoT"
    >
      <div className="mb-4 bg-secundaryGreyLight w-512 h-720 rounded-xl">
        <div>
        <Link to='/postulante/perfil'>
        <button className="float-right w-8 h-8 mr-2 bg-secundaryGreyLight2">
              <img src={close} className="px-1 pb-5 w-14 h-14"></img>
            </button>
            </Link>
          <h1 className="h-6 p-4 mt-2 mb-2 text-xl font-bold text-center bg-secundaryGreyLight font-primaria text-primaryBlueDark">
            Agregar Experiencia
          </h1>

          <div className="pt-3 pl-2 h-664 w-467">
            <form onSubmit={handleSubmit} className="h-643 w-512">
              <p className="h-5 pt-2 pl-2 mb-2 text-base text-secundaryViolet text-start font-primaria">
                Datos de el cargo que ocupaste
              </p>
              <div id="cargo" className="pt-2">
                <div className="flex flex-col justify-center ">
                  <label className="pb-2 pl-2 text-sm font-primaria text-primaryBlueDark w-450 text-start">
                    Cargo
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    value={inputValues.cargo}
                    onChange={handleChange}
                    placeholder="Ej. Web developer"
                    className="h-10 pl-2 ml-2 w-483 rounded-xl bg-secundaryGreyLight2"
                  ></input>
                </div>
              </div>

              {/*----------------------- institucion------------------ */}
              <div id="institucion" className="pt-2">
                <div className="flex flex-col justify-center ">
                  <label className="pb-2 pl-2 text-sm font-primaria text-primaryBlueDark w-450 text-start">
                    Nombre de la empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={inputValues.empresa}
                    onChange={handleChange}
                    placeholder="Ej. Microsoft"
                    className="h-10 pl-2 ml-2 w-483 rounded-xl bg-secundaryGreyLight2"
                  ></input>
                </div>
              </div>
              {/**************** *********sector************* */}
              <div id="sector" className="pt-2">
                <div className="flex flex-col justify-center ">
                  <label className="pb-2 pl-2 text-sm font-primaria text-primaryBlueDark w-450 text-start">
                    Sector
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={inputValues.empresa}
                    onChange={handleChange}
                    placeholder="Ej. Servicios de desarrollo web"
                    className="h-10 pl-2 ml-2 w-483 rounded-xl bg-secundaryGreyLight2"
                  ></input>
                </div>
              </div>
              {/* -------------------------------fecha inicio------------------ */}
<h3 className='pl-3 mt-3 text-base font-bold text-secundaryViolet font-primaria'>fecha de inicio</h3>
              <div className="flex flex-row gap-3 pl-2 mt-3">
                <input
                  type="text"
                  name="mesInicio"
                  value={inputValues.mesInicio}
                  onChange={handleChange}
                  placeholder='mes'
                  className="h-10 pl-2 w-87 rounded-xl bg-secundaryGreyLight2"
                ></input>
                <input
                  type="number"
                  name="añoinicio"
                  value={inputValues.añoInicio}
                  onChange={handleChange}
                  placeholder='Año'
                  className="h-10 pl-8 w-87 rounded-xl bg-secundaryGreyLight2"
                ></input>
              </div>
  {/* *************fecha fin***************/}
  <h3 className='pl-3 mt-3 text-base font-bold text-secundaryViolet font-primaria'>fecha  de finalizacion</h3>
              <div className="flex flex-row gap-3 pl-2 mt-3">
                <input
                  type="text"
                  name="mesFIN"
                  value={inputValues.mesFin}
                  onChange={handleChange}
                  placeholder='mes'
                  className="h-10 pl-2 w-87 rounded-xl bg-secundaryGreyLight2"
                ></input>
                <input
                  type="number"
                  name="añoFin"
                  value={inputValues.añoFin}
                  onChange={handleChange}
                  placeholder='Año'
                  className="h-10 pl-8 w-87 rounded-xl bg-secundaryGreyLight2"
                ></input>
              </div>         
           
            
              {/* ---------------------------sobre tareas -----------------------*/}
              <div className="flex flex-col justify-center pt-3 ml-3 w-467">
                <label className="pb-2 text-base font-bold text-secundaryViolet">Breve descripción de las tareas que realizaste.</label>
                <textarea
                  className="h-24 pl-2 resize-none w-467 rounded-xl "
                  onChange={handleChange}
                  name="texto"
                  value={inputValues.texto}
                  placeholder="Ej. Tareas que aprendiste y realizaste"
                ></textarea>
              </div>
              {/* ---------------------------boton --------------*/}
              <div className="pl-4 pr-8 mt-6">
                          
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full h-12 text-base font-semibold rounded-xl bg-secundaryViolet text-secundaryGreyLight font-primaria "
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormExperiencia