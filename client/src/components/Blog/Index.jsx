import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Blog from "./Blog"
import { useGetBlogsQuery } from '../../redux/features/api/apiSlice';

const Index = () => {

  const {
    data: blogs,
    isLoading,
    isSuccess,
    isError,
  } = useGetBlogsQuery()

  return (
    <section className="blog_page">
      <div className="breadcrumb_section">
        <div className="inner">
          <Breadcrumb>
            <Breadcrumb.Item className="breadcrumb_item" href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active href="Products" className="breadcrumb_item">
              blog
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="page_title">
            <h2>Blog</h2>
          </div>
        </div>
      </div>
      <Container>
        <div className="all_blogs">
          <Row>
            {isLoading && <p>Loading...</p>}
            {isSuccess && blogs.map((item, index) => {
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
        </div>
      </Container>
    </section>
  )
}

export default Index;