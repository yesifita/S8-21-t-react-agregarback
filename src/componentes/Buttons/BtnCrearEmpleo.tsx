import { Link } from "react-router-dom";

export default function BtnCrearEmpleo() {
    return (
        <Link 
            to={'/empleo'} 
            className="block w-48 p-4 text-center bg-zinc-300 rounded-xl"
        >
            Crear nuevo empleo
        </Link>
    )
}