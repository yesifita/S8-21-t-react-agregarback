import React, { useState, useEffect, useRef } from 'react'
interface PostuladosDetailProps {
  item: any
}

const PostuladosDetail: React.FC<PostuladosDetailProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current === event.target) {
        setIsOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen])
  const openPopup = () => {
    setIsOpen(true)
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const options = ['Biografía', 'Experiencia', 'Educación', '+Skills']
  console.log(item.education)
  const renderComponent = () => {
    switch (options[currentIndex]) {
      case 'Biografía':
        return (
          <p className="pb-4 text-left font-medium text-xs leading-4 text-gray-600">
            {item.descripcion}
          </p>
        )
      case 'Experiencia':
        return (
          <div>
            {item.education.map(edu => (
              <div className="text-left flex pb-4 pt-4 bg-gray-300 rounded-t-xl mb-2">
                <div>
                  <h1 className="px-4 bg-white m-2 font-bold text-base leading-5 text-purple-900 rounded-lg">
                    {edu.fechaInicio.split('/')[1]} / {edu.fechaFin.split('/')[1]}
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold text-base leading-5 text-purple-900">{edu.titulo}</h1>
                  <h1 className="font-bold text-xs leading-4 text-gray-600">{edu.institucion}</h1>
                  <h1 className="font-semibold text-xs leading-4 text-gray-400">
                    {edu.fechaInicio} - {edu.fechaFin}{' '}
                  </h1>
                  {edu.funciones.map(fun => (
                    <h1 className="font-medium text-xs leading-4 text-gray-600">{fun}</h1>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      case '+Skills':
        return (
          <div className="text-left p-4 bg-gray-300 rounded-t-xl mb-2 font-bold text-base leading-5 text-purple-900">
            <h1>Idiomas</h1>
            <div className="flex py-4">
              {item.idiomas.map(idiom => (
                <h1 className="p-3 mr-2 border border-purple-800 rounded-xl font-semibold text-xs leading-4 text-purple-800">
                  {idiom}
                </h1>
              ))}
            </div>
            <h1>Habilidades</h1>

            <div className="flex py-4">
              {item.habilidades.map(idiom => (
                <h1 className="p-3 mr-2 border border-purple-800 rounded-xl font-semibold text-xs leading-4 text-purple-800">
                  {idiom}
                </h1>
              ))}
            </div>
          </div>
        )

      case 'Educación':
        return (
          <div>
            {item.education.map(edu => (
              <div className="text-left flex pb-4 pt-4 bg-gray-300 rounded-t-xl mb-2">
                <div>
                  <h1 className="px-4 bg-white m-2 font-bold text-base leading-5 text-purple-900 rounded-lg">
                    {edu.fechaInicio.split('/')[1]} / {edu.fechaFin.split('/')[1]}
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold text-base leading-5 text-purple-900">{edu.titulo}</h1>
                  <h1 className="font-bold text-xs leading-4 text-gray-600">{edu.institucion}</h1>
                  <h1 className="font-semibold text-xs leading-4 text-gray-400">
                    {edu.fechaInicio} - {edu.fechaFin}{' '}
                  </h1>
                  {edu.funciones.map(fun => (
                    <h1 className="font-medium text-xs leading-4 text-gray-600">{fun}</h1>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="font-inter items-center text-center rounded-xl xl:w-1/4 lg:w-1/3 md:w-1/2 m-2 shadow-md">
      <div className="bg-gray-100 bg-opacity-30 rounded-tl-xl rounded-tr-xl pb-4">
        <div className="flex justify-between p-2">
          <p className="font-inter font-medium text-xs leading-4 flex items-center text-gray-600"></p>
          <i className="fa-regular fa-heart hover:invert text-green-500"></i>
        </div>
        <div className="flex justify-center">
          <img
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
            className="w-20 h-20 rounded-full border"
          />
        </div>

        <p className="text-2xl font-bold  text-black mx-2">{item.nombre}</p>
        <p className=" font-normal text-gray-500 text-base leading-5 mx-2">{item.cargo}</p>
      </div>
      <div className="flex p-2">
        <div className="flex flex-col p-2">
          <p className="w-full font-semibold text-xs leading-4 text-purple-900">Modalidad</p>
          <p className="w-full rounded-xl font-semibold text-xs leading-4 bg-violet-800 text-white p-2 m-2">
            {item.modalidad}
          </p>
        </div>
        <div className="flex flex-col p-2">
          <p className="w-full font-semibold text-xs leading-4 text-purple-900">Experiencia</p>
          <p className="w-full rounded-xl font-semibold text-xs leading-4 bg-violet-800 text-white  p-2 m-2">
            {item.experiencia}
          </p>
        </div>
      </div>
      <div className="p-2">
        <p className="text-left pl-4 font-semibold text-xs leading-4 text-purple-900">
          Habilidades
        </p>
        <div className=" flex flex-wrap m-0 p-2">
          {/* {item.skills.slice(0, 3).map((i: string) => (
            <p className="m-1 w-1/3 border border-purple-800 rounded-xl font-semibold text-xs leading-4 text-violet-800 p-2">
              {i}
            </p>
          ))} */}
        </div>
      </div>

      <div className="flex items-center justify-center flex-col m-2">
        <button
          onClick={openPopup}
          className="p-3 gap-2 w-264 h-35 font-medium text-base leading-5 rounded-lg my-1 w-full bg-green-600 text-white hover:invert"
        >
          Ver más
        </button>
      </div>
      {isOpen && (
        <div
          ref={popupRef}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 "
        >
          <div className="bg-white p-4 rounded-xl w-1/3">
            <h2 className="font-bold text-2xl leading-10 text-violet-800">{item.cargo}</h2>
            <div className="bg-white border-4 border-gray-100 rounded-xl p-4 flex w-full">
              <img
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                className="w-32 h-32 rounded-xl m-2 w-1/3"
              />
              <div className="m-2 text-left w-1/3">
                <p className="font-bold text-lg leading-6 text-purple-900">{item.nombre}</p>
                <p className="font-normal font-medium text-base leading-5 text-gray-600">
                  {item.cargo} • {item.experiencia}{' '}
                </p>
              </div>
              <div className="m-2 w-1/3">
                <div className="flex w-full ">
                  <div className="w-1/3 bg-white border border-purple-900 rounded-md m-1 py-1">
                    <i className="fa-brands fa-linkedin fa-lg"></i>
                  </div>
                  <div className="w-1/3 bg-white border border-purple-900 rounded-md m-1 py-1">
                    <i className="fa-brands fa-github fa-lg"></i>
                  </div>
                  <div className="w-1/3 bg-white border border-purple-900 rounded-md m-1 py-1">
                    <i className="fa-sharp fa-solid fa-download fa-lg"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex bg-gray-300 rounded-xl mt-4 mb-4 font-semibold text-base leading-5 text-purple-900 w-full">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`p-4 rounded-xl w-1/4 ${
                    currentIndex === index
                      ? 'bg-purple-900 text-white'
                      : 'bg-gray-300 text-purple-900'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="w-full">{renderComponent()}</div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
              Contactar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostuladosDetail
