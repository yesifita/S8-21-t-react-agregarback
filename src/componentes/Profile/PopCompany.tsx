import React, { useState } from 'react'

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
      <div className="flex flex-col justify-between bg-white p-8 w-4/5 h-5/6 rounded-xl border-2 border-colorPrimario">
        <div className="h-full">
          <h2 className="text-colorPrimario text-3xl leading-9 font-black mb-4">
            Datos de la empresa
          </h2>

          <div className="flex gap-x-6">
            <div className="flex flex-col w-full mt-4">
              <label className="text-colorPrimario font-bold text-base">Nombre</label>
              <input
                className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-8"
                type="text"
                name="nombre"
                value={newDates.nombre}
                onChange={e => handleInput(e)}
              />
              <label className="text-colorPrimario font-bold text-base">Dirección</label>
              <input
                className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-8"
                type="text"
                name="direccion"
                value={newDates.direccion}
                onChange={e => handleInput(e)}
              />
              <label className="text-colorPrimario font-bold text-base">Ubicación</label>
              <input
                className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-8"
                type="text"
                name="ubicacion"
                value={newDates.ubicacion}
                onChange={e => handleInput(e)}
              />
            </div>

            <div className="flex flex-col w-full mt-4">
              <label className="text-colorPrimario font-bold text-base">RUC</label>
              <input
                className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-8"
                type="text"
                name="ruc"
                value={newDates.ruc}
                onChange={e => handleInput(e)}
              />
              <label className="text-colorPrimario font-bold text-base">Rubro</label>
              <input
                className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-8"
                type="text"
                name="rubro"
                value={newDates.rubro}
                onChange={e => handleInput(e)}
              />
            </div>
          </div>

          <div>
            <h2 className="text-colorPrimario font-bold text-base leading-5">Breve descripción</h2>

            <textarea
              className="bg-bgCARDS w-full h-32 rounded-xl p-4 mt-4"
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

            <div className="text-botonesSecundarios font-normal text-xs leading-4 mt-3">
              Entre 400 y 1000 caracteres
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-x-6">
          <button
            className="hover:bg-rojo hover:text-blanco hover:border-none text-botonesPrincipales font-bold border-2 border-botonesPrincipales rounded-xl w-4/5 h-12"
            id="EMPRESA"
            onClick={e => togglePopup(e)}
          >
            Cancelar
          </button>
          <button
            className="bg-botonesPrincipales hover:bg-botonesHover text-white text-center font-bold rounded-xl w-4/5 h-12"
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
