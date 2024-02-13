import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='bg-TERCIARY h-screen w-screen flex justify-around items-center'>
            <div>
                <p>Menu</p>
                <Link to='/booking'>
                    <Button type="primary" className='bg-SECONDARY'>
                        Reservar
                    </Button>
                </Link>
            </div>
            <div>
                <p>Menu</p>
                <Link to='/booking'>
                    <Button type="primary" className='bg-SECONDARY'>
                        Reservar
                    </Button>
                </Link>
            </div>
            <div>
                <p>Menu</p>
                <Link to='/booking'>
                    <Button type="primary" className='bg-SECONDARY'>
                        Reservar
                    </Button>
                </Link>
            </div>

        </div>
    )
}

export default Menu