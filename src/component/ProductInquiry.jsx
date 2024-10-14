import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "reactstrap";
import { FaRupeeSign, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

import ProductImg from "../assets/images/products/default/1-1.jpg";
import Logo from "../assets/images/products/brand/brand-1.jpg";
import Counter from "./Counter";
import { toast , ToastContainer } from "react-toastify";
import { useEmail } from "./VerifyEmail";


const ProductInquiry = ({ data }) => {
  const { EmailVerify } = useEmail();
  const [count, setCount] = useState(1);
  const [modalShow, setModalShow] = React.useState(false);
  const user = localStorage.getItem('user')
  const [notLogin, setNotLogin] = useState(false)
  const checkLogin = async () => {
    if (user) {
      setNotLogin(false);

      try {
        // Send the request to update the cart
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/update/user-cart`,
          {
            userId: user, // Send the user's ID
            productId: data._id, // Send the product's ID
            quantity: count, // Send the selected quantity
          }
        );

        if(res.data.isOk)
        {
          console.log(res)
          // alert("mm")
          toast.success("Product added to cart successfully")
          setModalShow(false)
          setCount(1)
          EmailVerify();

        }
        else{
          setModalShow(false)
          setCount(1)
          toast.error("Something went wrong")
        }



        console.log("Cart updated", res.data);
      } catch (error) {
        console.error("Error updating cart", error);
      }
    } else {
      setNotLogin(true);
    }
  };

  return (
    <React.Fragment>
    

      <div className="item-card-hov" onClick={() => setModalShow(true)}>
        <i className="w-icon-cart"></i>
        <p>Add To Inquiry</p>
      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {data &&
            <Row className="modalRow">
              <Col lg={4}>
                <img src={`${process.env.REACT_APP_API_URL}/${data.productImage}`} alt="product" />
              </Col>
              <Col lg={8}>
                <h4>{data.productName}</h4>
                <div className="catagoryDiv">
                  <div>
                    <img className="brandLogo" src={`${process.env.REACT_APP_API_URL}/${data.brandName.logo}`} alt="logo" />
                  </div>
                  <div>
                    <div className="catagoryTitle">
                      <span>Category :</span>
                      {data.categoryName.categoryName}
                    </div>
                    <div className="catagoryTitle">
                      <span>SKU:</span>
                      {data.SKU}
                    </div>
                  </div>
                </div>
                <h4>
                  <FaRupeeSign /> {data.newPrice}
                </h4>

                <h5 className="remarkDescription">
                  *Remark: please select the quantity and submit an inquiry to
                  receive the best price.
                </h5>
                <hr className="hrTag" />
                <Row>
                  <Col lg={4}>
                    <div className="mainDivCounter">
                      {/* Button to increment the counter */}
                      <div> {count}</div>
                      <div className="increntBtn" onClick={() => setCount(count > 1 ? count - 1 : 1)}><AiFillMinusCircle /></div>
                      <div className="increntBtn" onClick={() => setCount(count + 1)}><AiFillPlusCircle /></div>

                      {/* Button to decrement the counter */}

                    </div>
                  </Col>
                  <Col lg={8}>
                    <button className="addInquiry" type="button" onClick={checkLogin}>
                      <FaShoppingBag /> Add To Inquiry
                    </button>
                  </Col>
                </Row>
                <Row className="mt-4">
                  {notLogin &&
                    <h5 className="remarkDescription">
                      Please Login before adding to cart <span ><Link to='/login' className="text-black">Click here to Login</Link></span>
                    </h5>
                  }

                </Row>
              </Col>
            </Row>
          }

        </Modal.Body>
      </Modal>
      {/* <ToastContainer position="top-right" autoClose={2000} /> */}
    </React.Fragment>
  );
};

export default ProductInquiry;
