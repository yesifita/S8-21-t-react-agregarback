import CardWelcome from "../Apliccants/CardWelcome";
import CardNewJob from "../Apliccants/CardNewJob";
import NavMenu from "../navMenu";
import CardNewPostulates from "../Apliccants/CardNewPostulates";
import CardNewTotals from "../Apliccants/CardNewTotals";
import NavLogo from "../Nav/NavLogo";


export default function RecDashboard() {
 
    return (
        <div className="relative flex">


            <div className="z-10">
                <NavMenu/>
            </div>

            <div className="absolute px-6 left-20">
                <NavLogo/>
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

