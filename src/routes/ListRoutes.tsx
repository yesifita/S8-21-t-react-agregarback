import { Routes, Route } from 'react-router-dom'
import Login from '../componentes/login/Login'
import Register from '../componentes/login/Register'
import UserProvider from '../context/UserProvider'
import RecDashboard from './recDashboard'
import { Apliccants } from '../componentes/Apliccants/Apliccants'
import Profile from '../componentes/Profile/Profile'
import CrearVacanteReclutador from '../componentes/cargarVacante/CrearVacanteReclutador'
import RecAyuda from './recAyuda'
import PerfilPostulante from '../componentes/PerfilPostulante/PerfilPostulante'
import PostuladosContainer from '../components/postulados/PostuladosContainer/PostuladosContainer'
import JobPosting from '../componentes/JobPosting/JobPosting'
import IA from '../componentes/IA/IA'
import PostuDashboard from './postuDashboard'
import PostuAyuda from './postuAyuda'
import FormEducacion from '../componentes/PerfilPostulante/FormEducacion'
import FormExperiencia from '../componentes/PerfilPostulante/FormExperiencia'

const ListRoutes = () => {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/*" element={<h1>not found</h1>}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/recruiter/dashboard" element={<RecDashboard />}></Route>
          <Route path="/postulate/dashboard" element={<PostuDashboard />}></Route>
          <Route path="/postulate/ayuda" element={<PostuAyuda />}></Route>
          <Route path="/recruiter/ayuda" element={<RecAyuda />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/postulantes" element={<Apliccants />}></Route>
          <Route path="/registro" element={<Register />}></Route>
          <Route path="/postulados" element={<PostuladosContainer />}></Route>
          <Route path="/empleo" element={<CrearVacanteReclutador />}></Route>
          <Route path="/postulante/perfil" element={<PerfilPostulante />}></Route>
          <Route path="/jobs" element={<JobPosting />}></Route>
          <Route path="/ia" element={<IA />}></Route>
          <Route path="/formeducacion" element={<FormEducacion />}></Route>
          <Route path="/formExperiencia" element={<FormExperiencia/>}></Route>
        </Routes>
      </UserProvider>
    </>
  )
}

export default ListRoutes
