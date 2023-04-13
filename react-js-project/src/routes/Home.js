import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import image from "../assets/helmet2.png";
import Des from "../components/Des";
import Concept from "../components/Concept";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={image}
        title="Ai-Art-Generator"
        text="Explore the World of AI-Generated Art"
        buttonText="plan"
        url="/"
        btnClass="show"
      />
      <Des />
      <Concept />
      <Footer />
    </>
  );
}

export default Home;
