import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { useParams } from 'react-router-dom';
import { useGetBlogQuery } from '../../redux/features/api/apiSlice';
import Comments from './Comments';
import RecentPost from './RecentPost';
import RecentProdcuts from '../Products/RecentProdcuts';

const BlogDetails = () => {

const {blogId} = useParams()

const {
    data: blog,
    isLoading,
    isSuccess,
    isError,
} = useGetBlogQuery(blogId)


return (
    <section className="blog_details">
        {isLoading && <h2>Loading...</h2>}
        {isSuccess && 
            <div className="inner">
                <div className="breadcrumb_section" style={{backgroundImage: `url(${blog.img})`}}>
                    <div className="inner">
                        <div className="page_title">
                            <h2>{blog.title}</h2>
                        </div>
                        <Breadcrumb>
                            <Breadcrumb.Item className="breadcrumb_item" href="/">admin</Breadcrumb.Item>
                            <Breadcrumb.Item className="breadcrumb_item">
                                20 June 2022
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="Products" className="breadcrumb_item">
                                {blog.meta}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <Container>
                    <div className="blog_content">
                        <Row>
                            <Col lg={8} md={12} sm={12}>
                                <article className='blog_article'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat. Ullamcorper malesuada proin libero nunc consequat interdum varius. Consequat mauris nunc congue nisi vitae suscipit tellus. Feugiat pretium nibh ipsum consequat nisl vel pretium. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Magna sit amet purus gravida quis blandit turpis cursus in. Sagittis eu volutpat odio facilisis. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Sapien faucibus et molestie ac feugiat. Quis risus sed vulputate odio ut. Scelerisque fermentum dui faucibus in ornare quam viverra. Aliquet sagittis id consectetur purus ut faucibus. Vitae tempus quam pellentesque nec nam aliquam sem.
                                    </p>
                                    <p>
                                        Laoreet id donec ultrices tincidunt. Ac tortor vitae purus faucibus. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Massa ultricies mi quis hendrerit dolor magna eget est. Et magnis dis parturient montes. Sollicitudin ac orci phasellus egestas tellus rutrum. Molestie nunc non blandit massa enim nec. Quam lacus suspendisse faucibus interdum. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Fames ac turpis egestas integer eget. Tristique magna sit amet purus gravida quis blandit turpis cursus. Ultricies mi quis hendrerit dolor magna eget est lorem. Ut etiam sit amet nisl purus. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. At consectetur lorem donec massa sapien faucibus et. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
                                    </p>
                                    <p>
                                        Semper risus in hendrerit gravida. Nibh mauris cursus mattis molestie a iaculis at erat. Pulvinar proin gravida hendrerit lectus a. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Mi quis hendrerit dolor magna eget. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Tempus iaculis urna id volutpat lacus laoreet. Diam quam nulla porttitor massa id. Sapien nec sagittis aliquam malesuada bibendum. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Facilisi cras fermentum odio eu feugiat. In ornare quam viverra orci sagittis eu volutpat odio. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Purus gravida quis blandit turpis cursus in.
                                    </p>
                                    <p>
                                        Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Sed arcu non odio euismod lacinia. Eget egestas purus viverra accumsan in nisl. Dignissim diam quis enim lobortis scelerisque fermentum dui. Sed adipiscing diam donec adipiscing tristique. Aliquet enim tortor at auctor urna nunc id cursus metus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Id cursus metus aliquam eleifend mi in nulla posuere. Pellentesque nec nam aliquam sem et tortor. Varius sit amet mattis vulputate enim nulla. Ipsum dolor sit amet consectetur. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Proin sagittis nisl rhoncus mattis. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Amet aliquam id diam maecenas ultricies mi eget.
                                    </p>
                                    <p>
                                        Ultrices dui sapien eget mi proin sed libero enim. Purus semper eget duis at tellus at urna condimentum. Viverra ipsum nunc aliquet bibendum enim facilisis. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Cum sociis natoque penatibus et magnis dis. Odio euismod lacinia at quis risus sed vulputate odio ut. Faucibus purus in massa tempor nec feugiat. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Urna neque viverra justo nec ultrices dui sapien eget. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Cras semper auctor neque vitae. Non curabitur gravida arcu ac tortor dignissim. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Vitae proin sagittis nisl rhoncus. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Nibh tellus molestie nunc non. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Tellus pellentesque eu tincidunt tortor aliquam.
                                    </p>
                                </article>
                                
                                <Comments />
                            </Col>
                            <Col lg={4} md={12} sm={12}>
                                <RecentPost Id={blog.id}/>
                            </Col>
                        </Row>
                        <RecentProdcuts />
                    </div>
                </Container>
            </div>
        }
        {isError && <h2>somthing went worng!</h2> }
    </section>
)
}

export default BlogDetails;