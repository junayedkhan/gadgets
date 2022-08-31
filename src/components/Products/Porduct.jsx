import React, { useState } from 'react'
import { FaSpinner, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Porduct = ({ img, title, price, meta, link }) => {

const [loading, setLoading] = useState(false)
const [viewbutton, setViewbutton] = useState(false)
const [addbutton, setAddbutton] = useState(true)

const loader = () => {
    setLoading(true)
    setInterval(() => {
        setLoading(false)
        setViewbutton(true)
        setAddbutton(false)
    }, 3000);
}

return (
    <div className="single_product">
        <div className="img">
            <Link to={`/products/${link}`}>
                <img src={img} alt={title}/>
            </Link>
        </div>
        <div className="product_title">
            <Link to={`/products/${link}`}>
                <h2>{title}</h2>
            </Link> 
        </div>
        <div className="product_price">
            <span>${price}</span>
        </div>
        <div className="product_meta">
            <span>{meta}</span>
        </div>
        <div className="add_to_cart_btn">
            {addbutton && 
            <button onClick={loader}>
                Add to cart
                {loading && <i className="loader"><FaSpinner className="loading" /></i>}
            </button>}
            {viewbutton && 
            <Link to={"/cart"}><button>View cart</button></Link>}
            <Link to={''}><button className="wishlist_button"><FaRegHeart className="icon" /></button></Link>
        </div>
    </div>
)
}

export default Porduct;