import './home.css'
 
function HomeMain(){
    return (
      <main className="main">
  
        <div className="introducing">
          <h1>Hi I'm Kuma Leta</h1>
          <h2>MERN Stack Web Developer</h2>
          <p>
            MERN stack web development offers a seamless and full-stack
            JavaScript experience, allowing developers to use a single
            programming language (JavaScript) throughout the entire development
            process, from server to client.
          </p>
          <a href="mailto:kumaleta2021@gmail.com" className="btn" >
            Email Me
          </a>
        </div>
        <div className="profilePhoto">
          <img className="photo" alt="no profile" src="kuma_RESIZED.jpg" />
        </div>
      </main>
    );
}
export default HomeMain;
