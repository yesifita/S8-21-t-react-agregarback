import editar from '../../assets/icons/editpencil.svg'
import foto from '../../assets/images/photoProfile.png'
import FormPerfil from './FormPerfil'
import { useState } from 'react'
const Cardfoto = () => {
  const [form, setForm] = useState(false)

  return (
    <div
      id="card_conteiner"
      className="mt-24 bg-secundaryGreyLight ml-36 w-296 h-643 rounded-xl drop-shadow-md"
    >
      <div>
        <div
          id="conteiner_foto"
          className="flex flex-col items-center justify-center h-64 py-2 pl-6 pr-2 bg-white w-296 rounded-tl-xl rounded-tr-xl"
        >
          <button
            onClick={() => setForm(true)}
            className="grid h-8 grid-cols-2 pt-1 pl-2 mt-1 ml-40 text-center border-2 border-solid w-78 border-secundaryGreyLight2 bg-secundaryGreyLight"
          >
            Editar
            <img src={editar} className="pl-3 "></img>
          </button>
          <div className="w-40 h-40 border-2 border-solid rounded-full border-secundaryGreyLight2 bg-secundaryGreyLight drop-shadow-md">
            <img src={foto} className="w-40 h-40 bg-cover rounded-full "></img>
          </div>
          <p className="text-base font-bold text-secundaryViolet">Eduardo medina</p>
          <div className="h-6 pb-3 pl-2 text-center w-134 text-secondary ">Rol</div>
        </div>
        <div id="conteiner_sobreMi" className="flex flex-col pl-3 w-296 h-80">
          <h3 className=' font-primaria font-base text-primaryBlueDark'>Sobre mi</h3>
          <div className="h-40 text-sm font-normal resize-none bg-secundaryGreyLight w-264 text-primaryBlueDark"></div>
          <div id="skils" className="mt-4 h-36 w-264">
            <h3 className="w-64 h-5 mb-2 ml-4 text-base font-bold text-primaryBlueDark">Skills</h3>
            <div className='w-24 h-8 py-2 text-xs font-medium text-center bg-white border-2 border-solid rounded-xl border-secondary text-secondary font-primaria'>spoinrg boot</div>
          </div>
        </div>
        <button className="h-12 ml-3 text-base font-semibold text-white rounded-xl w-264 bg-secundaryViolet">
          Actualizar CV
        </button>
        {form ? <FormPerfil setForm={setForm} /> : null}
      </div>
    </div>
  )
}

export default Cardfoto
