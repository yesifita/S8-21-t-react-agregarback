import { Link } from 'react-router-dom'
import editar from '../../assets/icons/editpencil.svg'
//import FormEducacion from './FormEducacion'
//import {useState} from 'react'


const TabEducacion = () => {

  return (
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
              Diplomatura Back-end
              </h4>
              <p className="w-48 h-4 mb-3 text-xs font-bold font-primaria text-secondary">
                Universidad Tecnologica Nacional
              </p>
              <p className="w-48 h-4 mb-5 text-xs font-semibold font-primaria text-secondary">
              Abril 2021 - Enero 2023
              </p>
              <ul className="w-40 h-4 text-xs font-medium list-disc font-primaria text-primaryBlueDark">
                <li>Base de Datos</li>
                <li>NodeJS</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="w-48 pl-28">
              <Link to='/formeducacion'>
              <button 
              className="grid h-8 grid-cols-2 pl-2 mt-1 text-center border-2 border-solid rounded-xl w-78 border-secundaryGreyLight2 bg-secundaryGreyLight">
                Editar
                <img src={editar} className="pt-1 pl-2 "></img>
              </button>
              </Link>
            </div>
          </div>
                  </div>
  )
}

export default TabEducacion