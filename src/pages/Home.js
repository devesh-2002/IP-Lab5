import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I am Devesh Rahatekar</h2>
        <div className="prompt">
          <p>A front-end developer and a passionate open source contributor</p>
         <a href="https://www.linkedin.com/in/devesh-rahatekar-271556203/" style={{'text-decoration-lines':'none'}}><LinkedInIcon /></a>
          <a href="mailto:dev241202@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/devesh-2002"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;