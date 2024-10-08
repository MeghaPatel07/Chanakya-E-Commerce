import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "reactstrap";
import { FaRupeeSign, FaShoppingBag } from "react-icons/fa";

import ProductImg from "../assets/images/products/default/1-1.jpg";
import Logo from "../assets/images/products/brand/brand-1.jpg";
import Counter from "./Counter";

const ProductInquiry = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
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
          <Row className="modalRow">
            <Col lg={4}>
              <img src={ProductImg} alt="product" />
            </Col>
            <Col lg={8}>
              <h4>Thorium Neo 8 Wheels 55 Cm Small Cabin Trolley Bag Hard</h4>
              <div className="catagoryDiv">
                <div>
                  <img className="brandLogo" src={Logo} alt="logo" />
                </div>
                <div>
                  <div className="catagoryTitle">
                    <span>Category :</span>
                    Travaling Bags-Suitcase
                  </div>
                  <div className="catagoryTitle">
                    <span>SKU:</span>
                    CNK46891304
                  </div>
                </div>
              </div>
              <h4>
                <FaRupeeSign /> 4000.00
              </h4>

              <h5 className="remarkDescription">
                *Remark: please select the quantity and submit an inquiry to
                receive the best price.
              </h5>
              <hr className="hrTag" />
              <Row>
                <Col lg={4}>
                  <Counter />
                </Col>
                <Col lg={8}>
                  <button className="addInquiry" type="button">
                    <FaShoppingBag /> Add To Inquiry
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ProductInquiry;
