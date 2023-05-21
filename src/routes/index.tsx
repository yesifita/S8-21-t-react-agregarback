import { createBrowserRouter } from "react-router-dom";
import { Apliccants } from "../componentes/Apliccants/Apliccants";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Componente Home</div>
  },
  {path: '/postulantes',
  element: <Apliccants />
}
]);
