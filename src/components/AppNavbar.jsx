import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Settings from './Settings';
import logo from '../assets/Logo.png';
import LogOut from "./LogOut";

const AppNavbar = () => {
    const user = useSelector((state) => state.user.user);
    console.log(user);
    const loggedInNavbar = (
        <>
            <div className='flex flex-col items-center gap-8 text-white h-[90vh] py-[2em]'>
                <Link to='/'><img src={logo} alt="" /></Link>
                <Link to='/menu'><div className='w-[5vw] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Menu</div></Link>
                <div className='w-[5vw] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Contacto</div>
                <Link to='/booking'><div className='w-[5vw] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Calendario</div></Link>
            </div>
            <Settings />
        </>
    );

    const loggedOutNavbar = (
        <>
            <div className='flex flex-col items-center gap-8 text-white h-[90vh] py-[2em]'>
                <Link to='/'><img src={logo} alt="" /></Link>
                <Link to='/menu'><div className='w-[5vw] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Menu</div></Link>
                <div className='w-[5vw] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Contacto</div>
                <Link to='/booking'><div className='w-[5vw] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Calendario</div></Link>
                <Link to='/reservas'><div className='w-[5vw] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Reservas</div></Link>
            </div>
            <LogOut />
        </>
    );

    return (
        <nav className='flex flex-col items-center justify-around w-[6vw] h-[100vh] bg-SECONDARY fixed top-0 left-0 rounded-r-md shadow-2xl '>
            {!user ? loggedInNavbar : loggedOutNavbar}
        </nav>
    );
}

export default AppNavbar;