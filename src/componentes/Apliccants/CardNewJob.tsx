import newJob from '../../assets/images/newJob.png'
import BtnCrearEmpleo from '../Buttons/BtnCrearEmpleo'

export default function CardNewJob() {
  return (
    <div className="flex items-center bg-secundaryGreyLight p-6 rounded-xl h-96">
      <div className="bg-no-repeat bg-center bg-cover mr-6 rounded-xl" style={{ backgroundImage: `url(${newJob})`, height: '340px', width: '300px'}}>
      </div>
      <div>
        <h2 className="text-3xl text-primaryBlueDark font-extrabold mb-4">
          Publica un nuevo empleo
        </h2>
        <p className="text-base text-primaryBlueDark mb-4">
          Confia en nuestra experiencia para encontrar el talento ideal que impulse el crecimiento
          de tu organización
        </p>
        
        <BtnCrearEmpleo />
      </div>
    </div>
  )
}


