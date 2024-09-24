import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "75d5016d-621a-419b-b34f-71ff3f674984");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((response) => response.json());

    if (response.success) {
      console.log("success", response);
      setResult(response.message);
      event.target.reset();
    } else {
      console.log("Error", response);
      setResult(response.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          We &apos;re committed to providing excellent customer service. Whether
          you&apos;re a prospective student, current student, parent, or faculty
          member, we&apos;re here to assist you. Contact us for more
          information.
        </p>
        <ul>
          <li>
            <img src={phone_icon} alt="" />
            +254 701-789-123
          </li>
          <li>
            <img src={mail_icon} alt="" />
            info@edusity.ac.ke
          </li>
          <li>
            <img src={location_icon} alt="" />
            123 University Way, Nairobi <br /> Kenya
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Send Message <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result} </span>
      </div>
    </div>
  );
};

export default Contact;
