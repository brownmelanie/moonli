const Networks = () => {
    return (
        <div id="networks" className="h-[750px] mx-4 mt-32 rounded-3xl bg-[#f3f3f3] lg:mx-20 xl:h-[750px] xl:mt-40">
            <h2 className="px-5 font-DMSans font-extrabold text-4xl text-center pt-16 xl:text-5xl xl:pt-20">Networks</h2>
            <p className="px-4 text-center font-DMSans text-sm mt-7 mb-10 md:mx-6 lg:mx-20 lg:text-base xl:text-xl">We pride ourselves as a boutique validator supporting networks that create real value. We have been in the staking business since 2019 and run validators on Ethereum-, Substrate- and Tendermint-based chains.</p>
            <div className="lg:flex lg:flex-wrap lg:justify-center lg:mt-16">
                <div className="bg-white border border-solid border-gray-200 rounded-3xl h-32 mx-6 mt-5 flex flex-row items-center justify-between lg:w-[280px] lg:mt-3">
                    <h2 className="font-DMSans font-bold text-[27px] pl-7">Celestia</h2>
                    <img className="pr-7" src="https://moonli.me/wp-content/uploads/2023/10/celestia-color-1.svg" alt="Celestia Logo" />
                </div>
                <div className="bg-white border border-solid border-gray-200 rounded-3xl h-32 mx-6 mt-3 flex flex-row items-center justify-between lg:w-[280px]">
                    <h2 className="font-DMSans font-bold text-[27px] pl-7">Celo</h2>
                    <img className="pr-7" src="https://moonli.me/wp-content/uploads/2022/03/logo1.svg" alt="Celo Logo" />
                </div>
                <div className="bg-white border border-solid border-gray-200 rounded-3xl h-32 mx-6 mt-3 flex flex-row items-center justify-between lg:w-[280px]">
                    <h2 className="font-DMSans font-bold text-[27px] pl-7 tracking-tight">The Graph</h2>
                    <img className="pr-7" src="https://moonli.me/wp-content/uploads/2022/03/logo4.svg" alt="The Graph Logo" />
                </div>


                <div className="hidden sm:hidden bg-white border border-solid border-gray-200 rounded-3xl h-32 mx-6 mt-3 lg:flex flex-row items-center justify-between lg:w-[280px]">
                    <h2 className="font-DMSans font-bold text-[27px] pl-7 tracking-tight">Regen</h2>
                    <img className="pr-7" src="https://moonli.me/wp-content/uploads/2022/03/logo11.svg" alt="Regen Logo" />
                </div>
                <div className="hidden sm:hidden bg-white border border-solid border-gray-200 rounded-3xl h-32 mx-6 mt-3 lg:flex flex-row items-center justify-between lg:w-[280px]">
                    <h2 className="font-DMSans font-bold text-[27px] pl-7 tracking-tight">Oasis</h2>
                    <img className="pr-7" src="https://moonli.me/wp-content/uploads/2022/03/logo8.svg" alt="Oasis Logo" />
                </div>
                <div className="hidden sm:hidden bg-white border border-solid border-gray-200 rounded-3xl h-32 mx-6 mt-3 lg:flex flex-row items-center justify-between lg:w-[280px]">
                    <h2 className="font-DMSans font-bold text-[27px] pl-7 tracking-tight">Mina</h2>
                    <img className="pr-7" src="https://moonli.me/wp-content/uploads/2022/03/logo6.svg" alt="Mina Logo" />
                </div>
                <div className="hidden sm:hidden bg-white border border-solid border-gray-200 rounded-3xl h-32 mx-6 mt-3 lg:flex flex-row items-center justify-between lg:w-[280px]">
                    <h2 className="font-DMSans font-bold text-[27px] pl-7 tracking-tight">Centrifuge</h2>
                    <img className="pr-7" src="https://moonli.me/wp-content/uploads/2022/03/logo7.svg" alt="Centrifuge Logo" />
                </div>
            </div>

        </div>
    )
}

export default Networks