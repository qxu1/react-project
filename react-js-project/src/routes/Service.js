import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import image from "../assets/pcmachine.png";
import Footer from "../components/Footer";
import Concept from "../components/Concept";


function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={image} title="Service" btnClass="hide" />
      <Concept/>
      <Footer/>
    </>
  );
}

export default Service;
