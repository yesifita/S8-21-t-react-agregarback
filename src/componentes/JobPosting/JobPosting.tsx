import { useState, CSSProperties } from 'react'
import NavMenu from '../Nav/NavMenu'
import NavLogo from '../Nav/NavLogo'
import warning from '../../assets/images/warning.svg'
import electric from '../../assets/icons/Electric_bolt.svg'
import Folder from '../../assets/icons/Folder.svg'
import add from '../../assets/icons/add.svg'
import search from '../../assets/icons/search.svg'
import WorkCard from './WorkCard'
import styled from 'styled-components'
import PopUpVacante from './PopUpVacante'
import { Link } from 'react-router-dom'

export default function JobPosting() {
  const [open, setOpen] = useState(false)
  const [focus, setFocus] = useState('')
  const [popVacanteOpen, setPopVacanteOpen] = useState(false)

  function vacanteOpen() {
    setPopVacanteOpen(!popVacanteOpen)
  }

  const active =
    'bg-white text-black border-2 p-3.5 text-center font-semibold rounded-xl p-4 w-52 h-auto mt-[2.5rem]'
  const disabled =
    'bg-primaryBlueDark hover:bg-white hover:text-black hover:border-2 hover:p-3.5 text-white text-center font-semibold rounded-xl p-4 w-52 h-auto mt-[2.5rem]'

  const StyledDiv = styled.div`
    /* Estilos personalizados aquí */
    .scrollbar-hidden::-webkit-scrollbar {
      width: 0.1em;
      background-color: transparent;
    }
    .scrollbar-hidden {
      scrollbar-width: thin;
      -ms-overflow-style: none;
    }
  `

  return (
    <>
      <div className="relative flex">
        <div className="z-10">
          <NavMenu />
        </div>

        <div className="absolute pl-16 w-full">
          <NavLogo />
          <div className="mx-10 ">
            <div className="flex">
              <div>
                <h1 className="text-primaryBlueDark font-extrabold text-3xl leading-10 mt-[3.5rem]">
                  Filtros
                </h1>

                <button
                  className={`${focus === 'abiertas' ? active : disabled}`}
                  id="PERSONALES"
                  onClick={() => setFocus('abiertas')}
                >
                  <div className="flex justify-center gap-2">
                    <img src={electric} alt="electric" />
                    Vacantes abiertas
                  </div>
                </button>

                <button
                  className={`${focus === 'cerradas' ? active : disabled}`}
                  id="PERSONALES"
                  onClick={() => setFocus('cerradas')}
                >
                  <div className="flex justify-center gap-2">
                    <img src={Folder} alt="Folder" />
                    Vacantes cerradas
                  </div>
                </button>
              </div>

              <div className="w-full mr-14">
                <div className="flex items-center justify-between">
                  <Link to={'/empleo'}>
                  <button
                    className="bg-primaryGreen hover:bg-botonesHover text-white text-center font-semibold rounded-xl p-4 w-auto h-auto mt-[2.5rem]"
                    id="PERSONALES"
                    onClick={e => e}
                  >
                    <div className="flex justify-center gap-2">
                      <img src={add} alt="add" />
                      Crear nueva oferta de empleo
                    </div>
                  </button>
                  </Link>

                  {open ? (
                    <div className="relative flex mt-[2.5rem]">
                      <input
                        type="text"
                        className="rounded-xl h-12 focus:outline-none p-4 bg-secundaryGreyLight3"
                        placeholder="Escribe tu busqueda"
                        style={{ width: '15rem' }}
                      />
                      <div
                        className="absolute bg-secundaryGreyLight rounded-xl p-3 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setOpen(!open)}
                      >
                        <img src={search} alt="search" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center bg-secundaryGreyLight rounded-lg h-10 mt-[2.5rem]">
                      <button
                        className="flex justify-center items-center appearance-none"
                        onClick={() => setOpen(!open)}
                      >
                        <img src={search} alt="search" />
                      </button>
                    </div>
                  )}
                </div>

                {focus === 'cerradas' ? (
                  <div className="flex flex-col items-center justify-center bg-secundaryGreyLight3 w-full h-[45rem] rounded-2xl mt-5">
                    <div className="flex flex-col items-center w-96">
                      <img src={warning} alt="warning" className="w-20 h-20" />
                      <h1 className="text-primaryBlueDark text-center font-extrabold text-3xl leading-10 mt-2">
                        No hay vacantes cerradas en este momento
                      </h1>
                    </div>
                  </div>
                ) : (
                  <StyledDiv>
                    <div className="bg-white w-full h-[45rem] overflow-auto scrollbar-hidden rounded-2xl mt-10">
                      <div className="grid grid-rows-2 grid-cols-2 gap-y-4 gap-x-5">
                        <WorkCard vacanteOpen={vacanteOpen} />
                        <WorkCard vacanteOpen={vacanteOpen} />
                        <WorkCard vacanteOpen={vacanteOpen} />
                        <WorkCard vacanteOpen={vacanteOpen} />
                        <WorkCard vacanteOpen={vacanteOpen} />
                        <WorkCard vacanteOpen={vacanteOpen} />
                        <WorkCard vacanteOpen={vacanteOpen} />
                        <WorkCard vacanteOpen={vacanteOpen} />
                        <WorkCard vacanteOpen={vacanteOpen} />
                        <WorkCard vacanteOpen={vacanteOpen} />
                      </div>
                    </div>
                  </StyledDiv>
                )}
              </div>
            </div>

            {popVacanteOpen && <PopUpVacante vacanteOpen={vacanteOpen} />}
          </div>
        </div>
      </div>
    </>
  )
}
