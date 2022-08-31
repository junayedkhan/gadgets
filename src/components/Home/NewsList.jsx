import React from 'react'
import SectionHeader from '../SectionHeader';
import { Container, Row, Col } from 'react-bootstrap';
import { useGetBlogsQuery } from '../../redux/features/api/apiSlice';
import Blog from '../Blog/Blog';

const NewsList = () => {

    const {
        data: blogs,
        isLoading,
        isSuccess,
        isError,
    } = useGetBlogsQuery()

  return (
    <div className="news_list">
        <SectionHeader 
            title={"Latest News"}
            subTitle={"Feugiat pretium nibh ipsum consequat commodo."}
            link={"/blogs"}
        />
        <Container>
            <Row>
                {isLoading && <p>Loading...</p>}
                {isSuccess && blogs.slice(0, 3).map((item, index) => {
                    return(
                    <Col lg={4} md={6} sm={12} key={index} className="_mb_24">
                        <Blog
                            img={item.img}
                            title={item.title}
                            meta={item.meta}
                            desc={item.desc}
                            link={item.id}
                        />
                    </Col>
                    )
                })}
                {isError && <p>Somthing went worng1</p>}
            </Row>
        </Container>
        
    </div>
  )
}

export default NewsList;