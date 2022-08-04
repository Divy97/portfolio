import React, { useRef, useState } from "react";
import "./contact.css";

import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";

import emailjs from "emailjs-com";
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ant3mt5",
        "template_d7pu52u",
        formRef.current,
        "se0QoFogUEZZDL0Lb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">let's discuss your Project</h1>
          <div className="c-info"></div>
          <div className="c-info-item">
            <img src={phone} alt="phone" className="c-icon" />
            +91 7046063843
          </div>
          <div className="c-info-item">
            <img src={email} alt="email" className="c-icon" />
            divyparekh1810@gmail.com
          </div>
          <div className="c-info-item">
            <img src={address} alt="address" className="c-icon" />
            Ahmedabad, India
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Lorem ipsum dolor</b>, sit amet consectetur adipisicing elit.
            Impedit voluptas, necessitatibus quibusdam alias tempore dignissimos
            consequatur? Accusamus, recusandae? Eius, facilis.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              //style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              //style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              //style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              //style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
