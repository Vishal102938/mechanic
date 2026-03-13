import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Services from '../components/Services'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Action from '../components/Action'
import FeaturesSection from '../components/FeaturesSection'


const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <Nav />

      <HeroSection/>
      <div className='mt-[80px]'>
        <Services/>
      </div>
      <Action/>
      <FeaturesSection/>


      <Footer />
    </div>
  )
}

export default Home