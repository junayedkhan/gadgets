import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useGetBlogsQuery } from '../../redux/features/api/apiSlice';

const RecentPost = ({Id}) => {

    const {
        data: blogs,
        isLoading,
        isSuccess,
        isError,
    } = useGetBlogsQuery()

return (
    <div className="recent_post">
        <div className="heading">
            <h6 className="heading_text">Recent Post</h6>
        </div>
        {isLoading && <p>Loading...</p>}
        {isSuccess &&
        <div className="post">
            {blogs
            .filter((item) => item.id !== Id)
            .slice(0, 3)
            .map((item, index) => {
                return(
                    <article className="news_card" style={{backgroundImage: `url(${item.img})`}} key={index}>
                        <div className="content" >
                            <Link to={""} className="meta">
                                {item.meta}
                            </Link>
                            <Link to={`/blogs/${item.id}`}>
                                <h3 className="title">
                                    {item.title.substring(0, 40) + "..."}		
                                </h3>
                            </Link>
                            <p className="excerpt" data-cards="cover">
                                {item.desc.substring(0, 63) + "..."}
                            </p>
                            <Link to={`/blogs/${item.id}`}>
                                <button className="button">Read More</button>
                            </Link>
                        </div>
                    </article>
                )
            })}
        </div>
        }
        {isError && <p>Somthing wnent wrong!</p>}
    </div>
)
}

export default RecentPost;