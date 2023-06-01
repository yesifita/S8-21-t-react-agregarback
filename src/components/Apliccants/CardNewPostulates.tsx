

import newPostulates from '../../assets/images/list.png'
import BtnRevisarTablero from '../../componentes/Buttons/BtnRevisarTablero';


export default function CardNewPostulates() {
    return (
        <div className="flex items-center bg-zinc-200 p-6 rounded-xl h-96">
            <div className="mr-4">
                <img src={newPostulates} alt="New Job" className="rounded-xl" style={{height: '340px', width:'350px'}}/>
            </div>
            <div>
                <h2 className="text-3xl font-extrabold mb-4">Tienes nuevos postulados?</h2>
                <p className="text-base mb-4">Utiliza tu tablero para organizar a todos tus postulados de tus vacantes, de forma rápida y sencilla</p>
                <BtnRevisarTablero/>
            </div>
        </div>
    )
}

