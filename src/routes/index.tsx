import { createBrowserRouter } from "react-router-dom";
import { Apliccants } from "../componentes/Apliccants/Apliccants";
import RecDashboard from "./recDashboard";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Componente Home</div>
  },
  {
    path: '/recruiter/dashboard',
    element: <RecDashboard/>
  },
  {
    path: '/postulantes',
    element: <Apliccants />
  },

]);
