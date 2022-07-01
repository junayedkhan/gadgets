import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import img_01 from "../../assets/image/article-image-5.jpg";

const ProductReviews = ({ productId }) => {
    const [hover, setHover] = useState(null);
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
    //   const res = await axios.post("http://localhost:5000/products", state)
      setData([...data, {...state, _id: productId }])
      setState({...state, name: "", email: "", comment: "", rating: null})
    }
  
    console.log(data)


    return (
    <div className="reviews">
        <Row className="gx-5 gy-5">
            <Col lg={6} md={12} sm={12}>
            <div className="preview">
                <h2 className="title">Reviews</h2>
                {data.length === 0 ?
                <div>No Reviews this time!</div> :
                <ul className="comment_list">
                    {data
                    .filter(id => id._id === productId)
                    .map((item, index) => {
                    return(
                    <li className="comment_item" key={index}>
                        <figure>
                            <img src={img_01} alt="" className="img" />
                        </figure>
                        <div className="name_and_star">
                            <div>
                                <h6>{item.name}</h6>
                            </div>
                            <div>
                                <p>{item.rating}</p>
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
                            <button type="button" key={index} className={index <=(hover || state.rating) ? "on" : "off"
                                } onClick={()=> setState({...state, rating: index})}
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
                        <input type="text" name="name" id="name" placeholder="Name" onChange={handleOnChange}
                            value={state.name} />
                        <input type="email" name="email" id="email" placeholder="Email" onChange={handleOnChange}
                            value={state.email} />
                    </div>
                    <div className="comment_author_cookies_consent">
                        <input type="checkbox" name="checkbox" id="checkbox" onChange={handleOnChange}
                            value={state.checkbox} />
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
  )
}

export default ProductReviews;