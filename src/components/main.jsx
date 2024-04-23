const Main = () => {
    return (
        <>
            <main className="bg-[#b8ff65] rounded-3xl mx-4 mt-5 h-[560px] text-center md:h-[480px] lg:h-[550px] xl:h-[620px] xl:mt-7 xl:mx-20">
                <h1 className="pt-20 px-5 font-extrabold text-[27px] font-DMSans leading-8 tracking-[-1px]
                sm:px-20 sm:pt-24
                md:text-[32px] md:tracking-normal md:leading-10 md:px-44
                lg:text-6xl lg:px-32 xl:text-[58px] xl:px-60 xl:pt-36">We are an independent staking service provider for blockchain projects</h1>
                <h4 className="pt-10 px-4 text-sm leading-6 font-DMSans
                sm:px-24
                md:px-52
                lg:text-xl lg:px-64 
                xl:text-[18px] xl:px-80">Independent means that it is run by blockchain geeks for blockchain and crypto enthusiasts just like you. No VCs or institutional support.<br/>We indeed care about keeping the stake decentralized.</h4>
                <img className="mt-3 md:hidden lg:hidden xl:hidden 2xl:hidden" src="https://moonli.me/wp-content/themes/moonli/images/hero_background_mobile.png" alt="Main image"/>
                <img className="hidden 
                md:block md:relative md:top-[-270px] 
                lg:relative lg:top-[-370px] 
                xl:block xl:top-[-390px]
                2xl:block" src="https://moonli.me/wp-content/themes/moonli/images/hero_background.png" alt="Main image"/>

                <a href="#networks">
                    <button className="w-10 mt-16 bg-black rounded-full cursor-pointer
                    sm:mt-0
                    md:relative md:top-[-340px]
                    lg:relative lg:top-[-500px]
                    xl:w-16 xl:h-16 xl:top-[-560px]"><img className="p-1 xl:p-3" src="../../iconDown.png" alt="Icono abajo"/></button>
                </a>
            </main>
        </>
    )
}

export default Main