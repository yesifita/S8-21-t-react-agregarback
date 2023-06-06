import React, { useState } from 'react'
import company from '../../assets/images/santander.svg'

interface Dates {
    nombre: string
    ruc: string
    direccion: string
    rubro: string
    ubicacion: string
  }

export default function PopCompany({togglePopup}) {

    const [newDates, setNewDates] = useState<Dates>({
        nombre: 'Tienda Nova C.A',
        ruc: 'J200207-8',
        direccion: 'Calle 12. Av 27-28 #51',
        rubro: 'Diseño de productos',
        ubicacion: 'Mendoza',
      })

    function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
        console.log(e.target.name)
        console.log(e.target.value)
        console.log(newDates)
        setNewDates((prevState: Dates) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
        console.log('nuevos dates', newDates)
      }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col justify-between bg-white p-8 w-4/5 h-[97%] rounded-xl border-2 border-primaryBlueDark">
        <div className="h-full">
          <h2 className="text-primaryBlueDark text-3xl leading-9 font-black">
            Datos de la empresa
          </h2>

                <div className="flex items-center justify-center w-[30rem] h-44 rounded-xl mt-5">
                  <div className="flex space-x-8">
                    <img className="w-36 h-36" src={company} alt="Imagen" />

                    <div className="flex flex-col justify-around">
                      <div className="font-normal text-grisTexto text-base leading-5">
                        Carga tu foto de perfil debe tener un mínimo 200x200px, intenta que sea en
                        buena calidad para ayudar a su legibilidad
                      </div>

                      <div className="flex justify-between gap-x-2">
                        <button
                          className="hover:bg-rojo hover:text-blanco hover:border-none text-primaryGreen font-bold border-2 border-primaryGreen rounded-xl w-4/5 h-12"
                          id="PERSONALES"
                          onClick={e => togglePopup(e)}
                        >
                          Borrar imagen
                        </button>
                        <button
                          className="bg-primaryGreen hover:bg-botonesHover text-white text-center font-bold rounded-xl w-4/5 h-12"
                          id="PERSONALES"
                          onClick={e => togglePopup(e)}
                        >
                          Cargar imagen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

          <div className="flex gap-x-6">
            <div className="flex flex-col w-full mt-4">
              <label className="text-primaryBlueDark font-bold text-base">Nombre</label>
              <input
                className="border-none rounded-xl h-12 bg-secundaryGreyLight p-4 mt-3 mb-8"
                type="text"
                name="nombre"
                value={newDates.nombre}
                onChange={e => handleInput(e)}
              />
              <label className="text-primaryBlueDark font-bold text-base">Dirección</label>
              <input
                className="border-none rounded-xl h-12 bg-secundaryGreyLight p-4 mt-3 mb-8"
                type="text"
                name="direccion"
                value={newDates.direccion}
                onChange={e => handleInput(e)}
              />
              <label className="text-primaryBlueDark font-bold text-base">Ubicación</label>
              <input
                className="border-none rounded-xl h-12 bg-secundaryGreyLight p-4 mt-3 mb-8"
                type="text"
                name="ubicacion"
                value={newDates.ubicacion}
                onChange={e => handleInput(e)}
              />
            </div>

            <div className="flex flex-col w-full mt-4">
              <label className="text-primaryBlueDark font-bold text-base">RUC</label>
              <input
                className="border-none rounded-xl h-12 bg-secundaryGreyLight p-4 mt-3 mb-8"
                type="text"
                name="ruc"
                value={newDates.ruc}
                onChange={e => handleInput(e)}
              />
              <label className="text-primaryBlueDark font-bold text-base">Rubro</label>
              <input
                className="border-none rounded-xl h-12 bg-secundaryGreyLight p-4 mt-3 mb-8"
                type="text"
                name="rubro"
                value={newDates.rubro}
                onChange={e => handleInput(e)}
              />
            </div>
          </div>

          <div>
            <h2 className="text-primaryBlueDark font-bold text-base leading-5">Breve descripción</h2>

            <textarea
              className="bg-secundaryGreyLight w-full h-32 rounded-xl p-4 mt-4"
              name="descripcion"
              id=""
            >
              Somos una empresa fintech que ofrece servicios financieros digitales ágiles y seguros.
              Contamos con una aplicación móvil, donde los usuarios pueden abrir una cuenta bancaria
              virtual en minutos y con la opción de realizar diferentes operaciones como: enviar
              dinero, pagar facturas y administrar sus finanzas. La empresa se destaca por contar
              con una interfaz intuitiva, con enfoque en la seguridad de las transacciones y
              protección de la información financiera.
            </textarea>

            <div className="text-secundaryViolet font-normal text-xs leading-4 mb-7" >
              Entre 400 y 1000 caracteres
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-x-6">
          <button
            className="hover:bg-rojo hover:text-blanco hover:border-none text-primaryGreen font-bold border-2 border-primaryGreen rounded-xl w-4/5 h-12"
            id="EMPRESA"
            onClick={e => togglePopup(e)}
          >
            Cancelar
          </button>
          <button
            className="bg-primaryGreen hover:bg-botonesHover text-white text-center font-bold rounded-xl w-4/5 h-12"
            id="EMPRESA"
            onClick={e => togglePopup(e)}
          >
            Actualizar datos
          </button>
        </div>
      </div>
    </div>
  )
}
