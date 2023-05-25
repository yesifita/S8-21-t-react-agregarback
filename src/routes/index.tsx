import { createBrowserRouter } from "react-router-dom";
import { Apliccants } from "../componentes/Apliccants/Apliccants";
import Profile from "../componentes/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: '/profile',
    element: <Profile/>
  },
  {path: '/postulantes',
  element: <Apliccants />
}
]);
