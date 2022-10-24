import React from "react";
import Logo from "../Assets/img/3.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutubeSquare,
  faWhatsapp,
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
const Navbar = () => {
  return (
    <Flexbox>
      <Logoimg>
        <img src={Logo} alt="Logo image" />
      </Logoimg>
      <Flexbox2>
        <Navlinks>
          <Link to="/">Home</Link>
        </Navlinks>
        <Navlinks>
          <Link to="/about">About</Link>
        </Navlinks>
        <Navlinks>
          <Link to="/work">Work</Link>
        </Navlinks>
        <Navlinks>
          <Link to="/contact">Contact</Link>
        </Navlinks>
      </Flexbox2>
      <Socialmedia>
        <FontAwesomeIcon icon={faLinkedin} className="icon1" />
        <FontAwesomeIcon icon={faYoutubeSquare} className="icon2" />
        <FontAwesomeIcon icon={faWhatsapp} className="icon3" />
        <FontAwesomeIcon icon={faTwitterSquare} className="icon4" />
        <FontAwesomeIcon icon={faFacebookSquare} className="icon5" />
        <FontAwesomeIcon icon={faInstagramSquare} className="icon6" />
      </Socialmedia>
    </Flexbox>
  );
};
const Logoimg = styled.div`
  padding: 10px;
  img {
    width: 200px;
  }
`;
const Flexbox = styled.div`
display flex;
width: 100%
`;
const Flexbox2 = styled.div`
display flex;
`;
const Navlinks = styled.h4`
  padding: 15px 20px;
  a {
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: black;
    text-decoration: none;
  }
`;
const Socialmedia = styled.div`
  display: flex;
  font-size: 50px;
  svg {
    padding: 20px 20px;
  }
  .icon1 {
    color: #0077b5;
  }
  .icon2 {
    padding: 0;
    margin: 22px 22px;
    border-radius: 5px;
    color: #ff0000;
    background-color: white;
  }
  .icon3 {
    color: #12db12;
  }
  .icon4 {
    color: #1da1f2;
  }
  .icon5 {
    color: #3b5998;
  }
  .icon6 {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    color: white;
    padding: 0;
    margin: 20px 20px;
  }
`;
export default Navbar;
