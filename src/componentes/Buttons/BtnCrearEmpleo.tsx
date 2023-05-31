import { Link } from "react-router-dom";

export default function BtnCrearEmpleo() {
    return (
        <Link 
            to={'/'} 
            className="block w-48 p-4 text-center text-white bg-primaryGreen rounded-xl"
        >
            Crear nuevo empleo
        </Link>
    )
}