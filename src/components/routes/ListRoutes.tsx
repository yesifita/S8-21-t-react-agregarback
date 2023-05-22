import { Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import Register from "../login/Register";
import Dashboard from "../dashboard/Dashboard";
import ProtectedRout from "../protectedRout/ProtectedRout";
import UserProvider from "../../context/UserProvider";

const ListRoutes = () => {

  return (
    <>
    <UserProvider>
      <Routes>
        <Route path="/*" element={<h1>not found</h1>} />
        <Route
          path="/"
          element={
            <ProtectedRout>
              <Dashboard />
            </ProtectedRout>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
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
