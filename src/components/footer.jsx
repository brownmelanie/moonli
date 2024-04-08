const Footer = () => {
    return (
        <footer className="bg-black flex flex-col items-center">
            <a href="#">
                <img className="w-40 pt-16" src="https://moonli.me/wp-content/uploads/2022/03/moonli-logo-white.svg" alt="Moonli logo" />
            </a>
            <ul className="py-5 grid grid-cols-2 auto-rows-[70px] mt-12">
                <li><a className="text-white text-[18px] px-5" href="#networks">Networks</a></li>
                <li><a className="text-white text-[18px] px-5" href="#selection">Selection</a></li>
                <li><a className="text-white text-[18px] px-5" href="#reliability">Reliability</a></li>
                <li><a className="text-white text-[18px] px-5" href="#givingBack">Giving Back</a></li>
                <li><a className="text-white text-[18px] px-5" href="#getInTouch">Get in Touch</a></li>
            </ul>
            <button className=" font-DMSans text-white border rounded-3xl border-[#333333] px-28 py-3 mb-20">Stake Now</button>
            <p className="font-DMSans text-[#5e5e5e] text-sm border border-solid border-[#333333] border-x-0 border-b-0 border-t text-center pb-16 pt-4 w-screen">Copyright © 2024. All rights reserved.</p>
        </footer>
    )
}

export default Footer