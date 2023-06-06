import editar from '../../assets/icons/editpencil.svg'
import FormPerfil from './FormPerfil'
import {useState} from 'react'
const Cardfoto = () => {
    const [form, setForm] = useState(false)

    
  return (
    <div id="card_conteiner" className="mt-24 ml-24 bg-red-200 w-296 h-664">
      <div>
        <div
          id="conteiner_foto"
          className="flex flex-col items-center justify-center h-64 py-2 pl-6 pr-2 w-296 bg-secundaryGreyLight"
        >
          <button  onClick={()=>setForm(true)} className="grid h-8 grid-cols-2 mt-1 ml-40 border-2 border-solid w-78 border-secundaryGreyLight2 bg-secundaryGreyLight">
            editar
            <img src={editar} className="pl-3 "></img>
          </button>
          <div className="w-40 h-40 border-2 border-solid rounded-full border-secundaryGreyLight2 bg-secundaryGreyLight drop-shadow-md">
            <input type="file" className="hidden"></input>
          </div>
          <p className="text-base font-bold text-secundaryViolet">Eduardo medina</p>
          <input
            type="text"
            placeholder="Rol"
            className="h-4 pl-2 mt-2 w-134 text-secondary bg-secundaryGreyLight"
          ></input>
        </div>
        <div id="conteiner_sobreMi" className="flex flex-col pl-3 bg-red-200 w-296 h-407">
          <label>Sobre mi</label>
          <textarea
            className="h-40 text-sm font-normal resize-none bg-secundaryGreyLight w-234 text-primaryBlueDark"
            placeholder="explica sobre ti"
          ></textarea>
        </div>
        <div id="skils" className="h-24 mb-2 bg-red-300 w-264">
          <h3 className="w-64 h-5 ml-4 text-base font-bold text-primaryBlueDark">Skills</h3>
        </div>
        <button className="h-12 text-base font-semibold text-white rounded- xl w-264 bg-secundaryViolet">
          Actualizar CV
        </button>
{ form ? <FormPerfil setForm={setForm}/> :null}
      </div>
    </div>
  )
}

export default Cardfoto
