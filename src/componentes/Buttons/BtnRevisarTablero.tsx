

import { Link } from "react-router-dom";

export default function BtnRevisarTablero() {
    return (
        <Link 
            to={'/postulantes'} 
            className="bg-primaryGreen text-white p-4 rounded-xl block w-48 text-center"
        >
            Revisar tablero
        </Link>
    )
}