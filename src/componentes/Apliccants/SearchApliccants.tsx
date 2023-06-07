import { useEffect, useState } from 'react'
import search from '../../assets/icons/search.svg'
import { FC } from 'react'

interface IProps {
  getApliccantsByFilter: (key: string, value: string) => void
}

interface IInputValues {
  fullName: string
  rol: string
  experience: string
}
export const SearchApliccants: FC<IProps> = ({ getApliccantsByFilter }) => {
  const [inputValues, setInputValues] = useState<IInputValues>({
    fullName: '',
    rol: '',
    experience: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(inputValues)
    getApliccantsByFilter('fullName', inputValues.fullName)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    })
    if (e.target.name !== 'fullName') {
      getApliccantsByFilter(e.target.name, e.target.value)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="m-5 flex justify-between">
      <div>
        <select
          name="rol"
          onChange={handleChange}
          value={inputValues.rol}
          className="bg-gray-100 h-8 mr-6"
        >
          <option value="value1">Todas las vacantes</option>
          <option id="UX" value="UX">
            Diseño / UX
          </option>
          <option id="frontend" value="Frontend">
            Frontend
          </option>
          <option id="Backend" value="Backend">
            Backend
          </option>

          <option id="Ciberseguridad" value="Ciberseguridad">
            Ciberseguridad
          </option>
        </select>

        <select
          name="experience"
          onChange={handleChange}
          value={inputValues.experience}
          className="bg-gray-100 h-8"
        >
          <option value="">Nivel de Experiencia</option>
          <option id="sinExperience" value="Sin Experiencia">
            Sin experiencia
          </option>
          <option id="junior" value="Junior">
            Junior
          </option>
          <option id="semiSenior" value="SemiSenior">
            Semi Senior
          </option>
          <option id="senior" value="Senior">
            Senior
          </option>
        </select>
      </div>
      <div className="flex">
        <input
          onChange={handleChange}
          type="text"
          name="fullName"
          value={inputValues.fullName}
          className="bg-gray-100 h-8"
        ></input>
        <button type="submit">
          <img src={search} />
        </button>
      </div>
    </form>
  )
}
