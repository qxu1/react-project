import Image2 from "../assets/helmet2.png";
import Image1 from "../assets/helmet.png";
import Papic from "../assets/pcmachine.png";
import Keyimg from "../assets/keyboardconcept.png";

import "./Des.css";
import Data from "./Data";

const Des = () => {
  return (
    <div className="des">
      <h1>Unleash Your Creativity with AI</h1>
      <p>Explore the World of AI-Generated Art</p>

      <Data
        className="first-des"
        heading="Helmet Concept"
        text="Welcome to our AI art generator website! Discover the fascinating intersection of artificial intelligence and art as you embark on a journey of creative exploration. Our platform empowers users to tap into the cutting-edge technology of AI to generate unique and mesmerizing artworks that push the boundaries of traditional artistic techniques.

        With our AI art generator, you can unlock a world of endless possibilities. Choose from a variety of parameters, such as color palette, style, composition, and more, and watch as the AI algorithm brings your artistic vision to life. Whether you're an artist looking for new sources of inspiration or someone with no prior artistic experience, our AI art generator provides a user-friendly and intuitive interface that makes art creation accessible to everyone."
        img1={Image1}
        img2={Image2}
      />

      <Data
        className="first-des-reverse"
        heading="machine Concept"
        text="Immerse yourself in the realm of AI-generated art, where creativity knows no limits. Experiment with different settings, explore various artistic styles, and create one-of-a-kind masterpieces that are truly unique to you. Our website also provides resources and tutorials to help you understand the technical aspects of AI-generated art, so you can learn and grow as an artist while harnessing the power of AI.

        Join our vibrant community of artists, technologists, and art enthusiasts who are passionate about the possibilities of AI in the art world. Share your creations, connect with like-minded individuals, and be part of the exciting evolution of art and technology. With our AI art generator website, you can unleash your creativity like never before and embark on an artistic journey that transcends traditional boundaries. Welcome to the future of art with AI!"
        img1={Papic}
        img2={Keyimg}
      />
    </div>
  );
};
export default Des;
