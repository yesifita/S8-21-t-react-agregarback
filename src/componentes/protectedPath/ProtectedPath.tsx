import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserProvider"
import {Props} from '../../types'

const ProtectedPath = ({user,children}) => {
  


  const navigate = useNavigate()
  
if(!user){
    return navigate('/login')
}
return children;
}

export default ProtectedPath