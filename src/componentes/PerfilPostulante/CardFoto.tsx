import editar from '../../assets/icons/editpencil.svg'
import foto from '../../assets/icons/add_photo.svg'
import FormPerfil from './FormPerfil'
import { useState,useEffect } from 'react'
import { collection, getDocs, getDoc, FieldValue } from 'firebase/firestore'
import { db } from '../../service/firebase'

const Cardfoto = () => {
  const [form, setForm] = useState(false)

  const dataCollection = collection(db, 'PerfilPostulante')

  const getData = async () => {
   const data= await getDocs(dataCollection)
   console.log(data.docs)
  }

  useEffect(() => {
   getData()
  }, [])
  
  return (
    <div
      id="card_conteiner"
      className="mt-24 border-2 border-solid bg-secundaryGreyLight ml-36 w-296 h-643 rounded-xl border-secundaryGreyLight2"
    >
      <div>
        {/******************* ********* foto ****************/}
        <div
          id="conteiner_foto"
          className="flex flex-col items-center justify-center h-64 py-2 pl-3 pr-2 bg-white w-293 rounded-tl-xl rounded-tr-xl"
        >
          <button
            onClick={() => setForm(true)}
            className="grid h-8 grid-cols-2 pt-1 pl-2 mt-1 text-center border-2 border-solid ml-44 w-78 rounded-xl border-secundaryGreyLight2 bg-secundaryGreyLight"
          >
            Editar
            <img src={editar} className="pl-3 "></img>
          </button>
          <div className="w-40 h-40 border-2 border-solid rounded-full border-secundaryGreyLight2 bg-secundaryGreyLight drop-shadow-md">
            <img src={foto} className="w-20 h-20 pl-4 mt-8 ml-8 bg-cover "></img>
          </div>
          {/* ******************************titulo nombre**************** */}
          <p className="text-base font-bold text-secundaryViolet">{}</p>

          {/* **************************profesion************* */}
          <div className="w-48 h-6 pb-3 pl-2 text-center text-secondary ">
            ¿Cual es tu profesion?
          </div>
        </div>
        {/********************************* * sobre mi ***************/}
        <div id="conteiner_sobreMi" className="flex flex-col pl-3 w-296 h-80">
          <h3 className="pt-2 font-primaria font-base text-primaryBlueDark">Sobre mi</h3>
          <div className="h-40 text-sm font-normal resize-none bg-secundaryGreyLight w-264 text-primaryBlueDark"></div>

          {/***************** *skills************* */}
          <div id="skils" className="mt-4 h-36 w-264">
            <h3 className="w-64 h-5 mb-2 ml-4 text-base font-bold text-primaryBlueDark">Skills</h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-4">
              <div className="w-20 h-8 py-2 text-xs font-medium text-center bg-white border-2 border-solid rounded-xl border-secondary text-secondary font-primaria"></div>
              {/* *****************skill2************ */}
              <div className="w-20 h-8 py-2 text-xs font-medium text-center bg-white border-2 border-solid rounded-xl border-secondary text-secondary font-primaria"></div>

              {/* *********skill3********* */}
              <div className="w-20 h-8 py-2 text-xs font-medium text-center bg-white border-2 border-solid rounded-xl border-secondary text-secondary font-primaria"></div>
              {/* **********skill4****** */}
              <div className="w-20 h-8 py-2 text-xs font-medium text-center bg-white border-2 border-solid rounded-xl border-secondary text-secondary font-primaria"></div>
              {/*
               ***********skill5******* */}
              <div className="w-20 h-8 py-2 text-xs font-medium text-center bg-white border-2 border-solid rounded-xl border-secondary text-secondary font-primaria"></div>

              {/* ************skill6******** */}
              <div className="w-20 h-8 py-2 text-xs font-medium text-center bg-white border-2 border-solid rounded-xl border-secondary text-secondary font-primaria"></div>
            </div>
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
