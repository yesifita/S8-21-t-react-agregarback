import newJob from '../../assets/images/newJob.png'
import BtnCrearEmpleo from "../../componentes/Buttons/BtnCrearEmpleo";


export default function CardNewJob() {
    return (
        <div className="flex items-center bg-zinc-200 p-6 rounded-xl h-96">
            <div className="mr-4">
                <img src={newJob} alt="New Job" className="rounded-xl" style={{height: '340px', width:'350px'}}/>
            </div>
            <div>
                <h2 className="text-3xl font-extrabold mb-4">Publica un nuevo empleo</h2>
                <p className="text-base mb-4">Confia en nuestra experiencia para encontrar el talento ideal que impulse el crecimiento de tu organización</p>
                <BtnCrearEmpleo/>
            </div>
        </div>
    )
}

