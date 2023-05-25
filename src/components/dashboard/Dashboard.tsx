import { Link } from "react-router-dom"
import { useUser } from "../../context/UserProvider"

const Dashboard = () => {
  const authUser=useUser();
const {displayName}= authUser.user;
const handleLogout=()=>{
authUser.logout()
}


  return (
    <div>
      {displayName && <h1>hola {displayName}!</h1>}
    <Link to='/login'>
      <button onClick={handleLogout} className="w-40 h-12 text-white border-solid bg-boton border-slate-400 ">
        Logout
      </button>
      </Link>
    
    </div>
  )
}

export default Dashboard