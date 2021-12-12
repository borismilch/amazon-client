import React, { useEffect, useContext, useState } from 'react'
import Banner from '../components/bannrer'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import ProductFeed from '../components/feed/ProductFeed';

import { Context } from '../App';
import { IProduct } from '../models/IPoduct';

const Home = () => {

  const [items, setItems] = useState<IProduct[]>([] as any)

  const { products } = useContext(Context)

  const addAll = async (): Promise<void> => {
    const product = await products.getProducts()

    setItems(product.data)

  }

  useEffect(() => {
    addAll()
    
  }, [])

  return (
    <>
      <Banner />

      <ProductFeed products={items} />
    </>
  );
};

export default Home
