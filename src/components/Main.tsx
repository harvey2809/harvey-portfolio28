import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://portfolio-bucket2809.s3.us-east-2.amazonaws.com/IMG_3110.PNG"
           alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/h-b-harvy/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Hardeep Bhatti</h1><p>(Harvey)</p>
          <p>Land Use Planner</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/h-b-harvy/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
