import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import {
  FaTruckMoving,
  FaHandHoldingUsd,
  FaLock,
  FaPlayCircle
} from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import hero_img_1 from "../../assets/image/home_hero_image.jpg"
import { Link } from 'react-router-dom';

const Hero = () => {

const b_block = [
  {
    icon: <FaTruckMoving />,
    title: "Free Shipping",
    subtitle: "Free shipping on all US orders"
  },
  {
    icon: <FaHandHoldingUsd />,
    title: "100% Money Back",
    subtitle: "You have 10 days to return"
  },
  {
    icon: <BsClockHistory />,
    title: "Support 24/7",
    subtitle: "Contact us 24 hours a day"
  },
  {
    icon: <FaLock />,
    title: "100% Payment Secure",
    subtitle: "Your payment are safe with us"
  }
]

return (
  <Container style={{position: "relative"}}>
    <Row>
      <Col xl={6} lg={12} md={12} sm={12}>
        <div className="left_side">
          <span className="subtitle">From $999</span>
          <h2 className="title">iPhone 12 Pro</h2>
          <div className="button_group">
            <div>
              <a href="#something">
                <button className="button_1">Buy Now</button>
              </a>
            </div>
            <div>
              <a href="#something" className="button_2">
                <FaPlayCircle className="icon" /> Watch Now
              </a>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} className="_mt_120">
        <div className="right_side">
          <figure className="thumbnail">
            <img className="hero_img" src={hero_img_1} alt="Thumbnail" />
          </figure>
        </div>
      </Col>
    </Row>
    <Row className="b_block">
      {b_block.map((item, index) => {
        return(
        <Col lg={3} md={6} sm={12} className="block_content" key={index}>
          <div className="item_1">
            <i className="icon">{item.icon}</i>
          </div>
          <div className="item_2">
            <h6 className="title">{item.title}</h6>
            <p className="subtitle">{item.subtitle}</p>
          </div>
        </Col>
        )
      })}
    </Row>
  </Container>
  
  // <div className="inner">
  //   <Container style={{position: "relative"}}>
  //     <div className="content">
  //         <div className="left_side">
  //           <div className="text_content">
  //             <span className="subtitle">From $999</span>
  //             <h2 className="title">iPhone 12 Pro</h2>
  //           </div>
  //           <div className="button_group">
  //             <Link to={""}>
  //               <button className="button">Buy Now</button>
  //             </Link>
  //             <Link to={""} className="link">
  //               <span><FaPlayCircle/></span>
  //               <span>Watch Now</span>  
  //             </Link>
  //           </div>
  //         </div>
  //         <div className="right_side">
  //           <figure className="image">
  //             <img className="hero_img" src={hero_img_1} alt="" />
  //           </figure>
  //         </div>
  //     </div>
  //   </Container>
  // </div>
)
}

export default Hero;