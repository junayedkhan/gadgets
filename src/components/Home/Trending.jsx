import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Trending = () => {
  return (
    <div className="inner">
        <Container>
            <Row>
                <Col lg={3} md={6} sm={12} className="_mb_24">
                    <div className="tending_content">
                        <h6 className="title">#1 Hacus Habitasse</h6>
                        <hr className="block_divider"/>
                        <p className="description">
                            Neque egestas odio nisi congue quisque.
                        </p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="_mb_24">
                    <div className="tending_content">
                        <h6 className="title">#2 Natoque Penatibus</h6>
                        <hr className="block_divider"/>
                        <p className="description">
                            Ultrices tincidunt arcu non sodales vestibulum.
                        </p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="_mb__24">
                    <div className="tending_content">
                        <h6 className="title">#3 Tincidunt Ornare</h6>
                        <hr className="block_divider"/>
                        <p className="description">
                            Dignissim diam quis enim lobortis scelerisque.
                        </p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="_mb__24">
                    <div className="tending_content">
                        <h6 className="title">#4 Aliquam Sagittis</h6>
                        <hr className="block_divider"/>
                        <p className="description">
                            Venenatis cras sed felis eget aliquet commodo.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Trending;