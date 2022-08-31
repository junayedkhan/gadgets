import React from 'react'
import Category from './Category';
import Hero from './Hero';
import Features from './Features';
import ProductList from './ProductList';
import Trending from './Trending';
import Offer from './Offer';
import NewsList from './NewsList';

const Index = () => {
  return (
    <main className="home_page">
        <section className='hero_section'>
          <Hero />
        </section>
        <section className="category_section mt_120">
          <Category />
        </section>
        <section className="trending_section mt_120 mb_120">
          <Trending />
        </section>
        <section className="features_section">
          <Features />
        </section>
        <section className="product_list">
          <ProductList />
        </section>
        <section className="offer_section">
          <Offer />
        </section>
        <section className="news_list">
          <NewsList />
        </section>
    </main>
  )
}

export default Index;