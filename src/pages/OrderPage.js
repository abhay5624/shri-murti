import React from "react";
import Image from "../Assets/img/old-books.jpg";
import styled from "styled-components";
const OrderPage = () => {
  return (
    <Orderstyle>
      <div
        style={{ backgroundImage: `url(${Image})`, backgroundSize: "100%" }}
        className="header"
      >
        <h4>Home / Order</h4>
      </div>

      <div className="form">
        <h2>Order</h2>
        <div className="flexbox">
          <div className="formbox">
            <form
              name="order"
              method="post"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="name" placeholder="Enter Your name" />
              <br />
              <input
                type="text"
                name="address"
                placeholder="Enter Your Address"
              />
              <br />
              <input
                type="number"
                name="phonenumber"
                id=""
                placeholder="Enter Your Number"
              />
              <br />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter Your Email"
              />
              <br />
              <textarea name="order" id="" cols="30" rows="10">
                Enter your Order details
              </textarea>
              <br />
              <input type="submit" value="Order" />
            </form>
          </div>
          <div className="paymentId">
            <h3>Account Holder: SHRI MURTI DEVI TRADING COMPANY</h3>
            <h3>Account Number: 50200058539022</h3>
            <h3>IFSC: HDFC0000381</h3>
            <h3>Branch: Muzzaffar Nagar - Uttar Pradesh</h3>
            <h3>Virtual Payment Address: shrimurti@hdfcbank</h3>
          </div>
        </div>
      </div>
    </Orderstyle>
  );
};
const Orderstyle = styled.div`
  .flexbox {
    display: flex;
    flex-direction: row;
    width: 100%;
    @media screen and (max-width: 992px) {
      display: block;
      .paymentId {
        width: 80%;
      }
      .formbox {
        width: 80%;
      }
      h3 {
        font-size: 12px;
      }
    }
    .formbox {
      width: 60%;
      input {
        width: 80%;
        padding: 10px 20px;
        margin: 10px;
      }
      textarea {
        margin: 10px;
        width: 80%;
        padding: 10px 20px;
      }
      input[type="submit"] {
        max-width: fit-content;
        font-size: 14px;
        font-weight: 400;
        margin-left: 10px;
        background-color: rgba(12, 114, 158, 1);
        color: white;
        border: none;
      }
    }
    .paymentId {
      width: 40%;
      h3 {
        font-weight: 400;
      }
    }
  }
  .form {
    width: 80%;
    padding: 10%;
    padding-top: 3%;
  }
  .header {
    width: 100%;
    min-height: 250px;
    margin: 0px;
    h4 {
      margin: 0px;
      position: absolute;
      color: white;
      top: 200px;
      left: 50px;
    }
  }
`;

export default OrderPage;
