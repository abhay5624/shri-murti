import React from "react";
import styled from "styled-components";
import Image from "../Assets/img/services.jpg";
import Image2 from "../Assets/img/paperWaste.jpg";
import Image3 from "../Assets/img/rice2.jfif";
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          itaque excepturi sapiente harum maxime asperiores maiores atque
          delectus doloremque necessitatibus?
        </p>
      </Services>
      <Flexbox
        style={{ backgroundColor: "rgba(12, 114, 158, 1)", color: "white" }}
      >
        <div>
          <h3>Our Mission</h3>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, deleniti!
          </p>
        </div>
        <div>
          <h3>Our Vision</h3>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, deleniti!
          </p>
        </div>
        <div>
          <h3>Our Speciality</h3>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, deleniti!
          </p>
        </div>
      </Flexbox>
      <Services>
        <h2>Our Product</h2>
        <Flexbox>
          <div>
            <img src={Image2} alt="" />
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div>
            <img src={Image3} alt="" />
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
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
      width: 400px;
      height: 400px;
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
`;
const Services = styled.div`
  padding: 80px;
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
