import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserProvider"
import {Props, UserContextType} from '../../types'

const ProtectedPath = ({children}:Props) => {
  const authUser = useUser();
  const user = authUser.currentUser;
  const navigate = useNavigate()
if(!user){
    return navigate('/login')
}
return children;
}

export default ProtectedPath