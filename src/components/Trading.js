import React from "react";
import styled from "styled-components";
import image from "../Assets/img/tradimg.jpg";

const Trading = () => {
  return (
    <Traders>
      <div className="imagebx">
        <img src={image} alt="" />
      </div>
      <div className="shadowbox">
        <h2>Trading</h2>
        <div className="line"></div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sit, sunt
          labore voluptatibus asperiores laboriosam a cumque quod eum
          repellendus facilis natus, fuga facere! Laboriosam eius quasi, hic nam
          impedit natus aut perspiciatis sed. Fugit, est sint! Eaque, totam
          earum!
        </p>
      </div>
    </Traders>
  );
};
const Traders = styled.div`
  display: flex;
  padding: 80px;
  position: relative;
  min-height: fit-content;

  .line {
    width: 10vw;
    height: 3px;
    border-radius: 3px;
    padding: 0;
    background-color: rgba(12, 114, 158, 1);
  }
  .imagebx {
    width: 80%;
  }
  .shadowbox {
    background: white;
    padding: 40px;
    position: absolute;
    bottom: 20%;
    right: 15%;
    min-width: 30%;
    box-shadow: 5px 5px 10px 8px #888888;
  }
  div {
    img {
      width: 800px;
      height: 400px;
    }
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding: 30px;
    min-height: 50vh;
    .imagebx {
      display: none;
    }
    .shadowbox {
      display: static;
      left: 30px;
      min-height: fit-content;
      width: 65%;
    }
  }
`;
export default Trading;
