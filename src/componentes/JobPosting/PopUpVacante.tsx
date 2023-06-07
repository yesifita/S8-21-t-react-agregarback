import React, { useState } from 'react'
import company from '../../assets/images/santander.svg'
import menu from '../../assets/icons/puntos_verticales.svg'
import Cancel from '../../assets/icons/Cancel.svg'

interface Dates {
  nombre: string
  descripcion: string
  telefono: string
  cargo: string
  codigoArea: string
}

export default function PopUpVacante({vacanteOpen}) {
    const [newDates, setNewDates] = useState<Dates>({
        nombre: 'Eduardo',
        descripcion: 'Reclutador de Lemon Cash',
        telefono: '92235912197',
        codigoArea: '+54',
        cargo: 'Selecciona una opción',
      })
      const [switches, setSwitch] = useState("encargado")
      const activo = `bg-primaryBlueDark text-blanco border-none font-bold rounded-none ${switches === "encargado" ? 'rounded-l-lg' : 'rounded-r-lg'} w-4/5 h-12`
      const noActivo = `bg-secundaryGreyLight2 text-primaryBlueDark text-center font-bold rounded-none ${switches === "recuperación" ? 'rounded-l-lg' : 'rounded-r-lg'} w-4/5 h-12`
    
      function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
        setNewDates((prevState: Dates) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

      const [menuOpen, setMenuOpen] = useState(false)

      const toggleMenu = () => {
        setMenuOpen(!menuOpen)
      }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div className="flex flex-col justify-between bg-white p-4 w-2/4 h-[90%] rounded-xl border-2 border-primaryBlueDark">
      <div className="h-full">
        <div className="flex flex-col items-left">

          {switches === 'encargado' && (
          <div className="flex justify-between mt-5">
          <div className="flex space-x-4">
            <img className="w-20 h-20" src={company} alt="Imagen" />

            <div className="flex flex-col justify-center gap-1">
              <h1 className="text-2xl font-bold leading-7 text-primaryBlueDark">
                Software Engineer Java
              </h1>
              <p className="text-xl font-bold leading-6 text-primaryBlueDark">
                Santander Río
              </p>
              <p className="text-base font-medium leading-5 text-grisTexto">
              Publicado hace 7 días
              </p>
            </div>
          </div>
          <div className="relative flex flex-col justify-around">
            <div className='cursor-pointer' onClick={vacanteOpen}>
            <img src={Cancel} alt="Cancel" />
            </div>
            <div className='cursor-pointer' onClick={toggleMenu}>
            <img src={menu} alt="menu" />
            </div>

            {/* Menú de opciones */}
            {menuOpen && (
              <div className="absolute bg-white shadow-lg py-2 mt-40 w-36 z-10">
                <button className="block w-full py-2 px-4 text-sm text-gray-700 text-left hover:bg-gray-100 hover:rounded-none" onClick={toggleMenu}>
                Cerrar búsqueda
                </button>
                <button className="block w-full py-2 px-4 text-sm text-gray-700 text-left hover:bg-gray-100 hover:rounded-none" onClick={toggleMenu}>
                Borrar
                </button>
              </div>
            )}
          </div>
        </div>
          )}
        </div>

        {switches === 'encargado' && (
          <div className="flex items-center bg-secundaryGreyLight">

            <div className='w-2/4 h-full'>
            <div>
            <div>Experiencia</div>
            <div>Senior</div>
            <div>Modalidad</div>
            <div>Remoto</div>
            <div>Salario</div>
            <div>$150.000</div>
            <div>Nivel de inglés</div>
            <div>B2 - Intermedio</div>
            </div>
            <div>
                <h1>Beneficios</h1>
                <div>Computadora</div>
                <div>Cobertura prepaga</div>
                <div>Clases de inglés</div>
            </div>
            </div>

            <div className='w-2/4 h-full'>
                <div>
                    <h1>Acerca del puesto</h1>
                    <p>Trabajamos en proyectos ágiles con metodología SCRUM relacionados directamente con la nube (AWS), logrando el cumplimiento de los propósitos de los sprints planteados, calidad y funcionalidades especificadas dentro de los storymap de cada proyecto.</p>
                </div>
                <div>
                    <h1>Requerimientos del puesto</h1>
                    <p>Java 8/13
PrimeFaces / JSF
Spring / SpringBoot / Spring Batch
Hibernate / JPA
Queues / RabbitMQ / ActiveMQ (no excluyente)
Desarrollo de aplicativos REST
OpenAPI (no excluyente)</p>
                </div>
            </div>
          </div>
        )}

      </div>

      <div className="flex justify-between gap-x-6">
        <button
          className="hover:bg-rojo hover:text-blanco hover:border-none text-secondary font-bold border-2 border-secondary rounded-xl w-4/5 h-12"
          id="PERSONALES"
          onClick={e => (e)}
        >
          Eliminar publicación
        </button>
        <button
          className="bg-primaryGreen hover:bg-botonesHover text-white text-center font-bold rounded-xl w-4/5 h-12"
          id="PERSONALES"
          onClick={e => (e)}
        >
          Editar publicación
        </button>
      </div>
    </div>
  </div>
  )
}
