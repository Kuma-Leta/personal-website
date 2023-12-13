import './About.css';

function AboutMain() {
  return (
    <div className="aboutContainer">
      <h1>About Me</h1>
      <h2>Software Engineering student and MERN stack Web Developer</h2>
      <div>
        <p>
          Greetings! I am a dedicated Software Engineering student at Jimma
          University with a passion for crafting dynamic and innovative web
          solutions. Specializing in the MERN (MongoDB, Express.js, React,
          Node.js) stack, I bring a robust skill set to the realm of web
          development. My portfolio showcases a collection of projects that
          demonstrate my proficiency in creating seamless, user-friendly
          interfaces and scalable backend systems. With a keen eye for detail
          and a commitment to staying at the forefront of technology, I strive
          to deliver cutting-edge solutions that meet and exceed client
          expectations. Explore my portfolio to witness the fusion of my
          academic knowledge and practical expertise in the ever-evolving world
          of web development.
        </p>
        <img className="MERN" src="MERN.jpg" alt="nothing is there " />
      </div>
    </div>
  );
}
export default AboutMain;
