import "./skill.css";
function SkillMain() {
  return (
    <div className="SkillMain">
      <h1>My Skill</h1>
      <ul className="skillList">
        <li className="list">
          <h3>HTML 90%</h3>
          <span className="bar">
            <span className="html"></span>
          </span>
        </li>
        <li className="list">
          <h3>CSS 80%</h3>
          <span className="bar">
            {" "}
            <span className="css"></span>
          </span>
        </li>
        <li className="list">
          <h3>Javascript 80%</h3>
          <span className="bar">
            {" "}
            <span className="javascript"></span>
          </span>
        </li>
        <li className="list">
          <h3>React 70%</h3>
          <span className="bar">
            {" "}
            <span className="react"></span>
          </span>
        </li>
        <li className="list">
          <h3>Express 65%</h3>
          <span className="bar">
            <span className="express"></span>
          </span>
        </li>
        <li className="list">
          <h3>MongoDB 50%</h3>
          <span className="bar">
            <span className="mongoDB"></span>
          </span>
        </li>
        <li className="list">
          <h3>Node.js 55%</h3>
          <span className="bar">
            <span className="node"></span>
          </span>
        </li>
      </ul>
    </div>
  );
}
export default SkillMain;
