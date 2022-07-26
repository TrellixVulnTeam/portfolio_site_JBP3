import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Hi, I'm Prasun Biswas</h1>
          <h2>Embedded System Engineer</h2>
          <h3>
            I love to develop application which solve real time problems using embedded systems. I'm focused on finding solutions with strategic approach and motivated to work in the right direction.
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow_down.png" alt="" />
        </a>
      </div>
    </div>
  );
}