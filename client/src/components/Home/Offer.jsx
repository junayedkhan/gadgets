import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ipad from "../../assets/image/ipad.png"

const Offer = () => {
  return (
    <Container>
        <Row>
            <Col lg={8} md={7} sm={12} className="left_side _mb_50">
                <div className="image" >
                    <img src={ipad} alt="" />
                </div>
                <div className="toltip">
                    <p className="title">Super Powerful Chip</p>
                    <p className="description">
                        Pellentesque pulvinar habitant morbi tristique maecenas.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={5} sm={12} className="right_side">
                <div className="content">
                    <p className="subtitle">From $1099</p>
                    <h2 className="title">iPad Pro</h2>
                    <p className="description">
                        Libero nunc consequat interdum <br />
                        Varius sitamet mattis vulputate <br />
                        Ultricies mieget mauris pharetra
                    </p>
                    <div className="button_group">
                        <button className="button">Buy Now</button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Offer;