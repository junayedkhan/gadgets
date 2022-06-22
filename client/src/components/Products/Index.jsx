import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Porduct from './Porduct';
import { useGetProductsQuery } from '../../redux/features/api/apiSlice';

const Index = () => {

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
  } = useGetProductsQuery()

  return (
    <section className="products_page">
      <div className="breadcrumb_section">
        <div className="inner">
          <Breadcrumb>
            <Breadcrumb.Item className="breadcrumb_item" href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active href="Products" className="breadcrumb_item">
              Products
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="page_title">
            <h2>Products</h2>
          </div>
        </div>
      </div>
      <Container>
        <div className="all_products">
          <Row className='gy-5'>
            {isLoading && <p>Loading...</p>}
              {isSuccess && 
                products.map((item, index) => {
                  return(
                    <Col lg={4} md={6} sm={6} key={index}>
                      <Porduct 
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        meta={item.meta}
                        link={item.id}
                      />
                    </Col>
                  )
                })
              }
              {isError && <div>Somthing went worng!</div>}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Index;