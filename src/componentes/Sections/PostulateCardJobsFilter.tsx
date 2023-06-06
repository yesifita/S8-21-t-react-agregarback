import { useState } from "react";
import CardJobRecommend from "../Apliccants/CardJobRecommend"
import CardJobPostulaciones from "../Apliccants/CardJobPostulaciones";
import logo_Empresa from '../../assets/images/LogoEmpresa.svg'
import logo_Empresa2 from '../../assets/images/LogoEmpresa2.png'
import logo_Empresa3 from '../../assets/images/LogoEmpresa3.png'
import logo_Empresa4 from '../../assets/images/LogoEmpresa4.png'

function PostulateCardJobsFilter() {

    const dataPostulaciones = [
        {
            datePostulaciones: '26 May. 2023',
            titlePostulaciones: 'Software EngineerRuby',
            empresaPostulaciones: 'Lemon Cash',
            cargoPostulaciones: 'Senior',
            logoEmpresa: logo_Empresa
        },
        {
            datePostulaciones: '23 May. 2023',
            titlePostulaciones: 'Developer Back-End',
            empresaPostulaciones: 'Fulltimeforce',
            cargoPostulaciones: 'Junior',
            logoEmpresa: logo_Empresa2
        },
        {
            datePostulaciones: '15 May. 2023',
            titlePostulaciones: 'Developer FullStack',
            empresaPostulaciones: 'Teleperformance',
            cargoPostulaciones: 'Junior',
            logoEmpresa: logo_Empresa3
        },
        {
            datePostulaciones: '12 May. 2023',
            titlePostulaciones: 'Software Engineer Java',
            empresaPostulaciones: 'Bux',
            cargoPostulaciones: 'Senior',
            logoEmpresa: logo_Empresa4
        },
        {
            datePostulaciones: '12 May. 2023',
            titlePostulaciones: 'Web Scrapping',
            empresaPostulaciones: 'Fulltimeforce',
            cargoPostulaciones: 'Senior',
            logoEmpresa: logo_Empresa2
        },
    ]

    const [activeButton, setActiveButton] = useState('button1');

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };


    return (
        <div className="bg-secundaryGreyLight border border-secundaryGreyLight2 rounded-xl pb-4" >
            <div className="flex">
                <button
                    onClick={() => handleButtonClick('button1')}
                    className={`bg-${activeButton === 'button1' && 'secundaryViolet'} text-${activeButton === 'button1' && 'white'} text-black w-full h-14 rounded-r-none`}
                >Recomendados para ti
                </button>
                <button
                    onClick={() => handleButtonClick('button2')}
                    className={`bg-${activeButton === 'button2' && 'secundaryViolet'} text-${activeButton === 'button2' && 'white'} text-black w-full h-14 rounded-l-none`}
                >Postulaciones recientes
                </button>
            </div>
            {activeButton === 'button1' && dataPostulaciones.map((puestoTrabajo, index) => (
                <CardJobPostulaciones
                    puestoTrabajo={puestoTrabajo}
                    key={index}
                />
            ))}

            {activeButton === 'button2' && dataPostulaciones.map((puestoTrabajo, index) => (
                <CardJobPostulaciones
                    puestoTrabajo={puestoTrabajo}
                    key={index}
                />
            ))}
      </div>
    )
}

export default PostulateCardJobsFilter
