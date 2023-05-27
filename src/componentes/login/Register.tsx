import { useState } from "react";
import { FormState} from "../../types";
import PopUpConfirm from "./PopUpConfirm";
import { useUser } from "../../context/UserProvider";


const Register = () => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
     email: "",
    password: "",
    });
  const [visible, setVisible] = useState(false);

  const authUser=useUser()

  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   setUser(true);
  //   navigate("/");
  // };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
authUser.register(inputValues.email,inputValues.password)
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
      {/* <h2>{user ? "en linea" : "offline"}</h2> */}
          <div
        className="flex items-center justify-center w-full h-screen bg-gradiente1/75 bg-gradient-to-b from-slate-400 to-gradiente1/10"
        id="container"
      >
        <div
          id="content"
          className="flex flex-col w-4/6 bg-white h-3/6 justify-content-center rounded-xl bg-gradient"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center pt-10 "
          >
            <input
              onChange={handleChange}
              value={inputValues.email}
              type="email"
              name="email"
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

            <button
              type="submit"
              className="w-40 h-8 mb-2 font-semibold text-white border-solid bg-boton border-slate-800 rounded-xl"
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
