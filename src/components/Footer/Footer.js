import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by Abhishek Kumar
      </span>
      <div className="iconContainer">
        <a href="https://instagram.com/abhisingh_0077?igshid=ZDdkNTZiNTM=" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/abhishek-kumar-405938235" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCFmO2rKUFpfYYxujGLDNyEw" target="__blank">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;