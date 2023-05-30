import { useState } from 'react'
import Avatar from '../../assets/images/Avatar.svg'
import NavMenu from '../navMenu'
import NavLogo from '../Nav/NavLogo'
import PopCompany from './PopCompany'
import PopManager from './PopManager'

interface Dates {
  nombre: string
  ruc: string
  direccion: string
  rubro: string
  ubicacion: string
}

export default function Profile() {
  const [newDates, setNewDates] = useState<Dates>({
    nombre: 'Tienda Nova C.A',
    ruc: 'J200207-8',
    direccion: 'Calle 12. Av 27-28 #51',
    rubro: 'Diseño de productos',
    ubicacion: 'Mendoza',
  })

  const [datoEmpresa, setDatoEmpresa] = useState(false)
  const [datoPersonales, setDatoPersonales] = useState(false)

  const togglePopup = e => {
    if (e.currentTarget.id === 'EMPRESA') setDatoEmpresa(!datoEmpresa)

    if (e.currentTarget.id === 'PERSONALES') setDatoPersonales(!datoPersonales)
  }

  return (
    <>
      <div className="absolute w-full h-full flex">
        <div className="w-[5.3rem]">
          <NavMenu />
        </div>

        <div className="w-full h-full">
          <NavLogo />

          <div className="flex justify-between h-[54rem]">
            <div className="ml-14">
              <div className="flex items-center justify-center w-[30rem] h-44 rounded-xl mt-10 bg-bgCARDS">
                <div className="flex space-x-4 mr-9">
                  <img className="w-32 h-32" src={Avatar} alt="Imagen" />

                  <div className="flex flex-col justify-center">
                    <h1 className="text-colorPrimario font-extrabold text-3xl leading-10 not-italic">
                      Eduardo Vargas
                    </h1>
                    <p className="text-botonesSecundarios font-normal text-base leading-5">
                      Reclutador de Tiendas Nova
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-colorPrimario font-extrabold text-3xl leading-10 mt-[3.5rem]">
                  Datos de recuperación
                </h1>
                <div className="font-semibold text-xl leading-6 mt-[1.5rem] text-colorPrimario">
                  <p>Tu empresa está registrada con el e-mail</p>
                  <p className="font-bold text-colorPrimario">vargas@nova.com</p>
                </div>
                <div className="font-semibold text-xl leading-6 w-[30rem] mt-[1.5rem] text-colorPrimario">
                  <p>
                    A esta dirección te enviaremos las notificaciones sobre el estado de tus empleos
                    publicados, y recuperación de datos.
                  </p>
                </div>
                <button
                  className="bg-botonesPrincipales text-blanco text-center rounded-xl p-4 w-52 h-auto mt-[2.5rem]"
                  id="PERSONALES"
                  onClick={e => togglePopup(e)}
                >
                  Modificar datos
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center bg-bgCARDS w-[32rem] h-[50rem] rounded-xl mt-10 mr-24">
              <h1 className="text-colorPrimario font-extrabold text-3xl leading-10 mt-[3.5rem]">
                Datos de la Empresa
              </h1>

              <div className="flex items-center justify-between space-x-5 mt-[3.5rem] w-96">
                <h6 className="text-botonesSecundarios font-bold text-lg leading-5">Nombre</h6>
                <div className="bg-botonesSecundarios text-blanco text-center w-64 h-12 rounded-xl p-4">
                  <p>{newDates.nombre}</p>
                </div>
              </div>

              <div className="flex items-center justify-between space-x-5 mt-[1.2rem] w-96">
                <h6 className="text-botonesSecundarios font-bold text-lg leading-5">RUC</h6>
                <div className="bg-botonesSecundarios text-blanco text-center w-64 h-12 rounded-xl p-4">
                  <p>{newDates.ruc}</p>
                </div>
              </div>

              <div className="flex items-center justify-between space-x-5 mt-[1.2rem] w-96">
                <h6 className="text-botonesSecundarios font-bold text-lg leading-5">Dirección</h6>
                <div className="bg-botonesSecundarios text-blanco text-center w-64 h-12 rounded-xl p-4">
                  <p>{newDates.direccion}</p>
                </div>
              </div>

              <div className="flex items-center justify-between space-x-5 mt-[1.2rem] w-96">
                <h6 className="text-botonesSecundarios font-bold text-lg leading-5">Rubro</h6>
                <div className="bg-botonesSecundarios text-blanco text-center w-64 h-12 rounded-xl p-4">
                  <p>{newDates.rubro}</p>
                </div>
              </div>

              <h1 className="text-botonesSecundarios font-semibold text-xl leading-6 mt-[2rem]">
                Descripción
              </h1>

              <div className="bg-blanco w-[28rem] rounded-xl p-5 mt-[1rem]">
                <p>
                  Aca una breve descripción de la empresa, que solamente se muestren 3 líneas y el
                  resto de la información se observe cuando la persona vaya a editar esta parte...
                </p>
              </div>

              <button
                className="bg-botonesPrincipales text-blanco text-center rounded-xl p-4 w-52 h-auto mt-[2.5rem]"
                id="EMPRESA"
                onClick={e => togglePopup(e)}
              >
                Modificar información
              </button>

              {datoEmpresa && (
                <PopCompany togglePopup={togglePopup}/>
              )}

              {datoPersonales && (
                <PopManager togglePopup={togglePopup}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
