import React from 'react'
import PostuladosDetail from '../PostuladosDetail/PostuladosDetail'
import { useEffect, useState } from 'react'

interface PostuladosListProps {
  items: any[] | undefined
  selectedRange: string
  modalidad: string
  experiencia: string
}

const PostuladosList: React.FC<PostuladosListProps> = ({
  items,
  selectedRange,
  modalidad,
  experiencia,
}) => {
  const [data, setData] = useState(items)
  useEffect(() => {
    console.log('ejecutandose')
    const filteredItems =
      selectedRange === 'all'
        ? items
        : items?.filter(salary => {
            const [minRange, maxRange] = selectedRange.split('-').map(Number)
            console.log(minRange, maxRange)
            console.log(salary.salario, salary.salario >= minRange && salary.salario <= maxRange)
            return salary.salario >= minRange && salary.salario <= maxRange
          })
    console.log(filteredItems)
    setData(filteredItems)
  }, [selectedRange, items])

  useEffect(() => {
    console.log('ejecutandose')
    const filteredItems =
      experiencia === 'all'
        ? items
        : items?.filter(salary => {
            console.log(String(salary.experiencia).toLowerCase(), experiencia)
            return String(salary.experiencia).toLowerCase() === experiencia
          })
    console.log(filteredItems)
    setData(filteredItems)
  }, [experiencia, items])

  useEffect(() => {
    console.log('ejecutandose')
    const filteredItems =
      modalidad === 'all'
        ? items
        : items?.filter(salary => {
            console.log(String(salary.modalidad).toLowerCase(), modalidad)
            return String(salary.modalidad).toLowerCase() === modalidad
          })
    console.log(filteredItems)
    setData(filteredItems)
  }, [modalidad, items])
  return (
    <>
      <div>Hola Postulados!</div>
      <div className="flex flex-wrap">
        {data?.map((item, index) => {
          console.log('renderizandose')
          if (item) {
            return <PostuladosDetail key={index} item={item} />
          }
        })}
      </div>
    </>
  )
}

export default PostuladosList
