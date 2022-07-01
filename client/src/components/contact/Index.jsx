import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import RecentProdcuts from '../Products/RecentProdcuts';

const Index = () => {
  return (
    <section className="contact_page">
        <div className="breadcrumb_section">
            <div className="inner">
                <Breadcrumb>
                    <Breadcrumb.Item className="breadcrumb_item" href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active href="Products" className="breadcrumb_item">
                        Contact
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="page_title">
                    <h2>Contact Us</h2>
                </div>
            </div>
        </div>
        <Container>
            <div className="address">
                <Row>
                    <Col lg={4} md={12} sm={12} className="mb_50">
                        <div className="item">
                            <div className="heading">
                                <i className="heading_icon"><IoLocationSharp /></i>
                                <h6 className="heading_text">Physical Address</h6>
                            </div>
                            <ul className="address_list">
                                <li className="address_text">304 North Cardinal St.</li>
                                <li className="address_text">Dorchester Center, MA 02124</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb_50">
                        <div className="item">
                            <div className="heading">
                                <i className="heading_icon"><FaPhoneAlt /></i>
                                <h6 className="heading_text">Phone Numbers</h6>
                            </div>
                            <ul className="address_list">
                                <li className="address_text">1-555-123-4567</li>
                                <li className="address_text">1-800-123-4567</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <div className="item">
                            <div className="heading">
                                <i className="heading_icon"><MdEmail /></i>
                                <h6 className="heading_text">Email Address</h6>
                            </div>
                            <ul className="address_list">
                                <li className="address_text">info@company.com</li>
                                <li className="address_text">contact@company.com</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="contact">
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <div className="google_map">
                            <iframe
                                title='map'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703724756!2d90.27923971281079!3d23.78057325785754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8abd1986c19%3A0x14e06df6918d8844!2sBangladesh%20National%20Parliament!5e0!3m2!1sen!2sbd!4v1656561485851!5m2!1sen!2sbd"
                                width="100%" 
                                height="700" 
                                style={{"border" : "0"}}
                                allowfullscreen="false" 
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"> 
                            </iframe>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} >
                        <div className="contact_area">
                            <div className="inner">
                                <div className="heading">
                                    <h3 className="heading_text">Send us a message</h3>
                                    <p className="subheading">
                                        Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Magna sit amet purus gravida quis blandit turpis cursus in.
                                    </p>
                                </div>
                                <form className="contact_form">
                                    <Row className="gy-4">
                                        <Col lg={6} md={6} sm={6}>
                                            <input type="text" name="fastName" id="name" placeholder="Fast Name *" />
                                        </Col>
                                        <Col lg={6} md={6} sm={6}>
                                            <input type="text" name="lastName" id="name" placeholder="Last Name *" />
                                        </Col>
                                        <Col lg={6} md={6} sm={6}>
                                            <input type="email" name="email" id="email" placeholder="Your Email *" />
                                        </Col>
                                        <Col lg={6} md={6} sm={6}>
                                            <input type="text" name="number" id="number" placeholder="Your Phone Number" />
                                        </Col>
                                        <Col lg={12} md={12} sm={12}>
                                            <input type="text" name="subject" id="subject" placeholder="Subject *" />
                                        </Col>
                                        <Col lg={12} md={12} sm={12}>
                                            <textarea name="comment" id="textarea" cols="45" rows="8" placeholder="Massage *">
                                            </textarea>
                                        </Col>
                                    </Row>
                                    <button className="submit_button">Send Massage</button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <RecentProdcuts />
        </Container>
    </section>
  )
}

export default Index;