import React from "react";
import Imgbox1 from "../Assets/img/boximg1.webp";
import Imgbox2 from "../Assets/img/boximg2.jfif";
import Imgbox3 from "../Assets/img/boximg3.jfif";
import Imgbox4 from "../Assets/img/riceimg.jfif";
import styled from "styled-components";
import Popup from "./Popup";
import { useState } from "react";
const Imagebox = () => {
  const imagesbox = [Imgbox1, Imgbox2, Imgbox3, Imgbox4];
  const [first, setfirst] = useState(false);
  const [active, setactive] = useState();
  const popupholder = (index) => {
    setfirst(true);
    setactive(index);
    console.log("index from imagebox", index);
  };
  return (
    <>
      <Flexbox>
        {imagesbox.map((img, index) => (
          <div onClick={() => popupholder(index)} style={{ width: "47%" }}>
            <img src={img} alt="" />
          </div>
        ))}
      </Flexbox>
      {first && <Popup active={active} setPopup={setfirst} />}
    </>
  );
};
const Flexbox = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  div {
    width: 47%;
    img {
      width: 100%;
      height: 200px;
    }
  }
  @media screen and (max-width: 992px) {
    width: 20%;
    img {
      height: 100%;
    }
  }
`;
export default Imagebox;
