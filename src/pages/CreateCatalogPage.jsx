import React from "react";
import { Col, Container, Row } from "reactstrap";
import { FaEye } from "react-icons/fa";
import { IoCreateOutline  } from "react-icons/io5";

import ProductImg from "../assets/images/categories/category-1.jpg";
import Form from "react-bootstrap/Form";

const CreateCatalogPage = () => {
  const categoryData = [
    {
      productName: "Prouct 1",
      category: "category 1",
      img: ProductImg,
    },
    {
      productName: "Prouct 1",
      category: "category 1",
      img: ProductImg,
    },
    {
      productName: "Prouct 1",
      category: "category 1",
      img: ProductImg,
    },
    {
      productName: "Prouct 1",
      category: "category 1",
      img: ProductImg,
    },
  ];
  return (
    <React.Fragment>
      <Container>
        <Row className="pt-4 pb-4">
          <Col lg={4}>
            <Form.Select
              className="selector"
              aria-label="Default select example"
            >
              <option>All Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col lg={4}>
            <Form.Select
              className="selector"
              aria-label="Default select example"
            >
              <option>Sub Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col lg={4}>
            <input className="qtyInput" type="text" placeholder="Qty" />
          </Col>
        </Row>
        <Row className="pt-4 pb-4">
          <Col lg={4}>
            <input className="qtyInput" type="text" placeholder="Start" />
          </Col>
          <Col lg={4}>
            <input className="qtyInput" type="text" placeholder="End" />
          </Col>
          <Col lg={4}>
            <button className="viewBtn" type="button">
              View <FaEye />
            </button>
          </Col>
        </Row>
        <Row className="pt-4 pb-4">
          <div className="allCategoryDiv">
            <input type="checkbox" /> <span>Select All Category</span>
          </div>
          {categoryData?.map((data) => (
            <Col className="pt-4" lg={3} md={4} sm={6}>
              <div className="item-card">
                <div className="allCategoryDiv checkBoxDiv ">
                  <input className="" type="checkbox" />
                </div>

                <img src={data.img} alt="" />
                <div className="productTitle">{data.productName}</div>
                <div className="categoryTitle">{data.category}</div>
                {/* <div className='item-card-hov'>
                            <i className="w-icon-cart"></i>
                            <p>Add To Inquiry</p>
                          </div> */}
              </div>
            </Col>
          ))}
          <div className="categoryDiv pt-4">
            <button className="viewBtn" type="button">
              Create Catalog <IoCreateOutline  />

            </button>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CreateCatalogPage;
