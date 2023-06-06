
import logo_Empresa from '../../assets/images/LogoEmpresa.svg'
import { format } from 'date-fns';
import { es } from 'date-fns/locale'; // Opcional, si deseas usar el idioma español
import { Link } from 'react-router-dom';

export default function CardJobRecommend() {

    const fechaEvento = new Date(); 
    // const fechaEvento = new Date(2023, 4, 26);
    const formattedFechaEvento = format(fechaEvento, 'dd MMM. yyyy', { locale: es });
  
    return (
        <Link to={'/'} className='bg-secundaryGreyLight pt-2 pb-4 px-8 border-t border-secundaryGreyLight2 block'>
            
            <p className='mb-2'>{formattedFechaEvento}</p>
            <div className="flex justify-between items-center">
                <div className="flex">
                    <div className='w-16 h-14 bg-no-repeat bg-center bg-cover mr-5' style={{backgroundImage: `url(${logo_Empresa})`}}></div>
                    <div>
                        <h2 className='text-xl font-semibold'>Software Engineer Ruby</h2>
                        <p className='text-base'>Lemon Cash</p>
                    </div>
                </div>
                <div>
                    <p className='bg-secundaryViolet px-6 py-1 rounded-xl text-white'>Senior</p>
                </div>
            </div>
        </Link>
    )
}

