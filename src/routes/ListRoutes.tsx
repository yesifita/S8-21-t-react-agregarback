import { Routes, Route } from 'react-router-dom'
import Login from '../componentes/login/Login'
import Register from '../componentes/login/Register'
// import ProtectedPath from '../componentes/protectedPath/ProtectedPath'
import UserProvider from '../context/UserProvider'
import RecDashboard from '../componentes/dashboard/recDashboard'
import { Apliccants } from '../componentes/Apliccants/Apliccants'
import Profile from '../componentes/Profile/Profile'
import CrearVacanteReclutador from '../componentes/cargarVacante/CrearVacanteReclutador'



const ListRoutes = () => {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/*" element={<h1>not found</h1>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/recruiter/dashboard" element={<RecDashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/postulantes" element={<Apliccants />}></Route>
          <Route path="/registro" element={<Register />}></Route>
          <Route path="/empleo" element={<CrearVacanteReclutador/>}></Route>
          
         
        </Routes>
      </UserProvider>
    </>
  )
}

export default ListRoutes
