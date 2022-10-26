import React from "react";
import Images from "../Assets/img/riceimg.jfif";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Introcomponent = () => {
  return (
    <Whattodo>
      <div>
        <h2>What we do</h2>
        <div className="line"></div>
        <p>
          We are in this business from 2021. We provide Kraft paper and waste
          paper all over north india. We also provide rice . Our cofounder are
          Anuj Malik, Ravi Malik and Ankit Sharma. we are present on many social
          media like facebook whatsapp and instagram. We protact our nature by
          dealing with waste papers and Kraft paper as kraft paper can be
          recycle multiple times.
        </p>
        <li>Our main products are: </li>
        <li>Rice</li>
        <li>Kraft Paper roll</li>
        <li>Waste Paper</li>
      </div>
      <div className="imagebox">
        <img src={Images} alt="" />
        <span>
          <h4>
            Learn about us and our founder.
            <br />
            <Link to="about">
              <button>Read More</button>
            </Link>
          </h4>
        </span>
      </div>
    </Whattodo>
  );
};
const Whattodo = styled.div`
  display: flex;
  padding: 80px;
  background: rgba(208, 203, 206, 0.1);
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
      height: 450px;
      margin: auto;
      border: 4px solid black;
      border-style: dashed;
      padding: 10px;
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
      order: 1;
      width: 100%;
      img {
        width: 80%;
      }
    }
    div {
      order: 2;
      width: 70vw;
    }
  }
`;
export default Introcomponent;
