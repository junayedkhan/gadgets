import React from 'react'
import { useGetProductsQuery,  } from '../../redux/features/api/apiSlice';
import { Row, Col } from 'react-bootstrap';
import Porduct from './Porduct';

const RecentProdcuts = () => {

    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
    } = useGetProductsQuery()

    return (
        <div className="recent_products">
            <div className="heading">
                <h6 className="heading_text">Recent Products</h6>
            </div>
            <Row className='gy-5'>
                {isLoading && <p>Loading...</p>}
                {isSuccess && 
                    products
                    .slice(0, 4)
                    .map((item, index) => {
                        return(
                            <Col lg={3} md={6} sm={6} key={index}>
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
        </div>
    )
}

export default RecentProdcuts;