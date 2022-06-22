import React, { useState, useEffect } from 'react'
import axios from "axios"
import SectionHeader from '../SectionHeader';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsList = () => {

    const [news, setNews] = useState([])
    const fatch_product = async() => {
        const res = await axios.get(`http://localhost:8000/news`)
        .catch((err) => console.log(err))
        setNews(res.data)
    }
    
    useEffect(() => {
        fatch_product()
    },[])

  return (
    <div className="news_list">
        <SectionHeader 
            title={"Latest News"}
            subTitle={"Feugiat pretium nibh ipsum consequat commodo."}
            link={""}
        />
        <Container>
            <Row>
                {news.map((item, index) => {
                    return(
                    <Col lg={4} md={6} sm={12} key={index} className="gy-4">
                        <article className="news_card">
                            <div className="image">
                                <Link to={''}>
                                    <img src={item.img} alt={item.title} />
                                </Link>
                            </div>
                            <div className="content">
                                <Link to={""} className="meta">
                                    {item.meta}
                                </Link>
                                <Link to={""}>
                                    <h3 className="title">
                                        {item.title.substring(0, 40) + "..."}		
                                    </h3>
                                </Link>
                                <p className="excerpt" data-cards="cover">
                                    {item.desc.substring(0, 63) + "..."}
                                </p>
                                <Link to={""}>
                                    <button className="button">Read More</button>
                                </Link>
                            </div>
                        </article>
                    </Col>
                    )
                })}
            </Row>
        </Container>
        
    </div>
  )
}

export default NewsList;