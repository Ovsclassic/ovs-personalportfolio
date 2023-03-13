import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/victor-okunoye-96341a1b1"
          rel="noreferrer noopener"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/ovs_classic/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.facebook.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FacebookIcon />
        </a>
      </div>
      <p> &copy; 2023 okunoyevictor@gmail.com</p>
    </div>
  );
};

export default Footer;
