

import newPostulates from '../../assets/images/newPostulates.png'
import BtnRevisarTablero from '../Buttons/BtnRevisarTablero';


export default function CardNewPostulates() {
    return (
        <div className="flex items-center bg-secundaryGreyLight p-6 rounded-xl h-96">
            <div className="mr-4">
                <img src={newPostulates} alt="New Job" className="rounded-xl" style={{width:'340px'}}/>
            </div>
            <div>
                <h2 className="text-3xl text-primaryBlueDark font-extrabold mb-4">Tienes nuevos postulados?</h2>
                <p className="text-base text-primaryBlueDark mb-4">Utiliza tu tablero para organizar a todos tus postulados de tus vacantes, de forma rápida y sencilla</p>
                <BtnRevisarTablero/>
            </div>
        </div>
    )
}

