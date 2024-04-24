import Main from "../components/main"
import Networks from "../components/networks"
import Selection from "../components/selection"
import Reliability from "../components/reliability"
import GivingBack from "../components/givingBack"
import GetInTouch from "../components/getInTouch"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import BackToTopBtn from "../components/buttonUp"
import ScrollToTop from "../components/scrollToTop"


const Home = () => {
    return (
        <>
            <ScrollToTop/>
            <Navbar/>
            <BackToTopBtn/>
            <Main/>
            <Networks/>
            <Selection/>
            <Reliability/>
            <GivingBack/>
            <GetInTouch/>
            <Footer/>
        </>
    )
}

export default Home