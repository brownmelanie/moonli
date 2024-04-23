import './givingBack.css'

const GivingBack = () => {
    return (
        <div id="givingBack" className='lg:flex lg:items-center lg:justify-center lg:mt-44'>
            <div className="bg-[#b8ff65] rounded-3xl h-[500px] mx-3 mt-24 flex flex-col items-center
            lg:w-[480px] lg:h-[620px] lg:mt-0
            xl:w-[600px]">
                <h2 className="font-DMSans font-bold text-4xl text-center pt-16 lg:text-6xl xl:text-left xl:w-[430px] xl:pt-20">Giving back</h2>
                <p className="font-DMSans text-sm text-center tracking-tighter pt-7 px-5
                md:text-xl md:px-8 lg:text-left lg:mx-14 lg:text-2xl">We regularly donate a portion of our profits to various charities, NGOs, independent mass media and charitable campaigns</p>
                <img
                className="w-52 mt-10 xl:ml-44" 
                src="https://moonli.me/wp-content/uploads/2022/04/image-129.png"
                alt="Giving back" />
            </div>
            <div className="bg-[#f3f3f3] rounded-3xl h-[500px] mx-3 mt-3 lg:w-[480px] lg:h-[620px]
            xl:w-[600px]">
                <div className='banner-wrapper'> 
                    <div className='wrapper'>
                        <div className='images'>
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096004.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096000.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/logo.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096006.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096005.png" alt="" />
                        </div>
                        <div className='images'>
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096004.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096000.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/logo.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096006.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096005.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className='banner-wrapper-R'> 
                    <div className='wrapper-R'>
                        <div className='images-R'>
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096001.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096002.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096007.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096009.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096008.png" alt="" />
                        </div>
                        <div className='images-R'>
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096001.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096002.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096007.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096009.png" alt="" />
                            <img src="https://moonli.me/wp-content/uploads/2022/04/Group-48096008.png" alt="" />
                        </div>
                    </div>
                </div>
                <p className="font-DMSans text-sm px-5 leading-6
                md:text-xl md:px-8 lg:text-2xl lg:mx-6">So far, we have contributed to COVID-19 Emergency Relief Fund, The Africa Development Promise, Save the Children, IPC, Coin Center, Gitcoin, Impact Market, Water Wells for Africa, Rainforest Action Network, Amref Health Africa and many others. </p>
            </div>
        </div>
    )
}

export default GivingBack