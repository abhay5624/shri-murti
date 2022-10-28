import React from "react";
import Imgbox1 from "../Assets/img/boximg1.webp";
import Imgbox2 from "../Assets/img/boximg2.jfif";
import Imgbox3 from "../Assets/img/boximg3.jfif";
import Imgbox4 from "../Assets/img/riceimg.jfif";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Popup = ({ active, setPopup }) => {
  const imagesbox = [Imgbox1, Imgbox2, Imgbox3, Imgbox4];
  console.log("index is", active);
  return (
    <PopupStyle>
      <FontAwesomeIcon
        icon={faX}
        className="icon5"
        onClick={() => {
          setPopup(false);
        }}
      />
      <img src={imagesbox[active]} className="popupimg" />
    </PopupStyle>
  );
};
const PopupStyle = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  min-width: 100vw;
  height: 100vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  .popupimg {
    width: 80%;
    height: 80%;
    padding: 80px;
  }
  .icon5 {
    position: fixed;
    top: 50px;
    left: 45px;
    font-size: 20px;
    background: white;
    padding: 10px;
    border-radius: 5px;
  }
  @media screen and (max-width: 992px) {
    .popupimg {
      margin-top: 30%;
      margin-left: 30px;
      width: 90%;
      height: 270px;
    }
  }
`;
export default Popup;
