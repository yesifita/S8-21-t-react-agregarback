import NavLogoPostu from "../componentes/Nav/NavLogoPostu";
import NavMenuPostu from "../componentes/Nav/NavMenuPostu";
import { BsCheck2 } from "react-icons/bs";
import { AiFillWarning } from "react-icons/ai";
import photoMejorarCV from '../assets/images/photoMejorarCV.png'
import BtnSubirCV from "../componentes/Buttons/BtnSubirCV";




export default function PostuMejorarCV() {


    return (
        <div className="flex relative">
            <div className="z-10">
                <NavMenuPostu/>
            </div>


            <div className="absolute pl-16 w-full">
                    <NavLogoPostu/>

                <div className="flex h-screen  text-primaryBlueDarkHover">
                    <div className="flex flex-col pt-40 border-r-2 ml-10">
                        <div className="bg-center bg-no-repeat bg-cover rounded-xl mb-10" style={{ backgroundImage: `url(${photoMejorarCV})`, height: '173px', width: '451px'}}>
                        </div>
                        <h2 className="text-3xl font-extrabold mb-10">Mejora tu CV con nuestra herramienta  de inteligencia artificial</h2>
                        <p className="text-base mb-5">Toma en cuenta que para que esta herramienta analice tu CV, debe cumplir los siguientes parámetros:</p>
                        <div className="mb-10">
                            <p className="flex items-center"><span className="text-primaryGreen text-2xl font-extrabold mr-2"><BsCheck2/></span>Debe ser un <span className="font-bold ml-2">PDF editable</span></p>
                            <p className="flex items-center"><span className="text-primaryGreen text-2xl font-extrabold mr-2"><BsCheck2/></span>Debes haber completado todo tu perfil</p>
                            <p className="flex items-center"><span className="text-primaryGreen text-2xl font-extrabold mr-2"><BsCheck2/></span>No puede ser una imagen</p>
                        </div>
                        <BtnSubirCV/>
                    </div>

                    <div className="flex flex-col items-center pt-72 bg-secundaryGreyLigh bg-secundaryGreyLight px-10">
                        <p className="text-7xl mb-4"><AiFillWarning/></p>
                        <h2 className="text-3xl font-extrabold text-center mb-3">No tienes sugerencias sobre tu CV en este momento</h2>
                        <p className="text-base">Prueba utilizando la herramienta para saber cómo mejorar tu cv</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
