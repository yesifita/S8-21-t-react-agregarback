import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { MdAssignment, MdLogout } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { IoIosNotifications, IoMdHelpCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useUser } from '../../context/UserProvider';
import { useLocation } from "react-router-dom";


const NavMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const authUser=useUser();
    const handleLogout=()=>{
        authUser.logout()
    }
    const location = useLocation();
    const dashboardRoute = location.pathname === "/recruiter/dashboard";


    return (
        <div className="fixed h-screen py-4 text-white bg-primaryBlueDark">


{/* -------------------------------- Menu Icon */}
            <div
                className={`flex transform duration-300 text-lg cursor-pointer ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                onClick={toggleMenu}
            >
                <div className="flex px-4">
                    {isMenuOpen ? (
                        <MdClose className="text-3xl text-white" />
                    ) : (
                        <GiHamburgerMenu className="mt-1 text-2xl text-white" />
                    )}
                    {isMenuOpen && <span className="ml-2 text-white"></span>}
                </div>
            </div>


            <div className="flex flex-col justify-between h-full pb-5">
{/* -------------------------------- First group Icon */}
                <div className="mt-16">




                    
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/recruiter/dashboard"} className="flex px-4">
                            {isMenuOpen ? (
                                <HiHome className="text-2xl text-white" />
                            ) : (
                                <HiHome className="text-2xl text-white" />
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
                                <MdAssignment className="text-2xl text-white" />
                            ) : (
                                <MdAssignment className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Tablero</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/postulados"} className="flex px-4">
                            {isMenuOpen ? (
                                <BsFillPersonFill className="text-2xl text-white" />
                            ) : (
                                <BsFillPersonFill className="text-2xl text-white" />
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
                                <MdWork className="text-2xl text-white" />
                            ) : (
                                <MdWork className="text-2xl text-white" />
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
                                <CgProfile className="text-2xl text-white" />
                            ) : (
                                <CgProfile className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Mi perfil</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/notifcaciones"} className="flex px-4">
                            {isMenuOpen ? (
                                <IoIosNotifications className="text-2xl text-white" />
                            ) : (
                                <IoIosNotifications className="text-2xl text-white" />
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
                                <IoMdHelpCircle className="text-2xl text-white" />
                            ) : (
                                <IoMdHelpCircle className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Ayuda</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/"} className="flex px-4" onClick={handleLogout}>
                            {isMenuOpen ? (
                                <MdLogout className="text-2xl text-white" />
                            ) : (
                                <MdLogout className="text-2xl text-white" />
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
