import React, { useState } from 'react'
import { FaSpinner, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/CartSlice';
import { useSelector} from 'react-redux';

const Porduct = ({ img, title, price, meta, link }) => {

const cartItems = useSelector(state => state.cart.cartItems)
const [loading, setLoading] = useState(false)
const [viewbutton, setViewbutton] = useState(false)
const [addbutton, setAddbutton] = useState(true)
const dispatch = useDispatch()

const loader = () => {
    setLoading(true)
    dispatch(addToCart({img, title, price, meta, link, }))
    const data = cartItems.filter(item => item.link)
    if(data){
        setInterval(() => {
            setLoading(false)
            setAddbutton(false)
            setViewbutton(true)
        }, 1000);
    }
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