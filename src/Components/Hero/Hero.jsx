import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Empowering Minds, Shaping Tomorrow</h1>
        <p>
          Whether you&apos;re pursuing knowledge, building a career, or making
          lifelong connections, Edusity offers the resources and opportunities
          you need to succeed and make an impact in the world.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
