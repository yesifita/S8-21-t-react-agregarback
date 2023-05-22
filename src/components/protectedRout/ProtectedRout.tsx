import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../context/UserProvider"
import {Props, UserContextType} from '../../types'

const ProtectedRout = ({children}:Props) => {
  const{user}= useContext(UserContext) as UserContextType;
  
if(!user){
    return <Navigate to='/registro'/>
}
return children;
}

export default ProtectedRout