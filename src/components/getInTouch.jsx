const GetInTouch = () => {
    return (
        <div id="getInTouch" className="lg:flex lg:mt-40 lg:mb-20 xl:mt-32">
            <div className="lg:flex lg:flex-col lg:w-[600px]">
                <h2 className="font-DMSans font-bold text-4xl text-center mt-20 lg:text-6xl">Get in touch</h2>
                <p className="font-DMSans text-center text-sm mt-10
                md:text-[17px] lg:text-left lg:text-2xl lg:ml-14 xl:ml-36">Links to our social media</p>
                <div className="flex justify-center mt-8 mb-10 lg:justify-start lg:ml-14 xl:ml-36">
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/telegram.png" alt="telegram"/>
                    <img className="mx-3" width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitter-circled--v1.png" alt="twitter"/>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/circled-envelope.png" alt="email"/>
                </div>
            </div>
            <img className="lg:w-[600px] lg:h-[200px] lg:mt-20 xl:w-[650px] xl:h-[220px] xl:mr-10" src="../../getInTouch.png" alt="" />
        </div>
    )
}

export default GetInTouch