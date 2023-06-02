import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from '../../context/UserProvider';
import cerrarsesion from '../../assets/icons/cerrar_sesion_nav.svg'
import tablero from '../../assets/icons/tablero_nav.svg'
import preguntas from '../../assets/icons/preguntas_nav.svg'
import menu from '../../assets/icons/menu_dasboard.svg'
import perfil from '../../assets/icons/icono_perfil_nav.svg'
import home from '../../assets/icons/home_icon_nav.svg'
import notificacion from '../../assets/icons/notificacion_nav.svg'
import empleo from '../../assets/icons/empleo_nav.svg'


const NavMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const authUser=useUser();
    const handleLogout=()=>{
        authUser.logout()
    }

    return (
        <div className="fixed h-screen py-4 text-white bg-primaryBlueDark">



{/* -------------------------------- Menu Icon */}
            <div
                className={`flex transform duration-300 text-lg ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                onClick={toggleMenu}
            >
                <div className="flex px-4">
                    {isMenuOpen ? (
                        <img src={menu} className="text-3xl text-white" />
                    ) : (
                        < img src={menu} className="text-2xl text-white" />
                    )}
                    {isMenuOpen && <span className="ml-2 text-white"></span>}
                </div>
            </div>


            <div className="flex flex-col justify-between h-full">
{/* -------------------------------- First group Icon */}
                <div className="mt-16">


                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/recruiter/dashboard"} className="flex px-4">
                            {isMenuOpen ? (
                                <img src={home}  className="text-2xl text-white" />
                            ) : (
                                <img src={home}  className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Dashboard</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/postulantes"} className="flex px-4">
                            {isMenuOpen ? (
                                <img src={tablero} className="text-2xl text-white" />
                            ) : (
                                <img src={tablero} className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Tablero</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/"} className="flex px-4">
                            {isMenuOpen ? (
                                <img src={perfil} className="text-2xl text-white" />
                            ) : (
                                <img src={perfil} className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Postulados</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/jobs"} className="flex px-4">
                            {isMenuOpen ? (
                                <img src={empleo} className="text-2xl text-white" />
                            ) : (
                                <img src={empleo} className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Publicar empleo</span>}
                        </Link>
                    </div>


                </div>

{/* -------------------------------- Second group Icon */}
                <div className="mt-16">



                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/profile"} className="flex px-4">
                            {isMenuOpen ? (
                                <img src={perfil
                                } className="text-2xl text-white" />
                            ) : (
                                <img src={perfil
                                } className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Mi perfil</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/"} className="flex px-4">
                            {isMenuOpen ? (
                                <img src={notificacion
                                } className="text-2xl text-white" />
                            ) : (
                                <img src={notificacion
                                } className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Notificaciones</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/recruiter/ayuda"} className="flex px-4">
                            {isMenuOpen ? (
                                <img src={preguntas} className="text-2xl text-white" />
                            ) : (
                                <img src={preguntas} className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Ayuda</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/login"} className="flex px-4" onClick={handleLogout}>
                            {isMenuOpen ? (
                                <img src={cerrarsesion} className="text-2xl text-white fill-white" />
                            ) : (
                                <img src={cerrarsesion} className="text-2xl text-white fill-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Salir</span>}
                        </Link>
                    </div>
            
                </div>
            </div>
        </div>
    );
};

export default NavMenu;
