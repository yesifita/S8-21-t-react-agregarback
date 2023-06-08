import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { MdLogout, MdOutlineContentPasteSearch } from "react-icons/md";
import { BsClipboard2PlusFill, BsFillClipboard2CheckFill } from "react-icons/bs";
import { IoIosNotifications, IoMdHelpCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useUser } from '../../context/UserProvider';
import { useLocation } from "react-router-dom";


const NavMenuPostu = () => {
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
                        <Link to={"/postulate/dashboard"} className="flex px-4">
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
                        <Link to={"/empleo"} className="flex px-4">
                            {isMenuOpen ? (
                                <MdOutlineContentPasteSearch className="text-2xl text-white" />
                            ) : (
                                <MdOutlineContentPasteSearch className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Buscar empleo</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/postulantes"} className="flex px-4">
                            {isMenuOpen ? (
                                <BsFillClipboard2CheckFill className="text-2xl text-white" />
                            ) : (
                                <BsFillClipboard2CheckFill className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Postulaciones</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/postulate/mejorar-cv"} className="px-4 flex">

                            {isMenuOpen ? (
                                <BsClipboard2PlusFill className="text-2xl text-white" />
                            ) : (
                                <BsClipboard2PlusFill className="text-2xl text-white" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Mejora tu CV</span>}
                        </Link>
                    </div>


                </div>

{/* -------------------------------- Second group Icon */}
                <div className="mt-16">
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/postulante/perfil"} className="flex px-4">
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
                        <Link to={""} className="flex px-4">
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
                        <Link to={"/postulate/ayuda"} className="flex px-4">
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

export default NavMenuPostu;
