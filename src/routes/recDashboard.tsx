import { Link } from "react-router-dom";
import CardWelcome from "../componentes/Apliccants/CardWelcome";
import CardNewJob from "../componentes/Apliccants/CardNewJob";
import NavMenu from "../componentes/navMenu";
import CardNewPostulates from "../componentes/Apliccants/CardNewPostulates";
import CardNewTotals from "../componentes/Apliccants/CardNewTotals";
import { useUser } from "../context/UserProvider";


export default function RecDashboard() {
    const authUser=useUser();
    const {displayName}= authUser.user;
    return (
        <div className="relative flex">


            <div className="z-10">
                <NavMenu/>
            </div>

            <div className="absolute px-6 left-20">
                <nav className="flex items-center justify-between">

                    <Link to={'/'} className="block p-4 text-2xl font-bold">Reclutando</Link>
                    {displayName && <h1 className="text-2xl font-bold text-black pl-28">Hola {displayName}!</h1>}
                    <hr />
                </nav>







                <div className="flex flex-col items-center p-4 mx-auto">
                    <div className="flex flex-wrap w-full my-8">
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

