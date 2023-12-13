import {Link} from 'react-router-dom'
import './Header.css'
import Header from './Header'
import Footer from './Footer'
import SkillMain from './SkillMain'

import './skill.css'
function Skill(){
    return (
      <div className='skill'>
         <Header />
       <SkillMain/>
       <Footer/>
      </div>
    );
}
export default Skill;