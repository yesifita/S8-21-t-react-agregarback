import React from 'react'
interface PostuladosDetailProps {
  item: any
}

const PostuladosDetail: React.FC<PostuladosDetailProps> = ({ item }) => {
  return (
    <div className="font-inter items-center text-center border-2 border-black rounded-xl xl:w-1/4 lg:w-1/3 md:w-1/2 m-2">
      <div className="flex justify-between p-2">
        <p className="font-inter font-medium text-xs leading-4 flex items-center text-gray-600">
          Editado hace 3 días
        </p>
        <i className="fa-regular fa-heart hover:invert"></i>
      </div>
      <div className="flex justify-center">
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
          className="w-20 h-20 rounded-full border"
        />
      </div>

      <p className="text-2xl font-bold  text-black mx-2">{item.nombre}</p>
      <p className=" font-normal text-black text-base leading-5 mx-2">{item.cargo}</p>
      <p className=" font-normal text-gray-600 text-sm leading-4 text-left m-2">
        {item.descripcion.length > 110 ? `${item.descripcion.slice(0, 110)}...` : item.descripcion}
      </p>
      <div className="border-2 border-gray-600 rounded-lg p-2 m-2">
        <p className="font-inter font-normal text-gray-600 text-sm leading-5 items-center">
          Salario pretendido{' '}
          <span className="bg-gray-300 rounded-lg p-1 text-gray-600">{`$ ${item.salario}`}</span>
        </p>
      </div>
      <div className="bg-gray-100 flex flex-wrap m-0 p-2">
        {item.skills.slice(0, 5).map((i: string) => (
          <p className="border-2  w-1/3 rounded-lg bg-gray-300 font-inter text-base leading-5 items-center text-gray-600 p-1">
            {i}
          </p>
        ))}
      </div>
      <div className="flex items-center justify-center flex-col m-2">
        <button className="p-1 gap-2 w-264 h-35 border border-black rounded-lg my-1 w-full hover:invert">
          Ver más información
        </button>
        <button className="p-1 gap-2 w-264 h-35 bg-gray-600 rounded-lg text-white my-1 w-full hover:invert">
          Contactar
        </button>
      </div>
    </div>
  )
}

export default PostuladosDetail
