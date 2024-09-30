import React from 'react'
import img1 from "../assets/images/home/products/p-01.jpg";
import "../assets/css/productlist.css";
import { Col, Row } from 'react-bootstrap'
const ProductCard = () => {
  return (
    <Col lg={3} md={4} sm={6}>
                        <div className='item-card'>
                            <img src={img1} alt="" />
                            <p>Thorium Neo 8 Wheels 55</p>
                            <p>Safari</p>
                            <div className='item-card-hov'>
                            <i className="w-icon-cart"></i>
                                <p>Add To Inquiry</p>
                            </div>
                        </div>
                        </Col>
  )
}

export default ProductCard