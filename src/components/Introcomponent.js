import React from "react";
import Images from "../Assets/img/riceimg.jfif";
import styled from "styled-components";
import Imagebox from "./Imagebox";
import { Link } from "react-router-dom";
const Introcomponent = () => {
  return (
    <Whattodo>
      <div className="content">
        <h2>Business</h2>
        <div className="line"></div>
        <p>
          We are in the business since 2021 and provide the solution related to
          paper waste to Paper Manufacturing units through trading of Paper
          Waste i.e Old & used Books, Copies, Kraft paper & other qualities of
          Waste Paper in Uttar Pradesh & Uttaranchal. Recycling of paper waste
          save the nature as it can be recycled multiple times. We also deal
          with the best quality of Rice.
        </p>
        <p>We fulfil our customer requirement on priority.</p>
        <h3>Our Products: </h3>
        <li style={{ paddingRight: "70px" }}>
          Paper Waste i.e.Old & used Books, Copies, Kraft Paper & others{" "}
        </li>
        <li>Finished Kraft Paper</li>
        <li>Imported Waste paper</li>
        <li>Rice</li>
      </div>
      <div className="imagebox">
        <Imagebox />
      </div>
    </Whattodo>
  );
};
const Whattodo = styled.div`
  display: flex;
  padding: 80px;
  background: rgba(208, 203, 206, 0.1);
  .content {
    @media screen and (max-width: 992px) {
      p {
        padding-right: 70px;
      }
    }
  }
  .imagebox {
    position: relative;
  }
  span {
    h4 {
      border: 3px solid black;
      padding: 10px 30px;
      button {
        background-color: rgba(12, 114, 158, 1);
        padding: 8px 20px;
        margin: 5px 0px;
        border: none;
        color: white;
      }
    }

    background: white;
    padding: 0 10px;
    position: absolute;
    bottom: 50px;
    right: -20px;
  }
  div {
    padding: 5px;
    width: 50vw;

    h2 {
      font-weight: 500;
    }
    img {
      width: 80%;
      height: 220px;
      margin: auto;
      padding: 10px;
      @media screen and (max-width: 992px) {
        padding: 0px;
      }
    }
    li {
      list-style: none;
    }
    .line {
      width: 10vw;
      height: 3px;
      border-radius: 3px;
      padding: 0;
      background-color: rgba(12, 114, 158, 1);
    }
  }
  @media screen and (max-width: 992px) {
    padding: 30px;
    flex-direction: column;
    overflow-x: hidden;
    .imagebox {
      order: 2;
      width: 100%;
      padding: 0px;
      img {
        width: 80%;
        padding: 0px;
      }
    }
    div {
      order: 2;
      width: 100vw;
    }
  }
`;
export default Introcomponent;
