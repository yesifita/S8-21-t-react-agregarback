import { useState } from "react"

const CardEducacion = () => {
    const [state, setState] = useState(1)

    const action=(i)=>{
        setState(i)
        console.log(i)
    }

  return (
    <div
      id="content_box"
      className="box-border h-64 mr-12 border-2 border-solid w-734 rounded-xl drop-shadow-md border-secundaryGreyLight2"
    >
      <div id="tabs" className="flex">
        <div
          id="tab1"
          className={`${state===1 ? "relative flex-1 py-4 pl-8 pr-2 text-base font-semibold text-center text-white cursor-pointer bg-secundaryViolet rounded-tl-xl rounded-bl-xl h-14 w-407 font-primaria active:border:none active:bg-white active:text-secundaryViolet active:after::absolute active:after::w-734" 
          : "relative flex-1 py-4 pl-8 pr-2 text-base font-semibold text-center text-white cursor-pointer bg-secundaryViolet rounded-tl-xl rounded-bl-xl h-14 w-407 font-primaria"}`}
          
         onClick={()=>action(1)}>
          Experiencia
        </div>
        <div
          id="tab2"
          className={`${state===2 ? "relative flex-1 py-4 pl-8 pr-2 text-base font-semibold text-center text-white cursor-pointer bg-secundaryViolet rounded-tr-xl rounded-br-xl h-14 w-407 font-primaria active:border:none active:bg-white active:text-secundaryViolet active:after::absolute active:after::w-734" 
          : "relative flex-1 py-4 pl-8 pr-2 text-base font-semibold text-center text-white cursor-pointer bg-secundaryViolet rounded-tr-xl rounded-br-xl h-14 w-407 font-primaria"}`}
          onClick={()=>action(2)}>
          Educacion
        </div>
      </div>
      {/* *******************contenido de tabs************* */}
      <div id="contents" className="relative">
        content
        {/*************primer tab***********/}
        <div
          id="content/content_active_tabs"
          className="relative block ml-2 mr-2 text-center transition-all ease-in-out delay-100 bg-red-200"
         >
            {/* hidden */}
          <h1 className="text-lg font-bold text-black ">contenido 1</h1>
          <p>aca esta el contenido 1</p>
        </div>
            {/*************segunda tab***********/}
        <div
          id="content"
          className="relative hidden text-center bg-red-200"
        > 
        {/* hidden */}
          <h1 className="text-lg font-bold text-black ">contenido 2</h1>
          <p>aca esta el contenido 2</p>
        </div>
      </div>
    </div>
  )
}

export default CardEducacion

{
  /* <button className="grid h-8 grid-cols-2 pl-2 mt-1 ml-40 text-center border-2 border-solid w-78 border-secundaryGreyLight2 bg-secundaryGreyLight">
Editar
<img  className="pt-1 pl-2 "></img>
</button> */
}
