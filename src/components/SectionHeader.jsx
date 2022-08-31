import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SectionHeader = ({title, subTitle, link}) => {
  return (
    <section className="section_header">
        <Container>
            <div className="inner">
                <div className="left_side">
                    <h3 className="title">{title}</h3>
                    <p className="subtitle">{subTitle}</p>
                </div>
                <div className="right_side">
                    <Link to={link}>
                        <button className="button">View all</button>
                    </Link>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default SectionHeader;