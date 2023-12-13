

 import './home.css'
import Header from './Header';

import HomeMain from './HomeMain';
import AboutMain from './AboutMain';
import SkillMain from './SkillMain';
import ContactMain from './ContactMain';
import Footer from './Footer';
 function Home(){
  

    return (
      <>
        <div className='home'>
          <Header />
          <HomeMain />
        </div>
        <AboutMain  />
        <SkillMain />
        <ContactMain  />
        <Footer/>
      </>
    );
}
export default Home;