const Footer = () => {
    return (
        <footer className="bg-black flex flex-col items-center">
            <img className="w-40 pt-16" src="https://moonli.me/wp-content/uploads/2022/03/moonli-logo-white.svg" alt="Moonli logo" />
            <ul className="py-5">
                <li><a className="text-white" href="">Networks</a></li>
                <li><a className="text-white" href="">Selection</a></li>
                <li><a className="text-white" href="">Reliability</a></li>
                <li><a className="text-white" href="">Giving Back</a></li>
                <li><a className="text-white" href="">Get in Touch</a></li>
            </ul>
            <button>Stake Now</button>
            <p className="text-[#5e5e5e] text-sm border border-solid border-[#5e5e5e] border-x-0 border-b-0 border-t text-center pb-16 pt-4 w-screen">Copyright © 2024. All rights reserved.</p>
        </footer>
    )
}

export default Footer