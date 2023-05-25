import { Link } from 'react-router-dom'

export default function NavLogo() {

  return (
    <nav>
    <Link to={'/recruiter/dashboard'} className="block text-2xl font-bold p-4">Reclutando</Link>
    <hr />
    </nav>
  )
}
