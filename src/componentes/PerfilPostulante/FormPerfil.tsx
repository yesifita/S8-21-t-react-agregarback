import React from 'react'
import { useState } from 'react'
import { FormPerfilP } from '../../types'
import { db } from '../../service/firebase'
import { collection, addDoc } from 'firebase/firestore'

const FormPerfil = ({ setForm }) => {
  const [inputValues, setInputValues] = useState<FormPerfilP['inputValues']>({
    nombre: '',
    apellido: '',
    rol: '',
    skills1: '',
    skills2: '',
    skills3: '',
    skills4: '',
    skills5: '',
    skills6: '',
    ingles: '',
    texto: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault(),
  crearPerfil(inputValues),
  setForm(false)

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    })
  }
  const crearPerfil = async(e)=>{
    e.preventDefault()
        await addDoc(collection(db, 'PerfilPostulante'), {inputValues })
      
  }

  return (
    <div
      id="modal_conteiner"
      className="fixed top-0 left-0 right-0 flex items-center justify-center w-screen h-full m-0 bg-fondoT"
    >
      <div className="mb-4 bg-secundaryGreyLight w-512 h-720 rounded-xl">
        <div>
          <div className="grid grid-cols-2 gap-0 mb-2 w-467 h-14">
            <div className="w-56 p-4 mt-1 mb-1 ml-2 text-base font-bold text-center text-secundaryGreyLight font-primaria h-14 bg-secundaryViolet rounded-tl-xl rounded-bl-xl">
              Informacion personal
            </div>
            <div className="w-56 p-4 mt-1 mb-1 ml-2 text-base font-bold text-center bg-secundaryGreyLight font-primaria h-14 text-secundaryViolet rounded-xl">
              Datos de recuperacion
            </div>
          </div>
          <div className="h-664 w-467 ">

            <form onSubmit={handleSubmit} className="h-643 w-512">
              <p className="h-5 pl-2 mb-2 text-base text-secundaryViolet w-72 text-start font-primaria">
                Datos del cargo que ocupaste
              </p>
              <div id="cargo_ocupaste" className="grid grid-cols-2 gap-3">
                <div className="flex flex-col justify-center pl-2">
                  <label className="text-sm font-xs font-primaria text-primaryBlueDark">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={inputValues.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="w-56 h-10 pl-2 rounded-xl bg-secundaryGreyLight2"
                  ></input>
                </div>
                <div className="flex flex-col justify-center ">
                  <label className="text-sm font-primaria text-primaryBlueDark">Apellido</label>
                  <input
                    type="text"
                    name="apellido"
                    value={inputValues.apellido}
                    onChange={handleChange}
                    placeholder="Apellido"
                    className="w-56 h-10 pl-2 rounded-xl bg-secundaryGreyLight2"
                  ></input>
                </div>
              </div>
              {/*----------------------- Rol------------------ */}
              <div id="rol" className="pt-2">
                <div className="flex flex-col justify-center ">
                  <label className="pl-2 text-sm font-primaria text-primaryBlueDark w-450 text-start">
                    Descricion como Profesional
                  </label>
                  <input
                    type="text"
                    name="rol"
                    value={inputValues.rol}
                    onChange={handleChange}
                    placeholder="Ej: 'UI designer'"
                    className="h-10 pl-2 ml-2 w-483 rounded-xl bg-secundaryGreyLight2"
                  ></input>
                </div>
              </div>
              {/* -------------------------------skills------------------ */}
              <div>
                <h3 className="ml-3 text-base font-bold font-primaria text-secundaryViolet">
                  Aptitudes y Skill.
                </h3>
                <h5 className="ml-3 text-xs font-primaria text-secondary">
                  Maximo 6 (seis) permitidas.
                </h5>
                <div id="inputs_skills" className="grid grid-cols-3 p-2 gap-y-4 gap-x-2">
                  <input
                    type="text"
                    name="skills1"
                    value={inputValues.skills1}
                    onChange={handleChange}
                    placeholder="Agregar +"
                    className="h-8 pl-12 border-2 border-solid border-secundaryGreyLight2 w-150 rounded-xl bg-secundaryGreyLight"
                  ></input>
                  <input
                    type="text"
                    name="skills2"
                    value={inputValues.skills2}
                    onChange={handleChange}
                    placeholder="Agregar +"
                    className="h-8 pl-12 border-2 border-solid border-secundaryGreyLight2 w-150 rounded-xl bg-secundaryGreyLight"
                  ></input>
                  <input
                    type="text"
                    name="skills3"
                    value={inputValues.skills3}
                    onChange={handleChange}
                    placeholder="Agregar +"
                    className="h-8 pl-12 border-2 border-solid border-secundaryGreyLight2 w-150 rounded-xl bg-secundaryGreyLight"
                  ></input>
                  <input
                    type="text"
                    name="skills4"
                    value={inputValues.skills4}
                    onChange={handleChange}
                    placeholder="Agregar +"
                    className="h-8 pl-12 border-2 border-solid w-150 rounded-xl border-secundaryGreyLight2 bg-secundaryGreyLight"
                  ></input>
                  <input
                    type="text"
                    name="skills5"
                    value={inputValues.skills5}
                    onChange={handleChange}
                    placeholder="Agregar +"
                    className="h-8 pl-12 border-2 border-solid border-secundaryGreyLight2 w-150 rounded-xl bg-secundaryGreyLight"
                  ></input>
                  <input
                    type="text"
                    name="skill-6"
                    value={inputValues.skills6}
                    onChange={handleChange}
                    placeholder="Agregar +"
                    className="h-8 pl-12 border-2 border-solid border-secundaryGreyLight2 w-150 rounded-xl bg-secundaryGreyLight"
                  ></input>
                </div>
              </div>
              {/* -------------------------------ingles-------------------------- */}
              <div>
                <h3 className="h-5 ml-3 text-base font-bold w-467 text-secundaryViolet font-primaria">
                  Nivel Ingles, segun test realizado en EF SET
                </h3>
                <p className="h-4 py-1 ml-3 text-xs font-medium w-14 text-secondary">efeset.org</p>
                <div id="radiobotones" className="grid h-24 grid-cols-2 gap-3 pt-2 ml-3 w-467">
                  <label className="text-base font-normal">
                    <input
                   
                      type="radio"
                      value="a1"
                      id={inputValues.ingles}
                      name="ingles"
                      className="mr-2"
                      
                      onChange={handleChange}
                    ></input>
                    A1 Beginner
                  </label>
                  <label className="text-base font-normal">
                    <input
                     
                      type="radio"
                      value="b2"
                      id={inputValues.ingles}
                      name="ingles"
                      onChange={handleChange}
                      className="mr-2"
                    ></input>
                    B2 Upper Intermediate
                  </label>
                  <label className="text-base font-normal">
                    <input
                    
                      type="radio"
                      value="a2"
                      id={inputValues.ingles}
                      name="ingles"
                      onChange={handleChange}
                      className="mr-2"
                    ></input>
                    A2 Elementary
                  </label>
                  <label className="text-base font-normal">
                    <input
                    
                      type="radio"
                      value="c1"
                      id={inputValues.ingles}
                      name="ingles"
                      onChange={handleChange}
                      className="mr-2"
                    ></input>
                    C1 Advanced
                  </label>
                  <label className="text-base font-normal">
                    <input
                      type="radio"
                      value="b1"
                      id={inputValues.ingles}
                      name="ingles"
                      onChange={handleChange}
                      className="mr-2"
                    ></input>
                    B1 Intermediate
                  </label>
                  <label className="text-base font-normal">
                    <input
                      // onChange={handleChange}
                      type="radio"
                      value="c2"
                      id={inputValues.ingles}
                      name="ingles"
                      className="mr-2"
                    ></input>
                    C2 Proficient
                  </label>
                </div>
              </div>
              {/* ---------------------------sobre mi -----------------------*/}
              <div className="flex flex-col justify-center pt-3 ml-3 w-467">
                <label className="pb-2 text-base font-bold text-secundaryViolet">Sobre Mi</label>
                <textarea
                  className="h-24 pl-2 resize-none w-467 rounded-xl "
                  onChange={handleChange}
                  name="texto"
                  value={inputValues.texto}
                  placeholder='Ej. Puedes hablar acerca de tus años de experiencia, del sector en que trabajas o sobre tus aptitudes. La gente suele escribir también sobre sus logros o sobre sus experiencias laborales anteriores.'
                ></textarea>
              </div>
              {/* ---------------------------botones --------------*/}
              <div className="flex flex-row justify-between gap-4 pl-4 pr-8 mt-6">
                <button
                  className="w-56 h-12 text-base font-semibold border-2 rounded-xl border-secundaryViolet border-soli bg-secundaryGreyLight text-secundaryViolet font-primaria "
                  onClick={() => setForm(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  onClick={
                    handleSubmit                 
                }
                  className="w-56 h-12 text-base font-semibold rounded-xl bg-secundaryViolet text-secundaryGreyLight font-primaria "
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

export default FormPerfil
