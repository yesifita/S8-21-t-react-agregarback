import { Routes, Route } from "react-router-dom";
import Login from "../login/Login";

const ListRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<h1>not found</h1>} />
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default ListRoutes;
