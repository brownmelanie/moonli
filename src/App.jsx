import './App.css'
import Footer from './components/footer'
import GetInTouch from './components/getInTouch'
import GivingBack from './components/givingBack'
import Main from './components/main'
import Navbar from './components/navbar'
import Networks from './components/networks'
import Reliability from './components/reliability'
import Selection from './components/selection'


function App() {
  return (
    <>
      <Navbar/>
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

export default App
