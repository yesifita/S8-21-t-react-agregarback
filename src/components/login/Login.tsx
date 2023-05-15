

const Login = () => {
  return (
    <div className="bg-red-300"id="container">
        <div id="content">
            <form>
               
                <input type="email" placeholder="Correo Electronico"></input>            
                <input type="password" placeholder="contraseña"></input>
                <label id="checkbox">Recordarme
                <input type="checkbox" id='checkbox'></input>
                </label>
                <button >Iniciar Sesion</button>
                <button>Iniciar Sesion con Google</button>
                <p>Olvidaste tu contraseña</p>
            </form>
        </div>
    </div>
  )
}

export default Login