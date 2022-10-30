import React from "react";
import image from "../Assets/img/abouts.jpg";
import styled from "styled-components";
import Location from "../components/Location";
import image2 from "../Assets/img/whoweare.jpg";
import image3 from "../Assets/img/whatwedo.jpg";
import Avatar1 from "../Assets/img/person1.jfif";
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
          <h2>INTRODUCTION:</h2>
          <p>
            Our organisation was established in April-2021 and founded by Mr.
            Anuj Malik (Founder) and Mr. Ankit Sharma (Co-founder) in Uttar
            Pradesh, India. The company carries out its operations from its
            registered office setup in Muzaffarnagar, Uttar Pradesh. Our founder
            has the experience in the trading of Waste & Finished Paper from a
            long time in the same field. Our founders have good co-ordination
            with Paper Manufactures, Stockists and Logistics.
          </p>
        </div>
        <div className="bxmg">
          <img src={image2} alt="" />
        </div>
      </Flexbox>

      <Ourteam>
        <Flexbox>
          <div className="member">
            <img src={Avatar3} alt="avatar" />
            <h3>Anuj Malik</h3>
            <h4>Founder</h4>
            <p>
              Mr. Anuj Malik, is a well-qualified person and have more than15Yrs
              experience in Finance, Accounts & Trading.
            </p>
          </div>
          <div className="member">
            <img src={Avatar1} alt="avatar" />
            <h3>Ankit Sharma</h3>
            <h4>Co-Founder</h4>
            <p>
              Mr. Ankit Sharma, is a well-qualified person and have more
              than18Yrs experience in Trading Business
            </p>
          </div>
          <div className="member">
            <img src={Avatar2} alt="avatar" />
            <h3>Ravi Malik</h3>
            <h4>Co-Founder</h4>
            <p>
              Mr. Ravi Malik, latterly join the company as a partner and have
              more than10Yrs experience in Logistics Business.
            </p>
          </div>
        </Flexbox>
      </Ourteam>
      <Location />
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
  .member {
    padding: 25px;
    img {
      width: 300px;
      height: 350px;
    }
  }
  @media screen and (max-width: 992px) {
    .member {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  div {
    padding: 50px;
    width: 50%;
    img {
      width: 500px;
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
      img {
        width: 100%;
      }
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
