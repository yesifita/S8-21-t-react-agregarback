import { useState } from 'react'
import company from '../../assets/images/santander.svg'
import menu from '../../assets/icons/puntos_verticales.svg'

export default function WorkCard({vacanteOpen}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="bg-secundaryGreyLight border-2 rounded-xl w-96 h-auto">
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-around bg-secundaryGreyLight">
          <div className="flex space-x-10 mt-5">
            <div className="flex space-x-4">
              <img className="w-12 h-12" src={company} alt="Imagen" />

              <div className="flex flex-col justify-center">
                <h1 className="text-xl not-italic font-bold leading-6 text-primaryBlueDark">
                  Software Engineer Java
                </h1>
                <p className="text-base font-medium leading-6 text-secundaryViolet">
                  Santander Río
                </p>
              </div>
            </div>
            <div className="relative translate-y-3 cursor-pointer" onClick={toggleMenu}>
              <img src={menu} alt="menu" />

              {/* Menú de opciones */}
              {menuOpen && (
                <div className="absolute bg-white shadow-lg py-2 mt-2 w-20 text-left z-50">
                  <button className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-none">
                    Editar
                  </button>
                  <button className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-none">
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="w-[91%] font-normal text-grisTexto text-base text-left leading-5 pt-7 pb-4">
            Trabajamos en proyectos ágiles con metodología SCRUM relacionados directamente con la
            nube (AWS), logrando el cumplimiento de los propósitos de los sprints planteados,
            calidad y funcionalidades especificadas dentro de los storymap de cada proyecto.
          </div>

          <div className="flex justify-around gap-x-2 w-[90%] pt-4 pb-4">
            <button
              className="hover:bg-rojo hover:text-blanco hover:border-none text-primaryGreen font-bold border-2 border-primaryGreen rounded-xl w-44 h-14"
              id="EMPRESA"
              onClick={vacanteOpen}
            >
              Ver publicación
            </button>
            <button
              className="bg-primaryGreen hover:bg-botonesHover text-white text-center font-bold rounded-xl w-44 h-14"
              id="EMPRESA"
              onClick={e => e}
            >
              Ver postulantes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
