import React from "react";
import styled from "styled-components";
import Image from "../Assets/img/services.jpg";
import Image2 from "../Assets/img/servicesOcc.jpg";
import Image3 from "../Assets/img/rice4.jpg";
import Image4 from "../Assets/img/paperWaste.jpg";
const ServicePage = () => {
  return (
    <div>
      <ServiceHead
        style={{ backgroundImage: `url(${Image})`, backgroundSize: "100%" }}
      >
        <h2>Home / Services</h2>
        <div className="line"></div>
      </ServiceHead>
      <Services>
        <h2>Services</h2>
        <p>
          We are one of the prominent trading company in uttar Pradesh when
          dealing with paper waste
        </p>
      </Services>
      <Flexbox
        style={{ backgroundColor: "rgba(12, 114, 158, 1)", color: "white" }}
      >
        <div>
          <h3>Our Mission</h3>
          <div className="line"></div>
          <p>
            One of our main mission is to save tree and environment by trading
            with recycled paper.
          </p>
        </div>
        <div>
          <h3>Our Vision</h3>
          <div className="line"></div>
          <p>
            our vision is to fulfill our customer needs and become one of the
            most customer friendly company.
          </p>
        </div>
        <div>
          <h3>Our Speciality</h3>
          <div className="line"></div>
          <p>
            paper waste, craft paper , old book waste, copy waste paper and rice
            is our speciality .
          </p>
        </div>
      </Flexbox>
      <Services>
        <h2>Our Product</h2>
        <Flexbox>
          <div>
            <img src={Image2} alt="" />
            <h4>Imported waste peper </h4>
            <p>We also do trading with imported waste paper.</p>
          </div>
          <div>
            <img src={Image3} alt="" />
            <h4>Rice</h4>
            <p>One of our main product is rice.</p>
          </div>
          <div>
            <img src={Image4} alt="" />
            <h4>Kraft Paper</h4>
            <p>Kraft paper is also our main product</p>
          </div>
        </Flexbox>
      </Services>
    </div>
  );
};
const Flexbox = styled.div`
  width: 100%;
  display: flex;
  div {
    padding: 50px;
    text-align: center;
    img {
      width: 300px;
      height: 300px;
      @media screen and (max-width: 992px) {
        width: 100%;
      }
    }
  }
  .line {
    margin: auto;
    width: 10vw;
    height: 3px;
    border-radius: 3px;
    padding: 0;
    background-color: rgba(12, 114, 158, 1);
    padding-left: 20px;
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const Services = styled.div`
  padding: 80px;
  @media screen and (max-width: 992px) {
    padding: 10px;
  }
`;
const ServiceHead = styled.div`
  height: 300px;
  h2 {
    color: white;
    padding-left: 20px;
    padding-top: 200px;
    margin: 0px;
  }
  .line {
    width: 10vw;
    height: 3px;
    border-radius: 3px;
    margin-left: 20px;
    background-color: rgba(12, 114, 158, 1);
    padding-left: 20px;
  }
`;
export default ServicePage;
