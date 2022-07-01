import React, { useState } from 'react'
import { BiPlus, BiMinus } from "react-icons/bi";
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useGetProductQuery } from '../../redux/features/api/apiSlice';
import RelatedPrloducts from './RelatedPrloducts';
import img_01 from "../../assets/image/article-image-5.jpg";

export const ProductDetails = () => {

  const { productId } = useParams()
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
  } = useGetProductQuery(productId)

  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0)
  const [data, setData] = useState([])

  const [state, setState] = useState({
    name: "",
    email: "",
    comment: "",
  })

  const handleOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const checked = e.target.checked
    setState({...state, [name]: value, checkbox: checked})
  }

  const HandleformSubmit = async(e) => {
    e.preventDefault();
    setData([...data, {...state, _id: productId, rating: rating }])
    setState({...state, name: "", email: "", comment: ""})
    setRating(0)
  }

  console.log(data)

  return (
    <section className="product_details">
      <Container>
        {isLoading && <p>Loading...</p>}
        {isSuccess &&
        <div className="content">
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="product_image">
                <img className="image" src={product.img} alt={product.title} />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="summary">
                <h1 className="product_title">{product.title}</h1>
                <p className="product_price">{product.price}</p>
                <div className="product_short_desc">
                  <p>
                    Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Massa
                    tincidunt nunc pulvinar sapien et ligula ullamcorper. Id eu nisl nunc mi ipsum faucibus vitae aliquet.
                    Magna sit amet purus gravida quis blandit turpis cursus in. Sagittis eu volutpat odio facilisis.
                    Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Sapien faucibus et molestie ac
                    feugiat.
                  </p>
                  <p>
                    Quis risus sed vulputate odio ut. Scelerisque fermentum dui faucibus in ornare quam viverra. Aliquet
                    sagittis id consectetur purus ut faucibus. Vitae tempus quam pellentesque nec nam aliquam sem.
                  </p>
                </div>
                <div className="cart_from">
                  <div className="cart_action">
                    <div className="product_quantity">
                      <div className="inner">
                        <span className="increase">
                          <BiPlus /></span>
                        <span className="decrease">
                          <BiMinus /></span>
                        <input type="text" name="number" id="number" defaultValue={5} />
                      </div>
                    </div>
                    <Link to={''}><button className="wishlist_button">
                      <FaRegHeart className="icon" /></button></Link>
                    <button className="add_to_cart">
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="product_meta">
                  <span className="posted_in">
                    Category:
                    <Link to={"/"}> {product.meta} </Link> 
                  </span> 
                </div> 
              </div> 
            </Col> 
          </Row> 

          <div className="desc_review_section">
            <Tabs className="tabs">
              <TabList className="tabs_list">
                <Tab className="tab">Description</Tab>
                <Tab className="tab">Reviews ({data.filter(item => item._id === productId).length})</Tab>
              </TabList>

              <TabPanel className="tab_panel">
                <article className="desc">
                  <h2 className="title">Description</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Lobortis elementum nibh tellus molestie nunc. Aliquam purus sit
                    amet luctus venenatis lectus. Tempor nec feugiat nisl pretium fusce id velit. Aenean vel elit
                    scelerisque mauris pellentesque.
                  </p>
                  <p>
                    Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Ut enim blandit volutpat
                    maecenas. Arcu vitae elementum curabitur vitae nunc sed. Magnis dis parturient montes
                    nascetur.
                    Elit sed vulputate mi sit amet mauris commodo quis. Amet massa vitae tortor condimentum
                    lacinia
                    quis. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Sed felis eget velit
                    aliquet.
                  </p>
                  <p>
                    Bibendum enim facilisis gravida neque convallis a cras semper auctor. Egestas quis ipsum
                    suspendisse ultrices gravida. Faucibus purus in massa tempor. Felis eget nunc lobortis mattis
                    aliquam faucibus purus in massa. Sed tempus urna et pharetra pharetra massa massa. Leo duis ut
                    diam quam nulla.
                  </p>
                </article>
              </TabPanel>
              <TabPanel className="tab_panel">
                <div className="reviews">
                  <Row className="gx-5 gy-5">
                    <Col lg={6} md={12} sm={12}>
                    <div className="preview">
                      <h2 className="title">Reviews</h2>
                      {data.length === 0 ? 
                        <p className="no_reviews">There are no reviews yet.</p> : 
                        <ul className="comment_list">
                          {data
                          .filter(id => id._id === productId)
                          .map((item, index) => {
                            return(
                              <li className="comment_item" key={index}>
                                <img src={img_01} alt="" className="avater"/>
                                <div className="text">
                                  <div className="rating">
                                    {[...Array(5)].map((star, index) => {
                                      index += 1;
                                      return (
                                        <button
                                          type="button"
                                          key={index}
                                          className={index <= item.rating ? "on" : "off"}
                                        >
                                          <span className="star">&#9733;</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                  <h6 className="name">{item.name}</h6>
                                  <div className="comment">
                                    <p>{item.comment}</p>
                                  </div>
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      }
                    </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                    <div className="comment_area">
                      <h2 className="title">Add a review</h2>
                      <form className="comment_form" onSubmit={HandleformSubmit}>
                        <div className="star_rating">
                          <p className="text">Your Rating</p>
                          <div className="rating">
                            {[...Array(5)].map((star, index) => {
                              index += 1;
                              return (
                                <button
                                  type="button"
                                  key={index}
                                  // className={index <= (hover || state.rating) ? "on" : "off"}
                                  // onClick={() => setState({...state, rating: index})}
                                  className={index <= (hover || rating) ? "on" : "off"}
                                  onClick={() => setRating(index)}
                                  onMouseEnter={() => setHover(index)}
                                  onMouseLeave={() => setHover(0)}
                                >
                                  <span className="star">&#9733;</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        <div className="comment_textarea">
                          <textarea name="comment" id="textarea" cols="45" rows="8" placeholder="Your review"
                            onChange={handleOnChange} value={state.comment}>
                          </textarea>
                        </div>
                        <div className="author">
                          <input type="text" name="name" id="name" placeholder="Name" onChange={handleOnChange} value={state.name} />
                          <input type="email" name="email" id="email" placeholder="Email" onChange={handleOnChange} value={state.email} />
                        </div>
                        <div className="comment_author_cookies_consent">
                          <input type="checkbox" name="checkbox" id="checkbox" onChange={handleOnChange} value={state.checkbox}/>
                          <span>Save my name, email, and website in this browser for the next time I comment.</span>
                        </div>
                        <div className="form_submit">
                          <button className="button">Submit</button>
                        </div>
                      </form>
                    </div>
                    </Col>
                  </Row>
                </div>
              </TabPanel>
            </Tabs>
          </div>
          <div className="related_products">
            <h2 className="title">Related products</h2>
            <RelatedPrloducts meta={product.meta} id={product.id}/>
          </div>
        </div>
        }
        {isError && <div>Somthing went worng!</div>}
      </Container>
    </section>
  )
}
