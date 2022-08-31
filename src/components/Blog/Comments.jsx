import React, { useState } from 'react'

const Comments = () => {

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
        setData([...data, {...state}])
        setState({...state, name: "", email: "", comment: ""})
    }

    //  _id: productId

  return (
    <div className="comments">
        <div className="inner">
            <div className="comment_area">
                <h2 className="title">Leave a Reply</h2>
                <form className="comment_form" onSubmit={HandleformSubmit}>
                    <div className="comment_textarea">
                        <textarea name="comment" id="textarea" cols="45" rows="8" placeholder="Add Comment"
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
                        <button className="button">Post Comment</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Comments;