import { useContext, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import { FormState, UserContextType } from "../../types";
import PopUpConfirm from "./PopUpConfirm";

const Register = () => {
  const { user, setUser } = useContext(UserContext) as UserContextType;
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    id: Date.now(),
    usuario: "",
    password: "",
    rol: "",
  });
  const [visible, setVisible] = useState(false);

  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   setUser(true);
  //   navigate("/");
  // };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    setUser([...user, inputValues]);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h2>{user ? "en linea" : "offline"}</h2>
      <div
        className="flex items-center justify-center w-full h-screen bg-slate-400"
        id="container"
      >
        <div
          id="content"
          className="flex flex-col w-4/6 bg-orange-100 h-3/6 justify-content-center rounded-xl"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center pt-10 "
          >
            <input
              onChange={handleChange}
              value={inputValues.usuario}
              type="email"
              name="usuario"
              placeholder="Correo Electronico"
              className="mb-4"
            ></input>
            <input
              onChange={handleChange}
              value={inputValues.password}
              type="password"
              name="password"
              placeholder="contraseña"
            ></input>

            <select
              name="rol"
              defaultValue={inputValues.rol}
              onChange={handleChange}
              className="w-32 m-3 text-center border-2 border-solid border-slate-800 rounded-xl"
            >
              <option id="" value="">
                Elige tu rol
              </option>

              <option id="reclutador" value="reclutador">
                Reclutador
              </option>
              <option id="postulante" value="postulante">
                Postulante
              </option>
            </select>

            <button
              type="submit"
              className="w-40 h-8 mb-2 bg-white border-solid border-slate-800 rounded-"
              onClick={() => setVisible(true)}
            >
              Aceptar
            </button>
          </form>
        </div>
        {visible ? <PopUpConfirm /> : null}
      </div>
    </>
  );
};

export default Register;
