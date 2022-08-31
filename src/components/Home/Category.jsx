import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import category_1 from "../../assets/image/category-laptops.png"
import category_2 from "../../assets/image/category-drones-2.png"
import category_3 from "../../assets/image/category-phones.png"
import category_4 from "../../assets/image/category-gaming.png"

const Category = () => {
  return (
    <div className="content">
        <Container>
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <div className="category_1">
                        <h5 className="category_heading">Laptops</h5>
                        <p className="category_number">275</p>
                        <div className="category_img" style={{backgroundImage: `url(${category_1})`}}></div>
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="category_2">
                                <h5 className="category_heading">Drones</h5>
                                <p className="category_number">25</p>
                                <div className="category_img" style={{backgroundImage: `url(${category_2})`}}></div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="category_3">
                                <h5 className="category_heading">Smartphones</h5>
                                <p className="category_number">273</p>
                                <div className="category_img" style={{backgroundImage: `url(${category_3})`}}></div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="category_4">
                                <h5 className="category_heading">Gaming</h5>
                                <p className="category_number">25</p>
                                <div className="category_img" style={{backgroundImage: `url(${category_4})`}}></div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Category;