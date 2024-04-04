import React, { useState } from 'react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    let [open, setOpen] = useState(false);

    const toggleButton = () => {
        setOpen(!open)
    }
    

    return (
        <nav className= 'w-screen h-20 bg-transparent'>
            <div className='pt-6 w-screen flex justify-between absolute z-20'>
                <img
                    className='pl-3 w-32' 
                    src="https://moonli.me/wp-content/uploads/2022/03/moonli-logo-black.svg" 
                    alt="Moonli logo"/>

                <button onClick={toggleButton} className='pr-4'>
                    {open ? (
                        <XMarkIcon className='w-7 h-auto cursor-pointer'/>
                        ) : (
                        <Bars2Icon className='w-7 h-auto cursor-pointer'/>
                    )}
                </button>
            </div>

            <ul className={`bg-[#b8ff65] absolute z-10 h-screen w-screen text-center top-[-100%] left-1/2 transform -translate-x-1/2 duration-500 ease-in flex flex-col justify-evenly items-center ${open ? 'pt-24 top-[0%]' : '-top-[100%]'}`}>
                <li >
                    <a href="#" className="text-black">Networks</a>
                </li>
                <li>
                    <a href="#" className="text-black">Selection</a>
                </li>
                <li>
                    <a href="#" className="text-black">Reliability</a>
                </li>
                <li>
                    <a href="#" className="text-black">Giving Back</a>
                </li>
                <li>
                    <a href="#" className="text-black">Get in Touch</a>
                </li>
                <button className='bg-black rounded-3xl w-64 h-12 text-white mt-20 mb-14'>Stake Now</button>
            </ul>
        </nav>        
    )
}

export default Navbar