import mejoCV from '../../assets/images/mejoCV.png'
import BtnMejoCV from '../Buttons/BtnMejoCV'

export default function CardMejoCV() {
    return (
        <div className="flex items-center bg-secundaryGreyLight p-6 rounded-xl h-96">
            <div className="bg-no-repeat bg-center bg-cover mr-6 rounded-xl" style={{ backgroundImage: `url(${mejoCV})`, height: '340px', width: '300px'}}>
            </div>
            <div>
                <h2 className="text-3xl text-primaryBlueDark font-extrabold mb-4">¿Listo para el éxito en tus postulaciones?</h2>
                <p className="text-base text-primaryBlueDark mb-4">Utiliza nuestra herramienta, mejora tu curriculum y potencia tu carrera profesional</p>
                <BtnMejoCV/>
            </div>
        </div>
    )
}

