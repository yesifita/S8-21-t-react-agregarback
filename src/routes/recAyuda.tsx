import BtnQuestion from "../componentes/Buttons/BtnQuestion";
import InputSearch from "../componentes/Inputs/InputSearch";
import NavLogo from "../componentes/Nav/NavLogo";
import NavMenu from "../componentes/Nav/navMenu";
import { MdQuiz } from "react-icons/md";


export default function RecAyuda() {
    return (
        <div className="flex relative">
            <div className="z-10">
                <NavMenu/>
            </div>


            <div className="absolute pl-16 w-full">

                <NavLogo/>

                <div className="mx-10">
                    <div className="flex justify-between mt-6 mb-10">
                        <div className="flex items-center text-xl">
                            <MdQuiz/>
                            <h2 className="text-xl ml-2"> Preguntas frecuentes</h2>
                        </div>
                        <InputSearch/>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="flex flex-col w-1/2 pr-5">
                            <BtnQuestion/>
                            <BtnQuestion/>
                            <BtnQuestion/>
                            <BtnQuestion/>
                        </div>
                        <div className="flex flex-col w-1/2 pl-5">
                            <BtnQuestion/>
                            <BtnQuestion/>
                            <BtnQuestion/>
                            <BtnQuestion/>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
