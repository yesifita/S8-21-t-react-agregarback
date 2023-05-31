import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { MdOutlineAssignment, MdLogout } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { IoIosNotifications, IoMdHelpCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useUser } from '../../context/UserProvider';


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
        <div className="bg-primaryBlueDark text-white h-screen fixed py-4">



{/* -------------------------------- Menu Icon */}
            <div
                className={`flex transform duration-300 text-lg ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                onClick={toggleMenu}
            >
                <div className="px-4 flex">
                    {isMenuOpen ? (
                        <MdClose className="text-white text-3xl" />
                    ) : (
                        <GiHamburgerMenu className="text-white text-2xl" />
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
                        <Link to={"/recruiter/dashboard"} className="px-4 flex">
                            {isMenuOpen ? (
                                <HiHome className="text-white text-2xl" />
                            ) : (
                                <HiHome className="text-white text-2xl" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Dashboard</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/postulantes"} className="px-4 flex">
                            {isMenuOpen ? (
                                <MdOutlineAssignment className="text-white text-2xl" />
                            ) : (
                                <MdOutlineAssignment className="text-white text-2xl" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Tablero</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/"} className="px-4 flex">
                            {isMenuOpen ? (
                                <BsFillPersonFill className="text-white text-2xl" />
                            ) : (
                                <BsFillPersonFill className="text-white text-2xl" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Postulados</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/empleo"} className="px-4 flex">
                            {isMenuOpen ? (
                                <MdWork className="text-white text-2xl" />
                            ) : (
                                <MdWork className="text-white text-2xl" />
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
                        <Link to={"/profile"} className="px-4 flex">
                            {isMenuOpen ? (
                                <CgProfile className="text-white text-2xl" />
                            ) : (
                                <CgProfile className="text-white text-2xl" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Mi perfil</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/"} className="px-4 flex">
                            {isMenuOpen ? (
                                <IoIosNotifications className="text-white text-2xl" />
                            ) : (
                                <IoIosNotifications className="text-white text-2xl" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Notificaciones</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/recruiter/ayuda"} className="px-4 flex">
                            {isMenuOpen ? (
                                <IoMdHelpCircle className="text-white text-2xl" />
                            ) : (
                                <IoMdHelpCircle className="text-white text-2xl" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Ayuda</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/login"} className="px-4 flex" onClick={handleLogout}>
                            {isMenuOpen ? (
                                <MdLogout className="text-white text-2xl" />
                            ) : (
                                <MdLogout className="text-white text-2xl" />
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
