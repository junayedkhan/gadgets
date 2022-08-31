import React from 'react'
import { Link } from "react-router-dom"
import {
    FaFacebookF,
    FaYoutube,
    FaTwitter,
    FaLinkedinIn
} from "react-icons/fa";

const SocialShare = () => {
  return (
    <div className="social_share">
        <Link to={"#"} className="social_link">
            <i className="icon"><FaFacebookF /></i>
        </Link>
        <Link to={"#"} className="social_link">
            <i className="icon"><FaYoutube /></i>
        </Link>
        <Link to={"#"} className="social_link">
            <i className="icon"><FaTwitter /></i>
        </Link>
        <Link to={"#"} className="social_link">
            <i className="icon"><FaLinkedinIn /></i>
        </Link>
    </div>
  )
}

export default SocialShare;