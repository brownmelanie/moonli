import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-black lg:pt-5 xl:pt-7">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:pb-8 lg:my-4">
                <a href="#">
                    <img className="w-40 pt-16 lg:pt-2 lg:ml-7" src="https://moonli.me/wp-content/uploads/2022/03/moonli-logo-white.svg" alt="Moonli logo" />
                </a>
                <ul className="py-5 grid grid-cols-2 auto-rows-[70px] mt-12 lg:flex lg:flex-row lg:mt-0 lg:ml-8 lg:justify-between lg:w-[550px] xl:ml-0 xl:mt-1">
                    <li><a className="text-white text-[18px] px-5 sm:px-16 lg:px-0" href="#networks">Networks</a></li>
                    <li><a className="text-white text-[18px] px-5 sm:px-16 lg:px-0" href="#selection">Selection</a></li>
                    <li><a className="text-white text-[18px] px-5 sm:px-16 lg:px-0" href="#reliability">Reliability</a></li>
                    <li><a className="text-white text-[18px] px-5 sm:px-16 lg:px-0" href="#givingBack">Giving Back</a></li>
                    <li><a className="text-white text-[18px] px-5 sm:px-16 lg:px-0" href="#getInTouch">Get in Touch</a></li>
                </ul>
                <Link to='/stakeNow' className='font-DMSans text-white border border-solid border-[#333333] rounded-3xl mb-14 py-3 px-20 md:text-xl lg:mb-0 lg:px-6 lg:mr-5'>Stake Now</Link>
            </div>

            <p className="font-DMSans text-[#5e5e5e] text-sm border border-solid border-[#333333] border-x-0 border-b-0 border-t text-center pb-16 pt-4 w-screen lg:pb-10 xl:text-base">Copyright © 2024. All rights reserved.</p>
        </footer>
    )
}

export default Footer