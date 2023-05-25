import { Link, useNavigate } from "react-router-dom";
import {  useState } from "react";
import { FormState } from "../../types";
import { useUser } from "../../context/UserProvider";


const Login = () => {
  // const { user, setUser } = useContext(UserContext) as UserContextType;
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    email: "",
    password: ""  
  });
  const authUser=useUser();
  const {displaName}=authUser.user

  const navigate = useNavigate();

  const handleLogin = () => {
    
navigate ('/')
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
authUser.login(inputValues.email,inputValues.password)

  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

const handleGoogle=(e:React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault();
authUser.loginGoogle();
}
  return (
    <>
      {/* <h2>{user ? "en linea" : "offline"}</h2> */}
      <div
        className="flex items-center justify-center w-full h-screen bg-gradiente1/75 bg-gradient-to-b from-slate-400 to-gradiente1/10"
        id="container"
      >
        <div
          id="content"
          className="flex flex-col w-4/6 bg-white h-3/6 justify-content-center rounded-xl"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center pt-10 "
          >
            <input
              onChange={handleChange}
              value={inputValues.email}
              type="email"
              name="email"
              id=""
              placeholder="Correo Electronico"
              className="mb-4"
            ></input>
            <input
              onChange={handleChange}
              value={inputValues.password}
              type="password"
              name="password"
              placeholder="contraseña"
            ></input>
            <label id="checkbox">
              Recordarme
              <input type="checkbox" id="checkbox"></input>
            </label>            
        
            <button
              type="submit"
              onClick={handleLogin}
              className="w-40 h-8 mb-2 text-white border-solid border-slate-800 rounded-xl bg-boton"
            >
              Iniciar Sesion
            </button>
            <button onClick={handleGoogle} className="w-48 h-8 mb-2 text-white border-solid border-slate-800 rounded-xl bg-boton">
              Iniciar Sesion con Google
            </button>
            <p>¿Olvidaste tu contraseña?</p>
            <Link to="/Registro">
              <p>Registra tu usuario</p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
