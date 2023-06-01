import { useEffect, useState } from 'react'
import search from '../../assets/icons/search.svg'
import { FC } from 'react'

interface IProps {
  getApliccantsByFullName: (fullName: string) => void
}

export const SearchApliccants: FC<IProps> = ({ getApliccantsByFullName }) => {
  const [inputValues, setInputValues] = useState<{ fullName: string }>({
    fullName: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getApliccantsByFullName(inputValues.fullName)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="fullName"
        value={inputValues.fullName}
      ></input>
      <button type="submit">
        <img src={search} />
      </button>
    </form>
  )
}
