import React from "react";
import image from "../Assets/img/abouts.jpg";
import styled from "styled-components";
import image2 from "../Assets/img/whoweare.jpg";
import image3 from "../Assets/img/whatwedo.jpg";
import Avatar1 from "../Assets/img/person1.jpg";
import Avatar2 from "../Assets/img/person2.jfif";
import Avatar3 from "../Assets/img/person3.jfif";
const Aboutpage = () => {
  return (
    <Aboutit>
      <div
        className="bximg"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <h2>Home / About Us</h2>
        <div className="line"></div>
      </div>
      <Flexbox>
        <div className="content">
          <h2> Who we are</h2>
          <p>
            We are in this business from 2021. It is a Partnership with its
            office registered in Uttar Pradesh . The company carries out its
            major operations from Uttar Pradesh Our cofounder are Anuj Malik,
            Ravi Malik and Ankit Sharma. we are present on many social media
            like facebook whatsapp and instagram. we are located at House No.2
            VASUNDHARA RESIDENCY, Uttar Pradesh 251001.
          </p>
        </div>
        <div className="bxmg">
          <img src={image2} alt="" />
        </div>
      </Flexbox>
      <Flexbox>
        <div className="bxmg">
          <img src={image3} alt="" />
        </div>
        <div className="content">
          <h2> What we do</h2>
          <p>
            We deal with waste paper and save tree by dealing with them. we
            trade with rice , waste paper and kraft paper too. kraft paper also
            save our environment as it can be recycle many time. Our main area
            of interest lies in Uttar Pradesh.
          </p>
          <li>Our main products are: </li>
          <li>Rice</li>
          <li>Kraft Paper roll</li>
          <li>Waste Paper</li>
        </div>
      </Flexbox>
      <Ourteam>
        <h2>Our Team</h2>
        <Flexbox>
          <div className="member">
            <img src={Avatar1} alt="avatar" />
            <h3>Anuj Malik</h3>
            <h4>Co-Founder</h4>
          </div>
          <div className="member">
            <img src={Avatar2} alt="avatar" />
            <h3>Ravi Malik</h3>
            <h4>Co-Founder</h4>
          </div>
          <div className="member">
            <img src={Avatar3} alt="avatar" />
            <h3>Ankit Sharma</h3>
            <h4>Co-Founder</h4>
          </div>
        </Flexbox>
      </Ourteam>
    </Aboutit>
  );
};
const Ourteam = styled.div`
  padding-left: 90px;
  h2 {
    text-align: center;
  }
  @media screen and (max-width: 992px) {
    padding-left: 5px;
  }
`;
const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  list-style: none;
  div {
    padding: 50px;
    width: 50%;
    img {
      width: 350px;
      height: 400px;
    }
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding: 10px;
    div {
      width: 80%;
    }
    .bxmg {
      order: 1;
    }
  }
`;
const Aboutit = styled.div`
  .bximg {
    height: 300px;
    width: 100vw;
    img {
      height: 100%;
      width: 100vw;
    }
    .line {
      width: 10vw;
      height: 3px;
      border-radius: 3px;
      margin-left: 20px;
      background-color: rgba(12, 114, 158, 1);
      padding-left: 20px;
    }
    h2 {
      color: black;
      padding-left: 20px;
      padding-top: 200px;
      margin: 0px;
    }
  }
`;
export default Aboutpage;
