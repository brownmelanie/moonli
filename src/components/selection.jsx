import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Selection = () => {
    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (
        <div id="selection">
            <div data-aos="fade-up">
                <h2 className="font-bold font-DMSans text-center text-[27px] mx-5 leading-8 tracking-tight my-24
                sm:mx-36
                lg:mt-64 lg:mb-44 lg:text-5xl lg:tracking-normal lg:leading-none lg:mx-28
                xl:mx-48">We pick the networks we <span className="bg-[#b8ff65] rounded-2xl px-2">support</span> meticulously, jump in early and know them inside-out</h2>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:mx-24 xl:mx-52">
                <div className="bg-black rounded-3xl h-64 mx-4 flex flex-col items-end
                lg:h-72 lg:w-96 lg:inline"
                data-aos="fade-up">
                    <h4 className="text-white font-DMSans text-xl pt-12 pl-6 pr-28 leading-6 font-semibold
                    md:pr-48
                    lg:px-9 lg:text-2xl lg:font-normal lg:tracking-tight">We were in top 30 of Celo’s Great Stake Off competition</h4>
                    <img className="h-24 pr-6
                    sm:pl-72
                    lg:pl-48 lg:h-32" src="https://moonli.me/wp-content/uploads/2022/04/image-125.png" alt="Top 30" />
                </div>
                <div className="bg-[#b8ff65] rounded-3xl h-[285px] mx-4 mt-3 flex flex-col items-end
                lg:w-96 lg:inline lg:mt-16 lg:h-[300px]"
                data-aos="fade-up">
                    <h4 className="font-DMSans text-xl pt-12 pl-6 pr-28 leading-6 font-semibold
                    lg:text-2xl lg:font-normal lg:tracking-tight lg:px-9">We are a member of the first cohort of Mina Protocol’s Genesis Program</h4>
                    <img className="h-24 pr-6 lg:h-32 lg:pr-0 lg:pl-48" src="https://moonli.me/wp-content/uploads/2022/04/image-124.png" alt="" />
                </div>
                <div className="bg-[#f3f3f3] rounded-3xl h-[280px] mx-4 mt-3 flex flex-col items-end
                lg:w-96 lg:inline lg:h-[300px]"
                data-aos="fade-up">
                    <h4 className="font-DMSans text-xl pt-12 pl-6 pr-28 leading-6 font-semibold
                    lg:text-2xl lg:font-normal lg:tracking-tight lg:px-9">We survived five testnets on Regen Network that lasted for almost two years</h4>
                    <img className="h-24 pr-6 lg:h-32 lg:pr-0 lg:pl-48" src="https://moonli.me/wp-content/uploads/2022/04/image-123.png" alt="" />
                </div>
                <div className="px-12 py-14 lg:w-96 lg:inline"
                data-aos="fade-up">
                    <p className="font-DMSans text-[28px] font-bold leading-9 tracking-tighter pt-5 border border-solid border-t border-x-0 border-b-0
                    lg:text-4xl lg:tracking-tight lg:mt-16
                    xl:text-[40px]">...if that doesn't prove that we care, then <span className="bg-[#b8ff65] rounded-2xl px-2">what?</span></p>
                    <img className="pt-12 lg:hidden xl:hidden" src="https://moonli.me/wp-content/uploads/2022/04/image-122.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Selection