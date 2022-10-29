import React from "react";
import Logo from "../Assets/img/3-removebg-preview.png";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutubeSquare,
  faWhatsapp,
  faTwitterSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [NavShow, setNavShow] = useState(false);
  const toggleHandler = () => {
    setNavShow(!NavShow);
  };
  return (
    <>
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
            <Link to="/contact">Contact</Link>
          </Navlinks>
          <Navlinks>
            <Link to="/services">Services</Link>
          </Navlinks>
          <Navlinks>
            <Link to="/order">Order</Link>
          </Navlinks>
        </Flexbox2>
        <Socialmedia>
          <FontAwesomeIcon icon={faLinkedin} className="icon1" />
          <FontAwesomeIcon icon={faYoutubeSquare} className="icon2" />
          <FontAwesomeIcon icon={faWhatsapp} className="icon3" />
          <FontAwesomeIcon icon={faTwitterSquare} className="icon4" />
          <FontAwesomeIcon icon={faFacebookSquare} className="icon5" />
        </Socialmedia>
        <div className="medianav" onClick={() => toggleHandler()}>
          <FontAwesomeIcon icon={faBars} className="icon5" />
        </div>
      </Flexbox>
      {NavShow && (
        <MediaLink>
          <FontAwesomeIcon
            icon={faX}
            className="cross"
            onClick={() => toggleHandler()}
          />
          <div className="mediaa">
            <Link to="/" onClick={() => toggleHandler()}>
              Home
            </Link>
          </div>

          <div className="mediaa">
            <Link to="/about" onClick={() => toggleHandler()}>
              About
            </Link>
          </div>

          <div className="mediaa">
            <Link to="/contact" onClick={() => toggleHandler()}>
              Contact
            </Link>
          </div>

          <div className="mediaa">
            <Link to="/services" onClick={() => toggleHandler()}>
              Services
            </Link>
          </div>
          <div className="mediaa">
            <Link to="/order" onClick={() => toggleHandler()}>
              Order
            </Link>
          </div>
        </MediaLink>
      )}
    </>
  );
};
const Logoimg = styled.div`
  padding: 10px;
  img {
    width: 180px;
  }
`;
const MediaLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-item: center;
  background-color: white;
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  font-weight: 600;
  z-index: 99;
  text-align: center;
  top: 0;
  left: 0;
  a {
    color: black;
    text-decoration: none;
    text-align: center;

    font-size: 30px;
  }
  .cross {
    font-size: 20px;
  }
`;
const Flexbox = styled.div`
display flex;
width: 100%;
justify-content: space-between;
position: fixed;
.medianav{
  font-size: 40px;
  margin: 50px;
  display: none;
  @media screen and (max-width: 992px){
    display: flex;
  }
}

@media screen and (max-width: 992px){
  background-color: white;
  position: static;
}
z-index: 99;
background-color: #1e1e1fb7;
`;
const Flexbox2 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
`;
const Navlinks = styled.h4`
  padding: 15px 20px;
  padding-bottom: 0px;
  @media screen and (max-width: 992px) {
    display: none;
  }
  a {
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: white;
    text-decoration: none;
  }
`;
const Socialmedia = styled.div`
  display: flex;
  padding: 40px
  justify-content: space-around;
  width: 30%;
  font-size: 30px;
  @media screen and (max-width: 992px) {
    display: none;
  }
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
