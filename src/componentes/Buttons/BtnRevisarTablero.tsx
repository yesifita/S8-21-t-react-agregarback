

import { Link } from "react-router-dom";

export default function BtnRevisarTablero() {
    return (
        <Link 
            to={'/postulantes'} 
            className="bg-zinc-300 p-4 rounded-xl block w-48 text-center"
        >
            Revisar tablero
        </Link>
    )
}