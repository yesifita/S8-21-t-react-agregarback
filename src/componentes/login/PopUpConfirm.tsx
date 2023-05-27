import { Link } from "react-router-dom"


const PopUpConfirm = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-screen h-full m-0 bg-slate-400 ">
        <div className="flex flex-col items-center justify-center w-3/6 bg-white h-3/5 rounded-xl">

        <p className="mb-8 font-normal">Usuario cargado exitomasemente</p>
        <Link to='/login'>        
        <button className="px-2 m-2 font-medium text-black border-2 border-solid rounded-md w-fit border-slate-700">Aceptar
            
        </button>
        </Link>
        </div>
    </div>
  )
}

export default PopUpConfirm