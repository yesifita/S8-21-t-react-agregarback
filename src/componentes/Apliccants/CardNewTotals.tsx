import CardNumTotal from "./CardNumTotal";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { AiFillFolderOpen } from "react-icons/ai";
import { RiDraftFill } from "react-icons/ri";




export default function CardNewTotals() {



    const data1 = {
        title: "Total de postulados",
        value: 20,
        icon: <BsFillPersonFill/>,
    };
    
    const data2 = {
        title: "Total de vacantes abiertas",
        value: 3,
        icon: <AiFillFolderOpen/>,
    };
    
    const data3 = {
        title: "Total de contratados",
        value: 13,
        icon: <RiDraftFill/>,
    };
    
    const data4 = {
        title: "Total de vacantes cerradas",
        value: 25,
        icon: <MdWork/>,
      };



    return (
        <div className="flex flex-col">
            <div className="flex gap-x-8 mb-8">
                <div className="w-1/2">
                    <CardNumTotal title={data1.title} value={data1.value} icon={data1.icon}/>
                </div>
                <div className="w-1/2">
                    <CardNumTotal title={data2.title} value={data2.value} icon={data2.icon}/>
                </div>
            </div>
            <div className="flex gap-x-8">
                <div className="w-1/2">
                    <CardNumTotal title={data3.title} value={data3.value} icon={data3.icon}/>
                </div>
                <div className="w-1/2">
                    <CardNumTotal title={data4.title} value={data4.value} icon={data4.icon}/>
                </div>
            </div>
        </div>
    )
}


