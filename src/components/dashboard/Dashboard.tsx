import { useContext } from 'react'
import { UserContext } from "../../context/UserProvider"

const Dashboard = () => {
  const {setUser} = useContext(UserContext)
  return (
    <div>
      <button onClick={setUser(false)}>
        cerrar sesion
      </button>
    </div>
  )
}

export default Dashboard