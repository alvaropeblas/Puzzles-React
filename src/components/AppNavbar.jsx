import { useSelector } from "react-redux";
import NavbarNotLogged from "./Navbars/NavbarNotLogged";
import NavbarLogged from "./Navbars/NavbarLogged";

const AppNavbar = () => {
    const { user, token } = useSelector((state) => state.user);
    return (
        <nav className='flex lg:flex-col flex-row items-center justify-around lg:w-[8vw] lg:h-[100vh] w-screen h-[10vh] bg-S_COLOR fixed top-0 left-0 rounded-r-md shadow-2xl '>
            {token ? <NavbarLogged /> : <NavbarNotLogged />}
        </nav>
    );
}

export default AppNavbar;