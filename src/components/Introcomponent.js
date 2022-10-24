import React from "react";
import Images from "../Assets/img/riceimg.jfif";
import styled from "styled-components";
const Introcomponent = () => {
  return (
    <Whattodo>
      <div>
        <h2>What we do</h2>
        <div className="line"></div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          ratione accusamus itaque, necessitatibus impedit est beatae nobis ut
          ipsum non saepe nesciunt fuga odit repellat omnis, sapiente et ex
          consequatur ad sequi voluptatibus corrupti. Pariatur sit, sed quod at
          harum labore exercitationem porro explicabo, ullam eos voluptates
          eveniet quae quo officiis, atque eum? Nulla, blanditiis dicta deleniti
          omnis error ab iusto minima sint assumenda non temporibus perspiciatis
          molestias inventore possimus debitis corporis aspernatur numquam
          itaque nesciunt ipsam natus in odio iste. Optio unde provident facere
          dolores rerum, repudiandae iure commodi obcaecati reprehenderit id
          laboriosam laudantium, esse quod. Aliquam, consequatur doloremque?
        </p>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </div>
      <div className="imagebox">
        <img src={Images} alt="" />
        <span>
          <h4>
            Lorem ipsum dolor sit, amet consectetur.
            <br />
            <button>Read More</button>
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
`;
export default Introcomponent;
