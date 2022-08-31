import React, { useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Porduct from './Porduct';
import { useGetProductsQuery } from '../../redux/features/api/apiSlice';

const PostExcerpt = ({ products }) => {

  const [open, setOpen] = useState(false)
  const [minRange, setMinRange] = useState(1)
  const [maxRange, setMaxRange] = useState(1000)
  const [value, setValue] = useState(1)
  const [valueRight, setValueRight] = useState(1)
  // const [isSelected, setIsSelected] = useState({});
  // const [data, setData] = useState(products)
  // const [category, setCategory] = useState([])
  const accordion = ()=> setOpen(!open)

  const minInpurRange = (e) =>{
    let min_val = parseInt(e.target.value)
    if(min_val < maxRange){
      setMinRange(min_val)
      setValue(min_val / e.target.max * 100 + "%")
    }
  }

  const maxInpurRange = (e) =>{
    let max_val = parseInt(e.target.value)
    if(minRange < max_val){
      setMaxRange(max_val)
      setValueRight(100 - max_val / e.target.max * 100 + "%")
    }
  }

  const handle_min_Input = (e) => {
    let input_value = parseInt(e.target.value)
    if(input_value < maxRange){
      setMinRange(input_value)
      setValue(input_value / e.target.max * 100 + "%")
    }
  }

  const handle_max_Input = (e) => {
    let input_value = parseInt(e.target.value)
    if(minRange < input_value){
      setMaxRange(input_value)
      setValueRight(100 - input_value / e.target.max * 100 + "%")
    }
  }

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

          <div className="accordion">
            <div className="accordion_heading" onClick={accordion}>
              <div className="inner">
                <h5 className="heading_text">Filter Products</h5>
              </div>
            </div>
            <div className={open ? "accordion_panel" : "d-none"}>
              <div className="inner">
                <Row>
                  <Col lg={4} md={12} sm={12}>
                    <div className="price_filter">
                      <h2 className='title'>Price</h2>
                      <div className="input_number">
                        <input type="number" name="number" value={minRange} min="1" max="1000" onInput={handle_min_Input}/>
                        <input type="number" name="number" value={maxRange} min="1" max="1000" onInput={handle_max_Input} />
                      </div>
                      <div className="slider">
                        <div className="progress" style={{left: value, right: valueRight}}></div>
                      </div>
                      <div className="input_range">
                        <input type="range" name="min_range" onInput={minInpurRange} min="1" max="1000" value={minRange}/>
                        <input type="range" name="min_range" onInput={maxInpurRange} min="1" max="1000" value={maxRange}/>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={12} sm={12}>

                  </Col>
                  <Col lg={4} md={12} sm={12}></Col>
                </Row>
              </div>
            </div>
          </div>

          <Row className='gy-5'>
            {products
              .filter((item) => {return item.price >= minRange && item.price <= maxRange})
              .map((item, index) => {
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
          </Row>
        </div>
      </Container>
    </section>
  )
}

const ProductsList = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProductsQuery()

  let content

  if (isLoading) {
    content = <p text="Loading..." />
  } else if (isSuccess) {
    content = <PostExcerpt products={products} />
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return content
}

// () => setIsSelected({...isSelected, [item.meta] : !isSelected[item.meta]})

export default ProductsList;