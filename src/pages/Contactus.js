import React from "react";
import CoverImg from "../Assets/img/letters.jpg";
import styled from "styled-components";
import image from "../Assets/img/address.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutubeSquare,
  faWhatsapp,
  faTwitterSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
const Contactus = () => {
  return (
    <div>
      <ContactHeader
        style={{ backgroundImage: `url(${CoverImg})`, backgroundSize: "100%" }}
      >
        <h2>Home / Contact us</h2>
        <div className="line"></div>
      </ContactHeader>

      <Flexbox>
        <Formdiv>
          <h2>Message us</h2>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            onSubmit="submit"
          >
            <input type="hidden" name="form-name" value="contact" />

            <input type="text" name="name" placeholder="Enter Your Name" />
            <br />

            <input type="email" name="email" placeholder="Your Email" />
            <br />

            <input
              type="text"
              name="position"
              placeholder="Contact/Mobile No"
            />
            <br />

            <textarea id="" cols="30" rows="10" name="message">
              Comments
            </textarea>
            <br />
            <br />
            <input type="submit" name="btn" value="Submit" />
          </form>
        </Formdiv>
        <Socialmedia>
          <a href="https://wa.me/918126631053" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} className="icon3" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitterSquare} className="icon4" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookSquare} className="icon5" />
          </a>
        </Socialmedia>
      </Flexbox>
      <ContactInfo>
        <h4> Contact No.: +91-9997032478, +91-8126631053, +91-9310070808</h4>
        <h4> Email-Id: info@shrimurtidevi.com, smdtc@rediffmail.com</h4>
        <h4> WhatsApp : +91-8126631053</h4>
      </ContactInfo>
      <AddressBox>
        <div>
          <h2>Location</h2>
          <p>Building No.2, VASUNDHARA RESIDENCY, Uttar Pradesh 251001</p>
        </div>
        <div>
          <a href="https://www.google.com/maps/place/29%C2%B026'48.5%22N+77%C2%B042'48.0%22E/@29.4468022,77.7111348,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xfecbb2293a93abb4!8m2!3d29.4468022!4d77.7133235?hl=en">
            <img src={image} alt="" />
          </a>
        </div>
      </AddressBox>
    </div>
  );
};
const ContactInfo = styled.div`
  padding: 20px;
`;
const AddressBox = styled.div`
  color: white;
  background-color: rgba(12, 114, 158, 1);
  display: flex;
  padding: 90px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding: 10px;
    img {
      width: 100%;
    }
  }
`;
const Socialmedia = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 60px;
  padding-top:80px;
  font-size: 50px;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .icon1 {
    color: #0077b5;
    padding: 15px;
  }
  .icon2  {
  
    padding: 15px;
    border-radius: 5px;
    color: #ff0000;
  }
  .icon3 {
    color: #12db12;
    padding: 15px;
    align-item: center;
  }
  .icon4 {
    color: #1da1f2;
    padding: 15px;
  }
  .icon5 {
    color: #3b5998;
    padding: 15px;
  }
  .icon6 {
    padding: 15px;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
`;
const Flexbox = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 992px) {
    display: block;
  }
`;
const Formdiv = styled.div`
  width: 60%;
  padding: 90px;
  textarea {
    width: 60%;
    padding: 10px 20px;
    margin: 5px;
  }
  label {
    padding: 20px;
    margin: 20px;
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  input {
    width: 60%;
    margin: 5px;
    padding: 10px 20px;
  }
  input[type="submit"] {
    max-width: fit-content;
    font-size: 14px;
    font-weight: 400;
    margin-left: 155px;
    background-color: rgba(12, 114, 158, 1);
    color: white;
    border: none;
  }
`;
const ContactHeader = styled.div`
  height: 300px;
  h2 {
    color: white;
    padding-left: 20px;
    padding-top: 200px;
    margin: 0px;
  }
  .line {
    width: 10vw;
    height: 3px;
    border-radius: 3px;
    margin-left: 20px;
    background-color: rgba(12, 114, 158, 1);
    padding-left: 20px;
  }
`;
export default Contactus;
