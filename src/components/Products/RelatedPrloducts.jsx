import React from 'react'
import { useGetProductsQuery,  } from '../../redux/features/api/apiSlice';
import { Row, Col } from 'react-bootstrap';
import Porduct from './Porduct';

const RelatedPrloducts = ({ meta, id }) => {
    
    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
    } = useGetProductsQuery()

    return (
        <Row className='gy-5'>
            {isLoading && <p>Loading...</p>}
            {isSuccess && 
                products
                .filter((item) => item.meta === meta && item.id !== id )
                .slice(0, 4)
                .map((item, index) => {
                    return(
                        <Col lg={3} md={6} sm={12} key={index}>
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
            {isError && <p>Somthing went worng!</p>}
        </Row>
    )
}

export default RelatedPrloducts;