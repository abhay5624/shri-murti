import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Slide1 from "../Assets/img/slide3.jpg";
import Slide2 from "../Assets/img/slide3.webp";
import Slide3 from "../Assets/img/slide1.jpg";
import styled from "styled-components";
const slideImages = [
  {
    url: Slide1,
    caption: "Mother Earth needs to rest",
    caption2: "that's why we recycle",
  },
  {
    url: Slide2,
    caption: "Providing metal of supreme quality ",
    caption2: "and reliability",
  },
  {
    url: Slide3,
    caption: "Building the future by bringing down the past! ",
    caption2: "Deconstructing from the ground up to recreate!",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <Slideshowslide
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundSize: "100%",
              }}
            >
              <span>
                <div>
                  <h4>{slideImage.caption}</h4>
                  <h4>{slideImage.caption2}</h4>
                  <button>Contact us</button>
                </div>
              </span>
            </Slideshowslide>
          </div>
        ))}
      </Slide>
    </div>
  );
};
const Slideshowslide = styled.div`
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 992px) {
    width: 100vw;
    height: 35vh;
  }
  span {
    font-size: 40px;
    flex-direction: column;
    display: flex;
    padding-top: 40vh;
    padding-left: 6vw;
    align-item: center;
    div {
      color: white;
      width: fit-content;
      background-color: rgba(0, 0, 0, 0.31);
      padding: 20px;
    }
    h4 {
      margin: 0;
      padding: 0;
    }
    button {
      padding: 5px 15px;
      font-size: 18px;
      background-color: rgba(12, 114, 158, 1);
      color: white;
      border: none;
    }
  }
`;
export default Slideshow;
