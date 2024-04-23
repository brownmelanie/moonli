import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavStake = () => {

    let [open, setOpen] = useState(false);

    const toggleButton = () => {
        setOpen(!open)
    }

    return (
        <nav className= 'w-screen h-20 bg-white lg:h-32'>
            <div className='pt-6 w-screen flex justify-between absolute z-20'>
                <Link to='/'>
                    <img
                    className='pl-3 w-32 
                    md:w-40
                    lg:ml-4 lg:mt-5 lg:w-48' 
                    src="https://moonli.me/wp-content/uploads/2022/03/moonli-logo-black.svg" 
                    alt="Moonli logo"/>
                </Link>
                <button onClick={toggleButton} className='pr-4 lg:hidden xl:hidden 2xl:hidden'>
                    {open ? (
                        <img className='w-7 h-auto cursor-pointer' src="https://img.icons8.com/material-sharp/24/multiply.png" alt="multiply"/>
                        ) : (
                        <img className='w-7 h-auto cursor-pointer' src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6"/>
                    )}
                </button>

                <ul className='hidden sm:hidden md:hidden 
                lg:flex lg:items-center lg:justify-around lg:w-screen lg:h-20 lg:ml-28 xl:ml-44'>
                    <li>
                        <Link to='/' className='text-black font-DMSans'>Networks</Link>
                    </li>
                    <li>
                        <Link to='/' className='text-black font-DMSans'>Selection</Link>
                    </li>
                    <li>
                        <Link to='/' className='text-black font-DMSans'>Reliability</Link>
                    </li>
                    <li>
                        <Link to='/' className='text-black font-DMSans'>Giving Back</Link>
                    </li>
                    <li>
                        <Link to='/' className='text-black font-DMSans'>Get in Touch</Link>
                    </li>
                    <li>
                        <button className='font-DMSans bg-white rounded-3xl border border-solid w-28 h-12 text-black mt-14 mb-14 ml-10 mr-5 xl:ml-40'>Stake Now</button>
                    </li>
                </ul>
            </div>

            <ul className={`bg-[#b8ff65] absolute z-10 h-screen w-screen text-center top-[-100%] left-1/2 transform -translate-x-1/2 duration-500 ease-in flex flex-col justify-evenly items-center
            lg:hidden xl:hidden 2xl:hidden
            ${open ? 'pt-24 top-[0%]' : '-top-[1000%]'}`}>
                <li>
                    <Link to='/' className='text-black md:text-xl'>Networks</Link>
                </li>
                <li>
                    <Link to='/' className='text-black md:text-xl'>Selection</Link>
                </li>
                <li>
                    <Link to='/' className='text-black md:text-xl'>Reliability</Link>
                </li>
                <li>
                    <Link to='/' className='text-black md:text-xl'>Giving Back</Link>
                </li>
                <li>
                    <Link to='/' className='text-black md:text-xl'>Get in Touch</Link>
                </li>
                <li>
                    <Link to='/stakeNow' className='bg-black rounded-3xl text-white mt-20 mb-14 py-3 px-20 md:text-xl'>Stake Now</Link>
                </li>
            </ul>
        </nav>        
    )
}

export default NavStake