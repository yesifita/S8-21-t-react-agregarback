import { Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import Register from "../login/Register";
import ProtectedPath from "../protectedPath/ProtectedPath";
import UserProvider from "../../context/UserProvider";
import RecDashboard from "../../routes/recDashboard";
import { Apliccants } from "../../componentes/Apliccants/Apliccants";
import Profile from "../../componentes/Profile/Profile";
import RecAyuda from "../../routes/recAyuda";


const ListRoutes = () => {

  return (
    <>
    <UserProvider>
      <Routes>

        <Route 
          path="/*" 
          element={<h1>not found</h1>} 
        />   
        <Route
          path="/recruiter/dashboard"
          element={<RecDashboard/>}
        ></Route>
        <Route
          path="/recruiter/ayuda"
          element={<RecAyuda/>}
        />
        <Route
          path='/profile'
          element={<Profile/>}
        ></Route>
        <Route
          path='/postulantes'
          element={<Apliccants />}
        ></Route>
        <Route 
          path="/login" 
          element={<Login />}>
        </Route>
        <Route
          path="/registro"
          element={<Register/>}
        ></Route>

      </Routes>
      </UserProvider>
    </>
  );
};

export default ListRoutes;
