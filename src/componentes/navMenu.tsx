import { useState } from 'react';
import { Link } from 'react-router-dom';
import iconMenu from '../assets/icons/menu.png'
import iconDashboard from '../assets/icons/home.png'
import iconTablero from '../assets/icons/assignment.png'
import iconPostulados from '../assets/icons/person.png'
import iconPublicarEmpleo from '../assets/icons/work.png'
import iconProfile from '../assets/icons/profile.png'
import iconNotificaciones from '../assets/icons/notifications.png'
import iconAyuda from '../assets/icons/help.png'
import iconSalir from '../assets/icons/tab_move.png'
import { useUser } from '../context/UserProvider';

export default function NavMenu() {
    const authUser=useUser();
        const handleLogout=()=>{
    authUser.logout()
    }
    const [isHovered, setIsHovered] = useState(false);

    const handleNavHover = () => {
        setIsHovered(true);
    };

    const handleNavLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
        className={`flex fixed justify-center h-screen bg-zinc-200 transition-all duration-300 ${
            isHovered ? 'w-64' : 'w-20'
        }`}
        onMouseEnter={handleNavHover}
        onMouseLeave={handleNavLeave}
        >
            <div className='flex flex-col justify-between py-8'>
                <div className='flex flex-col gap-y-3'>

                    <div className="flex items-center mb-12 mr-4">
                        <img src={iconMenu} alt="" />
                    </div>
                

                    <Link to={'/recruiter/dashboard'} className="flex items-center mb-4">
                        <div className="mr-4">
                            <img src={iconDashboard} alt="" />
                        </div>
                        {isHovered && (
                            <p>Dashboard</p>
                        )}
                    </Link>

                    <Link to={'/postulantes'} className="flex items-center mb-4">
                        <div className="mr-4">
                            <img src={iconTablero} alt="" />
                        </div>
                        {isHovered && (
                            <p>Tablero</p>
                        )}
                    </Link>
                    <Link to={'/'} className="flex items-center mb-4">
                        <div className="mr-4">
                            <img src={iconPostulados} alt="" />
                        </div>
                        {isHovered && (
                            <p>Postulados</p>
                        )}
                    </Link>
                    <Link to={'/'} className="flex items-center mb-4">
                        <div className="mr-4">
                            <img src={iconPublicarEmpleo} alt="" />
                        </div>
                        {isHovered && (
                            <p>Publicar empleo</p>
                        )}
                    </Link>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <Link to={'/profile'} className="flex items-center mb-4">
                        <div className="w-6 mr-4">
                            <img src={iconProfile} alt="" />
                        </div>
                        {isHovered && (
                            <p>Mi perfil</p>
                        )}
                    </Link>
                    <Link to={'/'} className="flex items-center mb-4">
                        <div className="mr-4">
                            <img src={iconNotificaciones} alt="" />
                        </div>
                        {isHovered && (
                            <p>Notificaciones</p>
                        )}
                    </Link>
                    <Link to={'/'} className="flex items-center mb-4">
                        <div className="mr-4">
                            <img src={iconAyuda} alt="" />
                        </div>
                        {isHovered && (
                            <p>Ayudar</p>
                        )}
                    </Link>
                    <Link to={'/login'} className="flex items-center mb-4">
                        <div className="mr-4">
                            <img src={iconSalir} alt="" />
                        </div>
                        {isHovered && (
                              <button onClick={handleLogout} className="">
                             salir
                            </button>
                           
                        )}
                    </Link>

                </div>
            </div>
        </div>
    );
}
