import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { BiPlus, BiMinus, BiBell } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment, decrement, remove, clearCart } from '../../redux/slice/CartSlice';

const Index = () => {

const cartItems = useSelector(state => state.cart.cartItems)
const dispatch = useDispatch()
const totalAmounts = cartItems.reduce((previousValue, currentValue) => {
    return currentValue.price * currentValue.quantity + previousValue
}, 0)

return (
    <section className="cart_page">
        <div className="breadcrumb_section">
            <div className="inner">
                <Breadcrumb>
                    <Breadcrumb.Item className="breadcrumb_item" href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active href="Products" className="breadcrumb_item">
                        Cart
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="page_title">
                    <h2>Cart</h2>
                </div>
            </div>
        </div>
        <Container>
            <div className="cart_from">
                {cartItems.length === 0 ? 
                    <div>
                        <p className="cart_empty"><BiBell className='icon'/> Your cart is currently empty.</p>
                        <Link to={"/products"} className='cart_empty_btn'>Return to shop</Link>
                    </div> :
                    <Row>
                        <Col lg={8} md={12} sm={12}>
                        <Table responsive className="shop_table">
                            <thead>
                                <tr>
                                    <th className="product_name" colSpan={2}>Product</th>
                                    <th className="product_quantity">Quantity</th>
                                    <th className="product_subtotal">Subtotal</th>
                                    <th className="product_remove">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => {
                                return(
                                <tr key={index}>
                                    <td className="product_thumbnail">
                                        <img src={item.img} alt={item.title} />
                                    </td>
                                    <td className="product">
                                        <p className="name">{item.title}</p>
                                        <p className="price">{item.price}</p>
                                    </td>
                                    <td className="product_quantity">
                                        <div className="inner">
                                            <span className="increase" onClick={()=> dispatch(increment(item.link))}
                                                >
                                                <BiPlus />
                                            </span>
                                            <span className="decrease" onClick={()=> dispatch(decrement(item.link))}
                                                >
                                                <BiMinus />
                                            </span>
                                            <p className='quantity'>{item.quantity}</p>
                                        </div>
                                    </td>
                                    <td className="product_subtotal">
                                        <span>${item.price * item.quantity}</span>
                                    </td>
                                    <td className="product_remove">
                                        <span onClick={()=> dispatch(remove(item.link))}>
                                            <MdDelete /></span>
                                    </td>
                                </tr>
                                )
                                })}
                            </tbody>
                        </Table>
                        <div className="coupon">
                            <input type="text" name="coupun" id="coupon" placeholder="Coupon code" />
                            <button>Apply coupon</button>
                        </div>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                        <div className="cart_totals ">
                            <h2>Cart totals</h2>
                            <div className="shop_table">
                                <div className="cart_subtotal">
                                    <p data-title="name">Subtotal</p>
                                    <p data-title="Subtotal">
                                        <span className="amount">
                                            <span className="currencySymbol">$</span>{totalAmounts.toFixed(2)}</span>
                                    </p>
                                </div>
                                <div className="order_total">
                                    <p data-title="name">Total</p>
                                    <p data-title="total">
                                        <span className="amount">
                                            <span className="currencySymbol">$</span>{totalAmounts.toFixed(2)}</span>
                                    </p>
                                </div>
                            </div>
                            <button className="checkout">
                                Proceed to checkout
                            </button>
                        </div>
                        </Col>
                    </Row>
                }
            </div>
        </Container>
    </section>
  )
}

export default Index;