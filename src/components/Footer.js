import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Footers>
      <div className="Linked">
        <Link to="/">Home</Link>|<Link to="/about">About</Link>|
        <Link to="/work">Work</Link>|<Link to="/services">Services</Link>|
        <Link to="/contact">Contact Us</Link>
      </div>
      <Flexbox>
        <h3>Copyright © 2022 Shri Murti Devi</h3>
        <h3>Made by: Abhay Kumar Sharma</h3>
      </Flexbox>
    </Footers>
  );
};
const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Footers = styled.div`
  .Linked {
    text-align: center;
    width: 100%;
  }
  background-color: #001;
  color: white;
  padding: 30px;
  padding-top: 100px;
  padding-bottom: 100px;
  a {
    margin: auto;
    padding: 20px;
    color: white;
    text-decoration: none;
  }
`;
export default Footer;
