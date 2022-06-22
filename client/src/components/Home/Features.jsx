import React from 'react'
import { Container } from 'react-bootstrap';
import {
    FaPlayCircle
  } from "react-icons/fa";
import oculus_img from "../../assets/image/oculus-img.png"

const Offer = () => {
  return (
    <Container>
        <div className="inner">
            <div className="text_content">
                <h2 className="Product_name">
                    Oculus VR
                </h2>
                <div className="description">
                    Ullamcorper malesuada proin libero nunc consequat interdum varius consequat mauris nunc congue nisi vitae.
                </div>
                <div className="button_group">
                    <div>
                        <a href="#something">
                            <button className="button_1">View offer</button>
                        </a>
                    </div>
                    <div>
                        <a href="#something" className="button_2">
                            <FaPlayCircle className="icon" /> Watch video
                        </a>
                    </div>
                </div>
            </div>
            <div className="img_content">
                <img src={oculus_img} className="product_img" alt="" />
            </div>
        </div>
    </Container>
  )
}

export default Offer;