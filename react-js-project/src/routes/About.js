import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import image from "../assets/helmet.png";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={image} title="About" btnClass="hide" />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;
