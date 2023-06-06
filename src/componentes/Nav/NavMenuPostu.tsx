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
        <div className="bg-primaryBlueDark text-white h-screen fixed py-4">


{/* -------------------------------- Menu Icon */}
            <div
                className={`flex transform duration-300 text-lg cursor-pointer ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                onClick={toggleMenu}
            >
                <div className="px-4 flex">
                    {isMenuOpen ? (
                        <MdClose className="text-white text-3xl" />
                    ) : (
                        <GiHamburgerMenu className="text-white text-2xl mt-1" />
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
                        <Link to={"/postulate/dashboard"} className="px-4 flex">
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
                        <Link to={"/empleo"} className="px-4 flex">
                            {isMenuOpen ? (
                                <MdOutlineContentPasteSearch className="text-white text-2xl" />
                            ) : (
                                <MdOutlineContentPasteSearch className="text-white text-2xl" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Buscar empleo</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/postulantes"} className="px-4 flex">
                            {isMenuOpen ? (
                                <BsFillClipboard2CheckFill className="text-white text-2xl" />
                            ) : (
                                <BsFillClipboard2CheckFill className="text-white text-2xl" />
                            )}
                            {isMenuOpen && <span className="ml-2 text-white">Postulaciones</span>}
                        </Link>
                    </div>
                    <div
                        className={`flex transform duration-300 text-lg mb-6 ${isMenuOpen ? "justify-start" : "justify-center"} items-center ${isMenuOpen ? "w-72" : "w-16"}`}
                        onClick={toggleMenu}
                    >
                        <Link to={"/empleo"} className="px-4 flex">
                            {isMenuOpen ? (
                                <BsClipboard2PlusFill className="text-white text-2xl" />
                            ) : (
                                <BsClipboard2PlusFill className="text-white text-2xl" />
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
                        <Link to={""} className="px-4 flex">
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
                        <Link to={"/postulate/ayuda"} className="px-4 flex">
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

export default NavMenuPostu;
