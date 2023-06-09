
// import logo_Empresa from '../../assets/images/LogoEmpresa.svg'
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Link } from 'react-router-dom';

export default function CardJobPostulaciones({puestoTrabajo}) {
    const {datePostulaciones, titlePostulaciones, empresaPostulaciones, cargoPostulaciones, logoEmpresa} = puestoTrabajo
    console.log()

    const fechaEvento = new Date(); 
    // const fechaEvento = new Date(2023, 4, 26);
    const formattedFechaEvento = format(fechaEvento, 'dd MMM. yyyy', { locale: es });
  console.log(formattedFechaEvento)
    return (
        <Link to={'/'} className='bg-secundaryGreyLight pt-2 pb-4 px-8 border-t border-secundaryGreyLight2 block'>
            <p className='mb-2'>{datePostulaciones}</p>
            <div className="flex justify-between items-center">
                <div className="flex">
                    <div className='w-16 h-14 bg-no-repeat bg-center bg-cover mr-5' style={{backgroundImage: `url(${logoEmpresa})`}}></div>
                    <div>
                        <h2 className='text-xl font-semibold'>{titlePostulaciones}</h2>
                        <p className='text-base'>{empresaPostulaciones}</p>
                    </div>
                </div>
                <div>
                    <p className='bg-secundaryViolet px-6 py-1 rounded-xl text-white'>{cargoPostulaciones}</p>
                </div>
            </div>
        </Link>
    )
}

