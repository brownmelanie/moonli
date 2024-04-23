import { Link } from "react-router-dom"

const FooterStake = () => {
    return (
        <footer className="bg-black lg:pt-5 xl:pt-7">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:pb-8 lg:my-4">
                <Link to='/'>
                    <img className="w-40 pt-16 lg:pt-2 lg:ml-7" src="https://moonli.me/wp-content/uploads/2022/03/moonli-logo-white.svg" alt="Moonli logo" />
                </Link>
                <ul className="py-5 grid grid-cols-2 auto-rows-[70px] mt-12 lg:flex lg:flex-row lg:mt-0 lg:ml-8 lg:justify-between lg:w-[550px] xl:ml-0 xl:mt-1">
                    <li>
                        <Link to='/' className="text-white text-[18px] px-5 sm:px-16 lg:px-0">Networks</Link>
                    </li>
                    <li>
                        <Link to='/' className="text-white text-[18px] px-5 sm:px-16 lg:px-0">Selection</Link>
                    </li>
                    <li>
                        <Link to='/' className="text-white text-[18px] px-5 sm:px-16 lg:px-0">Reliability</Link>
                    </li>
                    <li>
                        <Link to='/' className="text-white text-[18px] px-5 sm:px-16 lg:px-0">Giving Back</Link>
                    </li>
                    <li>
                        <Link to='/' className="text-white text-[18px] px-5 sm:px-16 lg:px-0">Get in Touch</Link>
                    </li>
                </ul>
                <Link to='/stakeNow' className='font-DMSans text-white border border-solid border-[#333333] rounded-3xl mb-14 py-3 px-20 md:text-xl lg:px-6 lg:mb-0 lg:mr-5'>Stake Now</Link>
            </div>

            <p className="font-DMSans text-[#5e5e5e] text-sm border border-solid border-[#333333] border-x-0 border-b-0 border-t text-center pb-16 pt-4 w-screen lg:pb-10 xl:text-base">Copyright © 2024. All rights reserved.</p>
        </footer>
    )
}

export default FooterStake