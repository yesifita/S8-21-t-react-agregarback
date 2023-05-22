import { createContext, useState } from "react";
import { User,Props} from "../types";

export const UserContext = createContext({});

// const INITIAL_STATE=[
// {
//  usuario:'yesif_4@hotmail.com',
//  password:1234,
//   rol:'reclutador'
// },
// {
//   usuario:'yesifita@gmail.com',
//   password:7894,
//   rol:'postulante'
// }
// ]

const UserProvider = (props : Props) => {
  const [user, setUser] = useState<Array<User>>([]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}       
    </UserContext.Provider>
  );
};

export default UserProvider;
