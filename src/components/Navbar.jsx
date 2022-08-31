import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import {
    FaSearch,
    FaShoppingCart
} from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SocialShare from './SocialShare';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const [ isOpen, setIsOpen ] = useState(false)
    const openmenu = () => setIsOpen(!isOpen)

    const nav_link = [
        {link: "/", name: "Home"},
        {link: "/products", name: "products"},
        {link: "/about", name: "about Us"},
        {link: "/blogs", name: "blog"},
        {link: "/contact", name: "contact"}
    ]

    return (
    <header className="nav_bar">
        <div className="dekstop_menu">
            <Container>
                <div className="nav_inner">
                    <div className="site_logo">
                        <Link to={"/"} className="site_link">
                        {/* <BsFillMouseFill className="icon" />
                        <h2 className="site_name">Gadgets</h2> */}
                            <figure>
                                <img 
                                    loading="lazy" 
                                    src="https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/logo-light.svg" 
                                    alt="" 
                                    width="150" 
                                    height="35" 
                                />
                            </figure>
                        </Link>
                    </div>
                    <nav className="nav">
                        {nav_link.map((item, index) => {
                        return(
                        <NavLink to={item.link} className={"nav_link"} key={index}>{item.name}
                        </NavLink>
                        )
                        })}
                    </nav>
                    <div className="action_button">
                        <i className="search_btn">
                            <FaSearch /></i>
                        <Link to={"/cart"}>
                            <i className="cart_btn">
                                <FaShoppingCart />
                                <span className={cartItems.length === 0 ? "d-none" : "badge"}>{cartItems.length}</span>
                            </i>
                        </Link>
                        <i className="menu_btn" onClick={openmenu}>
                            <AiOutlineMenu /></i>
                    </div>
                </div>
            </Container>
        </div>
        <div className={isOpen===false ? "mobile_menu" : "mobile_menu active" }>
            <div className="action_btn">
                <i className="close_btn" onClick={openmenu}>
                    <AiOutlineClose /></i>
            </div>
            <div className="nav_inner">
                <div className="site_logo">
                    <Link to={"/"} className="site_link" onClick={openmenu}>
                        <figure>
                            <img 
                                loading="lazy" 
                                src="https://demo.creativethemes.com/blocksy/gadgets/wp-content/uploads/2022/05/logo-light.svg" 
                                alt="" 
                                width="150" 
                                height="35" 
                            />
                        </figure>
                    </Link>
                </div>
                <nav className="nav">
                    {nav_link.map((item, index) => {
                    return(
                        <NavLink 
                            to={item.link} 
                            className={"nav_link"} 
                            key={index}
                            onClick={openmenu}
                            >
                            {item.name}
                        </NavLink>
                    )
                    })}
                </nav>
                <SocialShare />
            </div>
        </div>
        {isOpen ? <div onClick={openmenu} className="overlay"></div> : null}
    </header>
  )
}

export default Navbar;