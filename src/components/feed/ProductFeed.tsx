
import React from 'react'
import { IProduct } from '../../models/IPoduct'
import Product from './Product'

const ProductFeed: React.FC<{products: IProduct[]}> = ({products}) => {
  
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>

      {products.slice(0, 4).map((p: IProduct) => (
        <Product product={p} key={p.id + ''} />
      ))}

      <img src="https://links.papareact.com/dyz" className='md:col-span-full' alt="" />

      {products.slice(4, 5).map((p: IProduct) => (

        <div className='md:col-span-2'>
           <Product product={p} key={p.id + ''} />
        </div>
       
      ))}

      {products.slice(5).map((p: IProduct) => (

      <div>
        <Product product={p} key={p._id + ''} />
      </div>

      ))}
    </div>
  )
}

export default ProductFeed
