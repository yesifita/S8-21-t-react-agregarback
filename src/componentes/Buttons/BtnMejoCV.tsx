

import { Link } from "react-router-dom";

export default function BtnMejoCV() {
    return (
        <Link 
            to={'/postulate/mejorar-cv'} 
            className="block w-48 p-4 text-center text-white bg-primaryGreen rounded-xl"
        >
            Mejora tu CV
        </Link>
    )
}