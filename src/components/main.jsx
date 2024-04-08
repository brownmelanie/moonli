

const Main = () => {
    return (
        <>
            <main className="bg-[#b8ff65] rounded-3xl mx-4 mt-5 h-[560px] text-center">
                <h1 className="pt-20 px-5 font-extrabold text-[27px] font-DMSans leading-8 tracking-[-1px]">We are an independent staking service provider for blockchain projects</h1>
                <h4 className="pt-10 px-4 text-sm leading-6 font-DMSans">Independent means that it is run by blockchain geeks for blockchain and crypto enthusiasts just like you. No VCs or institutional support.<br/>We indeed care about keeping the stake decentralized.</h4>
                <img className="mt-3" src="https://moonli.me/wp-content/themes/moonli/images/hero_background_mobile.png" alt="Main image" />
                <a href="#networks">
                    <button className="w-10 mt-16 bg-black rounded-full cursor-pointer"><img className="p-1" src="../../iconDown.png" alt="Icono abajo"/></button>
                </a>
            </main>
        </>
    )
}

export default Main