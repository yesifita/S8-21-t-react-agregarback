import { useState } from 'react'
import Tabexperiencia from './Tabexperiencia'
import TabEducacion from './TabEducacion'

const CardEducacion = () => {
  const [state, setState] = useState('experiencia');


  const activo = ` flex-1 py-4 pl-8 pr-2 text-base font-semibold text-center text-white cursor-pointer bg-secundaryViolet  h-14 w-407 font-primaria ${state === "experiencia" ? 'rounded-l-lg' : 'rounded-r-lg'} `
  const noActivo = `flex-1 py-4 pl-8 pr-2 text-base font-semibold text-center cursor-pointer bg-secundaryGreyLight w-407  h-14 font-primaria text-secundaryViolet${state === "educacion" ? 'rounded-l-lg' : 'rounded-r-lg'} `

  return (
    <div
      id="content_box"
      className="box-border h-64 mr-12 border-2 border-solid w-734 rounded-xl border-secundaryGreyLight2"
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
      {state === 'experiencia' &&  <Tabexperiencia/>}

      {/* ****************contenedor educacion************* */}
      
      {state === 'educacion' && <TabEducacion />}
    </div>
  )
}

export default CardEducacion
