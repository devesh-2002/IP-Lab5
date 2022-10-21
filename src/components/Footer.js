import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/devesh-rahatekar-271556203/" style={{'text-decoration-lines':'none'}}><LinkedInIcon /></a>
          <a href="mailto:dev241202@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/devesh-2002"><GithubIcon /></a>
        
      </div>
      <p> &copy; 2022 Devesh Rahatekar</p>
    </div>
  );
}

export default Footer;