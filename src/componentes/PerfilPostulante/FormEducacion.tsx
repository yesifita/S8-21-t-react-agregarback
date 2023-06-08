import { useState } from 'react'
import { FormDataEducacion } from '../../types'
import { Link } from 'react-router-dom'
import close from '../../assets/icons/close X.svg'
import { db } from '../../service/firebase'
import { collection, addDoc } from 'firebase/firestore'

const FormEducacion = () => {
  const [inputValues, setInputValues] = useState<FormDataEducacion['inputValues']>({
    titulo: '',
    institucion: '',
    mesInicio: '',
    añoInicio: '',
    mesFin: '',
    añoFin: '',
    texto: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault(), crearDataEducacion(inputValues)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    })
  }
  const crearDataEducacion = async (e) => {
    await addDoc(collection(db, 'DatosEducacion'), { inputValues })
  }

  return (
    <div
      id="modal_conteiner"
      className="fixed top-0 left-0 right-0 flex items-center justify-center w-screen h-full m-0 bg-fondoT"
    >
      <div className="mb-4 bg-secundaryGreyLight w-512 h-664 rounded-xl">
        <div>
        <Link to='/postulante/perfil'>
        <button className="float-right w-8 h-8 mr-2 bg-secundaryGreyLight2">
              <img src={close} className="px-1 pb-5 w-14 h-14"></img>
            </button>
            </Link>
          <h1 className="h-6 p-4 mt-3 mb-6 text-xl font-bold text-center bg-secundaryGreyLight font-primaria text-primaryBlueDark">
            Agregar Educación
          </h1>

          <div className="pt-3 pl-2 h-664 w-467">
            <form onSubmit={handleSubmit} className="h-643 w-512">
              <p className="h-5 pt-2 pl-2 mb-3 text-base text-secundaryViolet text-start font-primaria">
                Datos donde realizaste tus estudios
              </p>
              <div id="rol" className="pt-2">
                <div className="flex flex-col justify-center ">
                  <label className="pb-2 pl-2 text-sm font-primaria text-primaryBlueDark w-450 text-start">
                    Titulo
                  </label>
                  <input
                    type="text"
                    name="titulo"
                    value={inputValues.titulo}
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
                    Institucion
                  </label>
                  <input
                    type="text"
                    name="institucion"
                    value={inputValues.institucion}
                    onChange={handleChange}
                    placeholder="Ej. Universidad FASTA"
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

export default FormEducacion
