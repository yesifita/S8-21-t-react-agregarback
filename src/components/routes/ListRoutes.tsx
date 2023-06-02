import { Routes, Route } from 'react-router-dom'

import UserProvider from '../../context/UserProvider'
import RecDashboard from '../../routes/recDashboard'
import { Apliccants } from '../../componentes/Apliccants/Apliccants'
import Profile from '../../componentes/Profile/Profile'
import Login from '../../componentes/login/Login'
import Register from '../../componentes/login/Register'
import JobPosting from '../../componentes/JobPosting/JobPosting'

const ListRoutes = () => {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/*" element={<h1>not found</h1>} />{' '}
          <Route path="/recruiter/dashboard" element={<RecDashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/postulantes" element={<Apliccants />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registro" element={<Register />}></Route>
          <Route path="/jobs" element={<JobPosting />}></Route>
        </Routes>
      </UserProvider>
    </>
  )
}

export default ListRoutes
