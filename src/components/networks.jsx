const Networks = () => {
    return (
        <div id="networks" className="h-[750px] mx-4 mt-32 rounded-3xl bg-[#f3f3f3]">
            <h2 className="px-5 font-DMSans font-extrabold text-4xl text-center pt-16">Networks</h2>
            <p className="px-4 text-center font-DMSans text-sm mt-7 mb-10">We pride ourselves as a boutique validator supporting networks that create real value. We have been in the staking business since 2019 and run validators on Ethereum-, Substrate- and Tendermint-based chains.</p>
            <div className="bg-white border border-solid border-gray-200 rounded-3xl h-32 mx-6 mt-5 flex flex-row items-center justify-between">
                <h2 className="font-DMSans font-bold text-[27px] pl-7">Celestia</h2>
                <img className="pr-7" src="https://moonli.me/wp-content/uploads/2023/10/celestia-color-1.svg" alt="Celestia Logo" />
            </div>
            <div className="bg-white border border-solid border-gray-200 rounded-3xl h-32 mx-6 mt-3 flex flex-row items-center justify-between">
                <h2 className="font-DMSans font-bold text-[27px] pl-7">Celo</h2>
                <img className="pr-7" src="https://moonli.me/wp-content/uploads/2022/03/logo1.svg" alt="Celo Logo" />
            </div>
            <div className="bg-white border border-solid border-gray-200 rounded-3xl h-32 mx-6 mt-3 flex flex-row items-center justify-between">
                <h2 className="font-DMSans font-bold text-[27px] pl-7 tracking-tight">The Graph</h2>
                <img className="pr-7" src="https://moonli.me/wp-content/uploads/2022/03/logo4.svg" alt="The Graph Logo" />
            </div>
        </div>
    )
}

export default Networks