import React from 'react'

const Newlatter = () => {
  return (
    <section className="newslatter">
        <div className="inner">
            <div className="heading">
                <h2>Don’t Miss Our News</h2>
            </div>
            <form className="newslatter_from"> 
                <input type="text" id='text' name="name" placeholder="Enter Email Address*" />
                <button type='submit'>subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Newlatter;