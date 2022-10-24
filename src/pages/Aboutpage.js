import React from "react";
import image from "../Assets/img/abouts.jpg";
import styled from "styled-components";
import image2 from "../Assets/img/whoweare.jpg";
import image3 from "../Assets/img/whatwedo.jpg";
import Avatar1 from "../Assets/img/person1.jpg";
import Avatar2 from "../Assets/img/person2.jpg";
import Avatar3 from "../Assets/img/person3.jpg";
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
        <div>
          <h2> Who we are</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos veritatis eaque iure distinctio! Error earum,
            accusantium maiores voluptates repudiandae voluptate illum, itaque
            quasi quia blanditiis vitae dolore cum harum possimus.
          </p>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
      </Flexbox>
      <Flexbox>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <h2> Who we do</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos veritatis eaque iure distinctio! Error earum,
            accusantium maiores voluptates repudiandae voluptate illum, itaque
            quasi quia blanditiis vitae dolore cum harum possimus.
          </p>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
        </div>
      </Flexbox>
      <Ourteam>
        <h2>Our Team</h2>
        <Flexbox>
          <div className="member">
            <img src={Avatar1} alt="avatar" />
            <h3>Member Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              laboriosam?
            </p>
          </div>
          <div className="member">
            <img src={Avatar2} alt="avatar" />
            <h3>Member Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              laboriosam?
            </p>
          </div>
          <div className="member">
            <img src={Avatar3} alt="avatar" />
            <h3>Member Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              laboriosam?
            </p>
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
`;
const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  div {
    padding: 50px;
    width: 50%;
    img {
      width: 100%;
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
