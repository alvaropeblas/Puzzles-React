import { useEffect, useState } from 'react'
import { Button, DatePicker } from 'antd'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 800);
        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <>
            <div className='bg-TERCIARY h-screen w-screen'>
                <div className='flex flex-col items-center justify-center h-screen'>
                    <div className='flex items-center mb-4'>
                        <h1 className={`text-4xl font-lilita transition-transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-2em] opacity-0'}`}>W<label className='text-BUTTON_COLOR'>e</label>lcom<label className='text-BUTTON_COLOR'>e</label> to </h1>
                        <div>
                            <img src={logo} alt="" className='mx-4 opacity-100' />
                        </div>
                        <h1 className={`text-4xl font-lilita transition-transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-2em] opacity-0'}`}>R<label className='text-BUTTON_COLOR'>e</label>st<label className='text-BUTTON_COLOR'>a</label>ur<label className='text-BUTTON_COLOR'>a</label>nt</h1>
                    </div>

                    <Link to='/booking'>
                        <Button type="primary" className='bg-SECONDARY'>
                            Hacer una reserva
                        </Button>
                    </Link>
                    <hr />
                </div>
            </div >
        </>
    )
}

export default Home
