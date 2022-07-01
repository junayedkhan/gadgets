import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import CountUp from "react-countup";
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { BsPlayFill, BsXLg } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
const about_img = "https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/about-us-team-2048x945.webp"

const testimonials = [
    {
        id: 1,
        author_name: "Frank McDonald",
        author_work: "IT Specialist",
        author_img: "",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique egestas."
    },
    {
        id: 2,
        author_name: "Frank McDonald",
        author_work: "IT Specialist",
        author_img: "",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique egestas."
    },
    {
        id: 3,
        author_name: "Frank McDonald",
        author_work: "IT Specialist",
        author_img: "",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique egestas."
    },
    {
        id: 4,
        author_name: "Frank McDonald",
        author_work: "IT Specialist",
        author_img: "",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique egestas."
    }
]

const Index = () => {

    const [isOpen, setIsopen] = useState(false)
    const open = () => setIsopen(!isOpen)

    return (
        <section className="about_page">
            <div className="breadcrumb_section">
                <div className="inner">
                    <Breadcrumb>
                        <Breadcrumb.Item className="breadcrumb_item" href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active href="Products" className="breadcrumb_item">
                            About Us
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="page_title">
                        <h2>About Us</h2>
                    </div>
                </div>
            </div>
            <Container>
                <div className="about_content">
                    <figure className="about_img">
                        <img src={about_img} alt="" className="img" />
                    </figure>
                    <div className="about_text">
                        <Row className="gx-0">
                            <Col lg={3} md={6} sm={12} className="item">
                                <h5 className="title">Amber Murphy</h5>
                                <p className="subtitle">Founder & Directo</p>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>  
                            </Col>
                            <Col lg={3} md={6} sm={12} className="item">
                                <h5 className="title">Aaron Foster</h5>
                                <p className="subtitle">Marketing & Partnerships</p>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing.</p> 
                            </Col>
                            <Col lg={3} md={6} sm={12} className="item">                            
                                <h5 className="title">Beatrice Carpenter</h5>
                                <p className="subtitle">Finance & Legal</p>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="item">        
                                <h5 className="title">Terry Banks</h5>
                                <p className="subtitle">Support & Care</p>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                            </Col>
                        </Row>
                    </div>
                    <div className="counter">
                        <div className="counter_heading">
                            <h2 className='heading_text'>
                                Quisque Scelerisque Nisi Sodales <br />
                                Duis Nonrisus Vel Imperdiet
                            </h2>
                        </div>
                        <div className="counter_item">
                            <Row className="gy-5">
                                <Col lg={4} md={4} sm={12}>
                                    <div className="item">
                                        <h2 className="number"><CountUp start={0} end={3000} enableScrollSpy /></h2>
                                        <p className="text">Gadgets sold</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="item">
                                        <h2 className="number"><CountUp start={0} end={2500} enableScrollSpy /></h2>
                                        <p className="text">Happy clients</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="item">
                                        <h2 className="number"><CountUp start={0} end={100} enableScrollSpy />%</h2>
                                        <p className="text">Satisfaction rate</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="subtitle">
                            <p className="subtitle_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat. Ullamcorper
                                malesuada proin libero nunc consequat interdum varius.
                            </p>
                        </div>
                    </div>
                    <div className="button_group">
                        <Link className='link' to={"/products"}>Shop Now</Link>
                        <Link className='link' to={"/contacts"}>Contacts Us</Link>
                    </div>
                </div>
            </Container>
            <div className="video_section">
                <figure className="video_thumb">
                    <img src="https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/about-page-video-background.webp"
                        alt="" 
                        className="img"
                    />
                    <button className="play_button" onClick={open}>
                        <BsPlayFill className="icon" />
                    </button>
                </figure>
                <div className= {isOpen ? "react_model active" : "react_model"}>
                    {open ? <div onClick={open} className="overlay"></div> : null}
                    <button className="close_button"  onClick={open}><BsXLg className="icon"/></button>
                    <div className="react_model_inner">
                        <ReactPlayer 
                            width="100%"
                            height="100%"
                            url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                            controls
                            playing={isOpen ? true : false}
                        />
                    </div>
                </div>
            </div>
            {/* <div className="client_section">
                <Container>
                    <Row>
                        <Col lg={2} md={4} sm={6} xs={6}>
                        <figure className="item">
                            <img src="https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/brand-1.webp"
                                alt="" />
                        </figure>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={6}>
                        <figure className="item">
                            <img src="https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/brand-2.webp"
                                alt="" />
                        </figure>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={6}>
                        <figure className="item">
                            <img src="https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/brand-3.webp"
                                alt="" />
                        </figure>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={6}>
                        <figure className="item">
                            <img src="https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/brand-4.webp"
                                alt="" />
                        </figure>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={6}>
                        <figure className="item">
                            <img src="https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/brand-5.webp"
                                alt="" />
                        </figure>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={6}>
                        <figure className="item">
                            <img src="https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/brand-6.webp"
                                alt="" />
                        </figure>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            <div className="testimonials">
                <Container>
                    <div className="testimonials_heading">
                        <h2 className="heading_text">Testimonials</h2>
                    </div>
                    <Row className='_mb_50'>
                        {testimonials.map((item) => {
                            return(
                                <Col lg={6} md={6} sm={12} key={item.id} className="_mb_24">
                                    <div className="item">
                                        <figure className="author_img">
                                            <img className="img" src="https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/testimonial-user-3.webp" alt="" />
                                        </figure>
                                        <div className="review">
                                            <p className="desc">
                                                {item.review}
                                            </p>
                                            <h6 className="author_name">{item.author_name}</h6>
                                            <p className="author_work">{item.author_work}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                    <div className="all_reviews_button">
                        <button className="button">
                            <Link to={"/reviews"} className="link">See All Reviews <FaArrowRight className="icon" /></Link>
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Index;