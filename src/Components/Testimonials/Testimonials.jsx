import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideFoward = () => {
    if (tx > -50) {
      /* tx :translateX */
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideFoward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Bianca Doe</h3>
                  <span>Class of 2023</span>
                </div>
              </div>
              <p>
                &quot;Attending Edusity has been the best decision of my life.
                The professors are incredibly supportive, and the campus
                community feels like a second family. I&apos;ve grown both
                academically and personally, and I&apos;m confident in my
                future.&quot;
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>John Odero</h3>
                  <span>Engineering Student</span>
                </div>
              </div>
              <p>
                &quot;The opportunities at Edusity are endless. From research
                projects to internships, I&apos;ve gained hands-on experience
                that has prepared me for the career I always dreamed of. The
                faculty truly care about student success.&quot;
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Emily Smith</h3>
                  <span>Business Administration Major</span>
                </div>
              </div>

              <p>
                &quot;What sets Edusity apart is the sense of belonging. I felt
                welcomed from day one and found so many ways to get involved.
                The education I&apos;ve received here has been transformative,
                opening doors I never thought possible.&quot;
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Larry Omondi</h3>
                  <span>Psychology Major</span>
                </div>
              </div>

              <p>
                &quot;I chose Edusity because of it&apos; s strong focus on
                innovation. The cutting-edge resources, inspiring faculty, and
                diverse student body have given me the tools and confidence to
                thrive in the tech industry.&quot;
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
