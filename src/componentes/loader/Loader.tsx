import { DotSpinner } from '@uiball/loaders'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Loader = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/recruiter/dashboard')
    }, 2000)
  }, [])

  return (
    <div
      id="conteiner_loader"
      className="flex flex-col items-center justify-center w-full h-full bg-white "
    >
      <div id="content_loader" className="w-4/12 mt-56 h-3/6">
      
          <div className="px-64 py-20 fill-red-600 ">
            <DotSpinner size={96} color="#69BA00" />
         
        </div>
      </div>
    </div>
  )
}

export default Loader
