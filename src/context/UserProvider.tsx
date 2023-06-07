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
import { useNavigate } from "react-router-dom";

 ''

export const UserContext = createContext({});
export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

const UserProvider = (props: Props) => {
  const [user, setUser] = useState('');
  
const navigate=useNavigate()
  
  useEffect(() => {
    const suscribed = onAuthStateChanged(auth, (currentUser) => {
     console.log(currentUser)
      if (currentUser) {
        setUser(currentUser);      
      } 
    });
    return suscribed;
  }, []);



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
