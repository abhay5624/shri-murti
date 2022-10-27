import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Slide1 from "../Assets/img/slide3.jpg";
import Slide2 from "../Assets/img/slide3.webp";
import Slide3 from "../Assets/img/slide1.jpg";
import Slide4 from "../Assets/img/kraft-paper-roll.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
const slideImages = [
  {
    url: Slide1,
    caption: "Mother Earth needs to rest",
    caption2: "that's why we recycle",
  },
  {
    url: Slide2,
    caption: "Building the future by bringing down the past! ",
    caption2: "Deconstructing from the ground up to recreate!",
  },

  {
    url: Slide3,
    caption: "Rice is our key product ",
    caption2: "",
  },
  {
    url: Slide4,
    caption: "Kraft Paper is a options ",
    caption2: "To save our future",
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
                  <Link to="/contact">
                    <button>Contact us</button>
                  </Link>
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
      @media screen and (max-width: 992px) {
        font-size: 18px;
      }
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
  @media screen and (max-width: 992px) {
    width: 100vw;
    height: 35vh;
    span {
      padding-top: 0vh;
      padding-left: 0vw;
    }
  }
`;
export default Slideshow;
