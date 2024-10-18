import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import { Container, Row, Col } from 'reactstrap';

const CategoryPage = () => {
    const [CategoryData, setCategoryData] = useState([])
    const fetchData = async () => {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/auth/list/CategoryMaster`
        )
        setCategoryData(res.data)
        console.log(res)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main className="main">
            {/* Start of Breadcrumb */}
            <nav className="breadcrumb-nav mb-10">
                <Container>
                    <ul className="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Product</Link></li>
                        <li>All Categories</li>
                    </ul>
                </Container>
            </nav>
            {/* End of Breadcrumb */}

            <Container className="pb-5">
                <Row>
                    <Col lg="12">
                        <Row className="category-wrapper cols-12 cols-md-2 cols-xs-2  cols-lg-7 cols-xl-9 pt-4 align-items-center">
                            {CategoryData.map((category, index) => (

                                <div key={index} xs="6" md="6" lg="4" xl="3" className="category  category-ellipse mb-5">
                                    <div className="category-media">
                                        <Link to="#">
                                            <img
                                                src={`${process.env.REACT_APP_API_URL}/${category.logo}`}
                                                alt={category.categoryName}
                                                width="190"
                                                height="190"
                                            />
                                        </Link>
                                    </div>
                                    <div className="category-content">
                                        <h4 className="category-name">
                                            <Link to="#">{category.categoryName}</Link>
                                        </h4>
                                    </div>
                                </div>

                            ))}



                        </Row>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default CategoryPage;
