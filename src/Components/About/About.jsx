import PropTypes from "prop-types";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT EDUSITY</h3>
        <h2>Shaping Global Innovators of Tomorrow</h2>
        <p>
          Join a world-class academic institution dedicated to fostering the
          next generation of thinkers, creators, and leaders. Our university
          offers innovative learning experiences that combine cutting-edge
          technology with real-world problem-solving.
        </p>
        <p>
          Our programs emphasize collaboration, critical thinking, and global
          awareness, providing students with the tools to succeed in a rapidly
          changing world. With personalized mentorship and hands-on
          opportunities, we guide students to become innovators and trailblazers
          in their chosen fields.
        </p>
        <p>
          Whether your passion lies in technology, arts, sciences, or
          leadership, our diverse curriculum and expert faculty will empower you
          to make a lasting impact locally and globally. Prepare for the future
          with a university that nurtures potential, ignites curiosity, and
          champions progress.
        </p>
      </div>
    </div>
  );
};

About.propTypes = {
  setPlayState: PropTypes.func.isRequired,
};

export default About;
