import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import product_2 from "../../assets/image/product-2.png"
import { BiPlus, BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const index = () => {
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
                <Row>
                    <Col lg={8} md={12} sm={12}>
                        <Table responsive tableBorderless className="shop_table">
                            <thead>
                                <tr>
                                    <th className="product_name" colSpan={2}>Product</th>
                                    <th className="product_quantity">Quantity</th>
                                    <th className="product_subtotal">Subtotal</th>
                                    <th className="product_remove">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="product_thumbnail">
                                        <img src={product_2} alt="" />
                                    </td>
                                    <td className="product">
                                        <p className="name">AirPods Pro</p>
                                        <p className="price">$120.00</p>
                                    </td>
                                    <td className="product_quantity">
                                        <div className="inner">
                                            <span className="increase"><BiPlus /></span>
                                            <span className="decrease"><BiMinus /></span> 
                                            <input type="text" name="number" id="number" value={5} />
                                        </div>         
                                    </td>
                                    <td className="product_subtotal">
                                        <span>$120.00</span>
                                    </td>
                                    <td className="product_remove">
                                        <span><MdDelete /></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="product_thumbnail">
                                        <img src={product_2} alt="" />
                                    </td>
                                    <td className="product">
                                        <p className="name">AirPods Pro</p>
                                        <p className="price">$120.00</p>
                                    </td>
                                    <td className="product_quantity">
                                        <div className="inner">
                                            <span className="increase"><BiPlus /></span>
                                            <span className="decrease"><BiMinus /></span> 
                                            <input type="text" name="number" id="number" value={5} />
                                        </div>         
                                    </td>
                                    <td className="product_subtotal">
                                        <span>$120.00</span>
                                    </td>
                                    <td className="product_remove">
                                        <span><MdDelete /></span>
                                    </td>
                                </tr>
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
                                    <span className="currencySymbol">$</span>2,471.00</span>
                                </p>
                            </div>
                            <div className="order_total">
                                <p data-title="name">Total</p>
                                <p data-title="total">
                                    <span className="amount">
                                    <span className="currencySymbol">$</span>2,471.00</span>
                                </p>
                            </div>
                        </div>
                        <button className="checkout">
                            Proceed to checkout
                        </button>
                    </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default index;