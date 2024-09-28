import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FilterSec from '../component/FilterSec'
import img1 from "../assets/images/home/products/p-01.jpg";
import "../assets/css/productlist.css";
import ProductCard from '../component/ProductCard';
const ProductList = () => {
  return (
    <div className="container">
      <Row>
        <Col
          lg={0}
          className="d-none d-lg-block"
        >
          <div className='d-flex justify-content-between'>
            <p style={{fontWeight:"bolder", cursor:"default"}}>Filters :</p>
            <p style={{cursor:"pointer"}}>Clean All</p>
          </div>
          <div>
            <FilterSec/>
          </div>
        </Col>
        <Col lg={9} md={12}>
          <Row>
          <div className='dis-flex-end'>
      <div class="toolbox-item toolbox-show select-box" style={{width:"215px"}}>
        <label>Sort By :</label>
        <select name="orderby" class="form-control">
          <option value="default" selected="selected">
            Default sorting
          </option>
          <option value="popularity">Sort by A to Z</option>
          <option value="rating">Sort by Z to A</option>
        </select>
      </div>
      </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ProductList