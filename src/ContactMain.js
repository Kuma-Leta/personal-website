 import {
   FaGithub,
   FaLinkedin,
   FaTelegram,
   FaPhone,
   FaLocationArrow,
   FaEnvelope,
 } from "react-icons/fa";
 import './contact.css'
function ContactMain(){
    return (
        <div className="ContactMain">

      <section className="mainContainer">
        <h1>Get in Touch</h1>
        <p className="paragraph">
          please get in touch using the listed communication mechanism if there
          is any suggestion ,comment etc...
        </p>
        <div className="platforms">
          <div className="eachPlatform">
            <span>
              <FaPhone size={32} />
            </span>
            <span>
              <h3>PHONE</h3>
              <p>+251 955 349 693</p>
            </span>
          </div>
          <div className="eachPlatform">
            <span>
              <FaEnvelope size={32} />
            </span>
            <span>
              <h3>EMAIL</h3>
              <p>kumaleta2021@gmail.com</p>
            </span>
          </div>
          <div className="eachPlatform">
            <span>
              <FaLocationArrow size={32} />
            </span>
            <span>
              <h3>LOCATION</h3>
              <p>jimma,ethiopia</p>
            </span>
          </div>
          <div className="eachPlatform">
            <span>
              <FaTelegram size={32} />
            </span>
            <span>
              <h3>TELEGRAM</h3>
              <p>@khky1</p>
            </span>
          </div>
        </div>
        <div className="platformLinks">
          <a href="www.linkedin.com/kumaleta" target="_blank">
            {" "}
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/Kuma-Leta"
            target="_blank"
            rel="noreferrer"
            >
            <FaGithub size={32} />
          </a>
          <a href="https://t.me/khky1" target="_blank" rel="noreferrer">
            <FaTelegram size={32} />
          </a>
          <a
            href="mailto:kumaleta2021@gmail.com"
            target="_blank"
            rel="noreferrer"
            >
            <FaEnvelope size={32} />
          </a>                                                                                                   
        </div>
      </section>
              </div>
    );
}
export default ContactMain;