import CardWelcome from "../componentes/Apliccants/CardWelcome";
import CardNewJob from "../componentes/Apliccants/CardNewJob";
import NavMenu from "../componentes/Nav/navMenu";
import CardNewPostulates from "../componentes/Apliccants/CardNewPostulates";
import CardNewTotals from "../componentes/Apliccants/CardNewTotals";
import NavLogo from "../componentes/Nav/NavLogo";



export default function RecDashboard() {
    return (
        <div className="flex relative">
            <div className="z-10">
                <NavMenu/>
            </div>


            <div className="absolute pl-16 w-full">

                <NavLogo/>

                <div className="flex flex-col items-center mx-10">
                    <div className="flex flex-wrap my-8 w-full">
                        <div className="w-1/2 pr-4">
                            <CardWelcome/>
                        </div>

                        <div className="w-1/2 pl-4">
                            <CardNewTotals/>
                        </div>
                    </div>


                    <div className="flex flex-wrap">    
                        <div className="w-1/2 pr-4">
                            <CardNewJob/>
                        </div>
                        <div className="w-1/2 pl-4">
                            <CardNewPostulates/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
