import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialShare from '../components/SocialShare';

const Footer = () => {
  return (
    <footer className="footer_section">
        <div className="inner">
            <Container>
                <Row className="gy-5">
                    <Col lg={3} md={6} sm={12}>
                    <div className="widget_area_1">
                        <figure className="image">
                            <img loading="lazy"
                                src="https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/logo-light.svg"
                                alt="" width="150" height="35" />
                        </figure>
                        <p>Cras gravida bibendum dolor eu varius morbi fermentum velit eget vehicula lorem sodales donec
                            quis volutpat orci.</p>
                        <SocialShare />
                    </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                    <div className="widget_area_2">
                        <h6 className="heading">USEFUL LINKS</h6>
                        <ul>
                            <li>
                                <Link className="link" to="#">About Us</Link>
                            </li>
                            <li>
                                <Link className="link" to="#">Contact Us</Link>
                            </li>
                            <li>
                                <Link className="link" to="#">Products</Link>
                            </li>
                            <li>
                                <Link className="link" to="#">Login</Link>
                            </li>
                            <li>
                                <Link className="link" to="#">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                    <div className="widget_area_3">
                        <h6 className="heading">CUSTOM AREA</h6>
                        <ul>
                            <li>
                                <Link className="link" to="#">My Account</Link>
                            </li>
                            <li>
                                <Link className="link" to="#">Tracking List</Link>
                            </li>
                            <li>
                                <Link className="link" to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className="link" to="#">Orders</Link>
                            </li>
                            <li>
                                <Link className="link" to="#">My Cart</Link>
                            </li>
                        </ul>
                    </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                    <div className="widget_area_4">
                        <h6 className="heading">MORE INFORMATION</h6>
                        <p>
                            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus
                        </p>
                        <figure className="image">
                            <img loading="lazy"
                                src="https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/payment-icons.svg"
                                alt="" width="225" height="21" />
                        </figure>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="copyright">
            <Container>
                <div className="footer_copyright" data-id="copyright">
                    Copyright © 2022 - All rights reserved by 
                    <Link to="/" className="link"> Junayed Khan</Link>
                </div>
            </Container>
        </div>
    </footer>
  )
}

export default Footer;