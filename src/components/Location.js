import React from "react";
import Image from "../Assets/img/address.PNG";
import styled from "styled-components";
const Location = () => {
  return (
    <LocationStyle>
      <h2>REGISTERED OFFICE:</h2>
      <div className="flexbox">
        <div className="content">
          <h4>SHRI MURTI DEVI TRADING COMPANY</h4>
          <h4>BUILDING NO.2 VASUNDHARA RESIDENCY</h4>
          <h4>MUZAFFARNAGAR-251001,568811</h4>
          <h4>UTTAR PRADESH INDIA</h4>
        </div>
        <div className="image">
          <img src={Image} alt="" />
        </div>
      </div>
    </LocationStyle>
  );
};
const LocationStyle = styled.div`
  padding: 30px;
  color: white;
  padding-left: 10%;
  background-color: rgba(12, 114, 158, 1);
  .flexbox {
    display: flex;
    width: 80%;
    padding: 40px;
    .content {
      width: 40%;
      padding-right: 20px;
    }
    .image {
      width: 60%;
      img {
        width: 100%;
      }
    }
    @media screen and (max-width: 992px) {
      flex-direction: column;
      .content {
        width: 80%;
      }
      .image {
        width: 80%;
      }
    }
  }
`;
export default Location;
