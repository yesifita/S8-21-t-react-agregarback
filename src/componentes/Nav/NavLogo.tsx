import { Link } from 'react-router-dom'


export default function NavLogo() {

  return (
    <nav>
    <Link to={'/recruiter/dashboard'} className="block p-4 text-2xl font-bold">Reclutando</Link>
   
    <hr />
    </nav>
  )
}
