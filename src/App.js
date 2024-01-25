import './App.css';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import SectionThree from './Components/SectionThree';
import Footer from './Components/Footer';
import BackToTopButton from './Components/BackToTopButton';
import Preloader from './Components/Preloader';
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree/>
      <Footer/>
      <BackToTopButton/>
      <Preloader/>
    </>
  );
}

export default App;
