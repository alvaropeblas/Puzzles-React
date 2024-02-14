import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import Settings from '../Settings'

const NavbarNotLogged = () => {
    return (
        <>
            <div className='flex lg:flex-col flex-row items-center gap-8 text-white lg:h-[90vh] w-[90vw] py-[5em]'>
                <Link to='/'><img src={logo} alt="" className='lg:h-[100px] h-[100px]' /></Link>
                <Link to='/menu'><div className='w-[5vw] py-[0.2em] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Menu</div></Link>
                <div className='w-[5vw]  py-[0.2em] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Contacto</div>
                <Link to='/booking'><div className='w-[5vw] py-[0.2em] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Calendario</div></Link>
            </div>
            <Settings />
        </>
    )
}

export default NavbarNotLogged