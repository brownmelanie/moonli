import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="bg-[#f3f3f3] w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-white h-[80%] w-[80%] rounded-3xl">
                <img src="../../public/error.jpg" alt="Error image" className=" mb-5 lg:h-[20%]"/>
                <h1 className="text-6xl text-[#2a2728] font-bold font-DMSans mb-16">Oops!</h1>
                <p className="font-DMSans mb-8"> <span className="font-bold text-[#2a2728]">404</span> - Page not found</p>
                <button className="bg-[#f2c464] text-white rounded-2xl p-3 cursor-pointer hover:bg-[#e3d279]"><Link to='/'>Back To Home</Link></button>
            </div>
        </div>
        
    )
}

export default Error