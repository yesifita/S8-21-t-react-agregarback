import { useState } from 'react'
import editar from '../../assets/icons/editpencil.svg'

const CardEducacion = () => {
  const [state, setState] = useState('experiencia')
  const activo = `relative flex-1 py-4 pl-8 pr-2 text-base font-semibold text-center text-white cursor-pointer bg-secundaryViolet  h-14 w-407 font-primaria ${state === "experiencia" ? 'rounded-l-lg' : 'rounded-r-lg'} `
  const noActivo = `relative flex-1 py-4 pl-8 pr-2 text-base font-semibold text-center cursor-pointer bg-secundaryGreyLight w-407  h-14 font-primaria text-secundaryViolet${state === "educacion" ? 'rounded-l-lg' : 'rounded-r-lg'} `

  return (
    <div
      id="content_box"
      className="box-border h-64 mr-12 border-2 border-solid w-734 rounded-xl drop-shadow-md border-secundaryGreyLight2"
    >
      <div id="tabs" className="flex p-2">
        <div
          id="experiencia"
          className={state === "experiencia" ? activo : noActivo}
         
          onClick={(e)=>setState(e.currentTarget.id)}
        >
          Experiencia
        </div>
        <div
        id='educacion'
          className={state=== "educacion" ? activo : noActivo}
        
          onClick={(e)=>setState(e.currentTarget.id)}
        >
          Educacion
        </div>
      </div>
      {/* *******************contenido de tabs************* */}
      {state === 'experiencia' && (
        <div id="contenedor_experiencia" className="pl-3 h-4/6 w-720">
          <div
            id="columnas_info"
            className="grid grid-cols-3 p-2 bg-secundaryGreyLight h-44 rounded-xl"
          >
            <div
              id="fecha"
              className="flex flex-row items-center h-8 gap-6 ml-4 text-base font-bold bg-white w-36 rounded-xl text-primaryBlueDark"
            >
              <div className="w-4 pl-4">2021</div>
              <span className="pl-6 text-xl font-extrabold text-slate-400">/</span>
              <div className="w-4 pl-0">2023</div>
            </div>
            <div id="dato_trabajo" className="pl-3 w-72 ">
              <h4 className="h-5 mb-3 text-base font-bold font-primaria text-primaryBlueDark">
                front end{' '}
              </h4>
              <p className="w-48 h-4 mb-3 text-xs font-bold font-primaria text-secondary">
                empresa
              </p>
              <p className="w-48 h-4 mb-5 text-xs font-semibold font-primaria text-secondary">
                tiempo
              </p>
              <ul className="w-40 h-4 text-xs font-medium list-disc font-primaria text-primaryBlueDark">
                <li>tareas</li>
                <li>tareas</li>
                <li>tareas</li>
              </ul>
            </div>
            <div className="w-48 pl-28">
              <button className="grid h-8 grid-cols-2 pl-2 mt-1 text-center border-2 border-solid rounded-xl w-78 border-secundaryGreyLight2 bg-secundaryGreyLight">
                Editar
                <img src={editar} className="pt-1 pl-2 "></img>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ****************contenedor educacion************* */}
      {state === 'educacion' && (
        <div id="contenedor_educacion" className="pl-3 h-4/6 w-720">
          <div
            id="columnas_info"
            className="grid grid-cols-3 p-2 bg-secundaryGreyLight h-44 rounded-xl"
          >
            <div
              id="fecha"
              className="flex flex-row items-center h-8 gap-6 ml-4 text-base font-bold bg-white w-36 rounded-xl text-primaryBlueDark"
            >
              <div className="w-4 pl-4">2021</div>
              <span className="pl-6 text-xl font-extrabold text-slate-400">/</span>
              <div className="w-4 pl-0">2023</div>
            </div>
            <div id="dato_educacion" className="pl-3 w-72 ">
              <h4 className="h-5 mb-3 text-base font-bold font-primaria text-primaryBlueDark">
                titulo{' '}
              </h4>
              <p className="w-48 h-4 mb-3 text-xs font-bold font-primaria text-secondary">
                universidad
              </p>
              <p className="w-48 h-4 mb-5 text-xs font-semibold font-primaria text-secondary">
                tiempo
              </p>
              <ul className="w-40 h-4 text-xs font-medium list-disc font-primaria text-primaryBlueDark">
                <li>aprendisaje</li>
                <li>aprendisaje</li>
                <li>aprendisaje</li>
              </ul>
            </div>
            <div className="w-48 pl-28">
              <button className="grid h-8 grid-cols-2 pl-2 mt-1 text-center border-2 border-solid rounded-xl w-78 border-secundaryGreyLight2 bg-secundaryGreyLight">
                Editar
                <img src={editar} className="pt-1 pl-2 "></img>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardEducacion
