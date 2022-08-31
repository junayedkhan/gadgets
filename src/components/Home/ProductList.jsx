import React from 'react'
import Porduct from '../Products/Porduct';
import SectionHeader from '../SectionHeader';
import { Container, Row, Col } from 'react-bootstrap';
import { useGetProductsQuery } from '../../redux/features/api/apiSlice';

const ProductList = () => {
    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
    } = useGetProductsQuery()

    return (
        <div className="inner">
            <SectionHeader
                title={"Featured Products"}
                subTitle={"Feugiat pretium nibh ipsum consequat commodo."}
                link={"/products"}
            />
            <Container>
                <div className="products">
                    <Row className='gy-5'>
                        {isLoading && <p>Loading...</p>}
                        {isSuccess && 
                            products.slice(0, 6).map((item, index) => {
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
        </div>
    )

}

export default ProductList;