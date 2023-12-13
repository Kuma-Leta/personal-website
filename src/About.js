import Header from "./Header";
import AboutMain from "./AboutMain";
import './About.css'
import Footer from "./Footer";
function About(){
    return (
      <div className="about">
       <Header />
       <AboutMain/>
       <Footer/>
      </div>
    );
}
export default About;