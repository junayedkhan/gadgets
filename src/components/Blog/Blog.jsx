import React from 'react'
import { Link } from 'react-router-dom';

const Blog = ({img, title, meta, desc, link}) => {


return (
    <article className="news_card">
        <div className="image">
            <Link to={`/blogs/${link}`}>
                <img src={img} alt={title} />
            </Link>
        </div>
        <div className="content">
            <Link to={""} className="meta">
                {meta}
            </Link>
            <Link to={`/blogs/${link}`}>
                <h3 className="title">
                    {title.substring(0, 40) + "..."}		
                </h3>
            </Link>
            <p className="excerpt" data-cards="cover">
                {desc.substring(0, 63) + "..."}
            </p>
            <Link to={`/blogs/${link}`}>
                <button className="button">Read More</button>
            </Link>
        </div>
    </article>
)
}

export default Blog;