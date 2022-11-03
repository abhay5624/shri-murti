import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Footers>
      <div className="Linked">
        <Link to="/">Home</Link>|<Link to="/about">About</Link>|
        <Link to="/services">Services</Link>|
        <Link to="/contact">Contact Us</Link>
      </div>
    </Footers>
  );
};

const Footers = styled.div`
  .Linked {
    text-align: center;
    width: 100%;
    @media screen and (max-width: 992px) {
      font-size: 12px;
    }
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
