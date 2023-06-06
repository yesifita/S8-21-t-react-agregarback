import { Link } from "react-router-dom"


const PopUpConfirm = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-screen h-full m-0 bg-gradiente bg-gradient-to-b from-primaryBlueDark to-gradiente1/10 ">
        <div className="flex flex-col items-center justify-center w-4/12 mb-16 bg-white h-96 rounded-xl">

        <p className="mb-8 text-xl font-semibold ">Usuario cargado exitosamente</p>
        <Link to='/login'>        
        <button className="w-24 h-8 px-2 m-2 font-medium text-white rounded-md bg-primaryGreen">Aceptar
            
        </button>
        </Link>
        </div>
    </div>
  )
}

export default PopUpConfirm