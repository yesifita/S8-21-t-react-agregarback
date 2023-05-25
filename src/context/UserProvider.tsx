import { createContext, useContext, useState, useEffect } from "react";
import { Props } from "../types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../service/firebase";

export const UserContext = createContext({});
export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

const UserProvider = (props: Props) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const suscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("no hay usuario registrado");
      } else {
        setUser(currentUser);
      }
    });
    return () => suscribed;
  }, []);

  // const navigate = useNavigate();

  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response);
  };
  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  };
  const loginGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };
  const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
  };
  return (
    <UserContext.Provider value={{ register, login, loginGoogle, logout,user }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
