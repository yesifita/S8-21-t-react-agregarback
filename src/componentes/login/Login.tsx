import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FormState } from '../../types'
import { useUser } from '../../context/UserProvider'
import NavBarLogin from './NavBarLogin'
import auth from '../../service/firebase'

const Login = () => {
  const [inputValues, setInputValues] = useState<FormState['inputValues']>({
    email: '',
    password: '',
  })
  const authUser = useUser()
  const usuario=authUser.user

  const navigate = useNavigate()

  
  const handleSubmit =  (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>)=> {
    e.preventDefault()
    if(!usuario){
      return navigate('/Registro')
    }else{
      authUser.login(inputValues.email, inputValues.password)     
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleGoogle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    authUser.loginGoogle() 
  }
  return (
    <>
      <NavBarLogin />
      <div
        className="flex items-center justify-center w-full h-673 bg-gradiente bg-gradient-to-b from-primaryBlueDark to-gradiente1/10"
        id="container"
      >
        <div
          id="content"
          className="flex flex-col items-center justify-center w-4/12 mb-8 bg-white h-4/5 rounded-xl"
        >
          <h1 className="text-2xl font-bold font-primaria text-primaryBlueDark w-375 h-7 botton-8">
            ¡Nos alegra verte nuevamente!
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center pt-10">
            <input
              onChange={handleChange}
              value={inputValues.email}
              type="email"
              name="email"
              placeholder="Correo Electronico*"
              className="pl-4 mb-4 bg-secundaryGreyLight rounded-xl w-404 h-14 text-primaryBlueDark placeholder:text-primaryBlueDark"
            ></input>
            <input
              onChange={handleChange}
              value={inputValues.password}
              type="password"
              name="password"
              placeholder="Contraseña"
              className="pl-4 bg-secundaryGreyLight rounded-xl w-404 h-14 text-primaryBlueDark placeholder:text-primaryBlueDark"
            ></input>
            <div>
              <label id="checkbox " className="text-base font-normal">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked
                  onChange={handleChange}
                  className="mt-8 mr-2 "
                ></input>
                Recordarme
              </label>
            </div>
            <div className="flex flex-col items-center w-full gap-1 pt-8">
              <button
                type="submit"
                onClick={handleSubmit}
                className="mb-2 text-base font-medium text-white border-solid w-404 h-14 rounded-xl bg-primaryGreen"
              >
                Iniciar Sesion
              </button>
              <button
                onClick={handleGoogle}
                className="mb-2 text-base font-medium text-white border-solid h-14 w-404 border-slate-800 rounded-xl bg-botonInicio"
              >
                <div className="flex items-start justify-center gap-1">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pt-1 mr-1"
                  >
                    <path
                      d="M19.5851 9.32754H10.4151V12.0575H16.9251C16.5951 15.8675 13.4251 17.4975 10.4251 17.4975C6.59514 17.4975 3.23514 14.4775 3.23514 10.2275C3.23514 6.12754 6.43514 2.95754 10.4351 2.95754C13.5251 2.95754 15.3351 4.92754 15.3351 4.92754L17.2351 2.94754C17.2351 2.94754 14.7951 0.227539 10.3351 0.227539C4.65514 0.227539 0.265137 5.02754 0.265137 10.2275C0.265137 15.2775 4.39514 20.2275 10.4851 20.2275C15.8351 20.2275 19.7351 16.5575 19.7351 11.1375C19.7351 9.98754 19.5851 9.32754 19.5851 9.32754Z"
                      fill="white"
                    />
                  </svg>
                  Inicia con Google
                </div>
              </button>
              <button className="pt-4 text-base font-medium">¿Olvidaste tu contraseña?</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
