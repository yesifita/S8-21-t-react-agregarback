import { Link } from 'react-router-dom'
import { useUser } from '../../context/UserProvider';

export default function NavLogo() {
  const authUser=useUser();
  const {displayName}= authUser.user;
  return (
    <nav>
    <Link to={'/recruiter/dashboard'} className="block p-4 text-2xl font-bold">Reclutando</Link>
    {displayName && <h1 className="text-2xl font-bold text-black pl-28">Hola {displayName}!</h1>}
    <hr />
    </nav>
  )
}
