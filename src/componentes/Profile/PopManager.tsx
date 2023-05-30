import React, { useState } from 'react'
import Avatar from '../../assets/images/Avatar.svg'

interface Dates {
  nombre: string
  descripcion: string
  telefono: string
  cargo: string
  codigoArea: string
}

export default function PopManager({ togglePopup }) {
  const [newDates, setNewDates] = useState<Dates>({
    nombre: 'Eduardo',
    descripcion: 'Reclutador de Lemon Cash',
    telefono: '92235912197',
    codigoArea: '+54',
    cargo: 'Selecciona una opción',
  })
  const [switches, setSwitch] = useState("encargado")
  const activo = `bg-colorPrimario text-blanco border-none font-bold rounded-none ${switches === "encargado" ? 'rounded-l-lg' : 'rounded-r-lg'} w-4/5 h-12`
  const noActivo = "bg-grisOptions text-colorPrimario text-center font-bold rounded-none rounded-r-lg w-4/5 h-12"

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
      <div className="flex flex-col justify-between bg-white p-8 w-4/5 h-4/6 rounded-xl border-2 border-colorPrimario">
        <div className="h-full">
          <div className="flex flex-col items-center">
            <div className="flex justify-between w-full">
              <button
                className={switches === "encargado" ? activo : noActivo}
                id="encargado"
                onClick={(e) => setSwitch(e.currentTarget.id)}
              >
                Datos del encargado
              </button>
              <button
                className={switches !== "recuperación" ? noActivo : activo}
                id="recuperación"
                onClick={(e) => setSwitch(e.currentTarget.id)}
              >
                Datos de recuperación
              </button>
            </div>

            {switches === 'encargado' && (
              <div>
                <div className="flex items-center justify-center w-[30rem] h-44 rounded-xl mt-10">
                  <div className="flex space-x-8">
                    <img className="w-36 h-36" src={Avatar} alt="Imagen" />

                    <div className="flex flex-col justify-around">
                      <div className="font-normal text-grisTexto text-base leading-5">
                        Carga tu foto de perfil debe tener un mínimo 200x200px, intenta que sea en
                        buena calidad para ayudar a su legibilidad
                      </div>

                      <div className="flex justify-between gap-x-2">
                        <button
                          className="hover:bg-rojo hover:text-blanco hover:border-none text-botonesPrincipales font-bold border-2 border-botonesPrincipales rounded-xl w-4/5 h-12"
                          id="PERSONALES"
                          onClick={e => togglePopup(e)}
                        >
                          Borrar imagen
                        </button>
                        <button
                          className="bg-botonesPrincipales hover:bg-botonesHover text-white text-center font-bold rounded-xl w-4/5 h-12"
                          id="PERSONALES"
                          onClick={e => togglePopup(e)}
                        >
                          Cargar imagen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {switches === 'encargado' && (
            <div className="flex gap-x-6">
              <div className="flex flex-col w-full mt-4">
                <label className="text-colorPrimario font-bold text-base">Nombre y apelido</label>
                <input
                  className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-8"
                  type="text"
                  name="nombre"
                  value={newDates.nombre}
                  onChange={e => handleInput(e)}
                />
                <label className="text-colorPrimario font-bold text-base">Teléfono</label>
                <div className="flex gap-x-2">
                  <input
                    className="border-none rounded-xl w-16 h-12 bg-bgCARDS p-4 mt-3 mb-8"
                    type="text"
                    name="codigoArea"
                    value={newDates.codigoArea}
                    onChange={e => handleInput(e)}
                  />
                  <input
                    className="border-none rounded-xl w-full h-12 bg-bgCARDS p-4 mt-3 mb-8"
                    type="number"
                    name="telefono"
                    value={newDates.telefono}
                    onChange={e => handleInput(e)}
                  />
                </div>
              </div>

              <div className="flex flex-col w-full mt-4">
                <label className="text-colorPrimario font-bold text-base">
                  Titular/Descripción
                </label>
                <input
                  className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-8"
                  type="text"
                  name="descripcion"
                  value={newDates.descripcion}
                  onChange={e => handleInput(e)}
                />
                <label className="text-colorPrimario font-bold text-base">Cargo</label>
                <div className="flex items-center w-full">
                  <select
                    name="cargo"
                    id="cargo"
                    defaultValue={newDates.cargo}
                    className="border-r-8 border-transparent text-colorPrimario rounded-xl w-full h-12 bg-bgCARDS p-3 mt-3 mb-8"
                  >
                    <option disabled>{newDates.cargo}</option>
                    <option value="Gerente de la empresa">Gerente de la empresa</option>
                    <option value="Director de recursos humanos">
                      Director de recursos humanos
                    </option>
                    <option value="Jefe de reclutamiento">Jefe de reclutamiento</option>
                    <option value="Auxiliar administrativo">Auxiliar administrativo</option>
                    <option value="Director de marketing">Director de marketing</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {switches === 'recuperación' && (
            <div className="flex gap-x-6 mt-10">
              <div className="flex flex-col w-full mt-4">
                <label className="text-colorPrimario font-bold text-base">Correo actual</label>
                <input
                  className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-8"
                  type="text"
                  name="nombre"
                  placeholder="vargas@nova.com"
                  onChange={e => handleInput(e)}
                />
                <label className="text-colorPrimario font-bold text-base">
                  Repetir el nuevo correo
                </label>
                <input
                  className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-8"
                  type="text"
                  name="direccion"
                  onChange={e => handleInput(e)}
                />
                <label className="text-colorPrimario font-bold text-base">
                  Ingresa la nueva clave
                </label>
                <input
                  className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-4"
                  type="text"
                  name="ubicacion"
                  onChange={e => handleInput(e)}
                />
                <div className="text-botonesSecundarios font-normal text-xs leading-4">
                  La clave debe contener un mínimo de 4 caracteres y un máximo de 10
                </div>
              </div>

              <div className="flex flex-col w-full mt-4">
                <label className="text-colorPrimario font-bold text-base">
                  Ingresar el nuevo correo
                </label>
                <input
                  className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-8"
                  type="text"
                  name="ruc"
                  onChange={e => handleInput(e)}
                />
                <label className="text-colorPrimario font-bold text-base">
                  Ingresa la clave actual
                </label>
                <input
                  className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-8"
                  type="text"
                  name="rubro"
                  onChange={e => handleInput(e)}
                />
                <label className="text-colorPrimario font-bold text-base">
                  Repetir la nueva clave
                </label>
                <input
                  className="border-none rounded-xl h-12 bg-bgCARDS p-4 mt-3 mb-8"
                  type="text"
                  name="rubro"
                  onChange={e => handleInput(e)}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between gap-x-6">
          <button
            className="hover:bg-rojo hover:text-blanco hover:border-none text-botonesPrincipales font-bold border-2 border-botonesPrincipales rounded-xl w-4/5 h-12"
            id="PERSONALES"
            onClick={e => togglePopup(e)}
          >
            Cancelar
          </button>
          <button
            className="bg-botonesPrincipales hover:bg-botonesHover text-white text-center font-bold rounded-xl w-4/5 h-12"
            id="PERSONALES"
            onClick={e => togglePopup(e)}
          >
            Actualizar datos
          </button>
        </div>
      </div>
    </div>
  )
}
