import React, { useState } from 'react'
import { IProduct } from '../../models/IPoduct'
import { StarIcon } from '@heroicons/react/solid'
import NumberFormat from 'react-number-format';

const Product:React.FC<{product: IProduct}> = ({product}) => {
  const raiting = Math.floor(+4)

  const [hasPrime] = useState(Math.random() > 0.5)

  console.log(product)

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-3 text-xs italic font-semibold text-gray-400' >{product.category}</p>

      <div className='flex flex-grow justify-center'>
        <img src={product.image + ''} className='object-contain h-[200px]' height={200} width={200} alt="" />
      </div>
     

      <h4 className='my-3'>{product.title}</h4>

      
      <div className='flex gap-1'>
        {
          Array(raiting).fill('').map((_, i) => (
            <StarIcon className='h-5 text-yellow-400' />
          ))
        }
      </div>
    
      

      <p className='my-2 text-xs line-clamp-2 font-semibold'>{product.description}</p>

      <div className="mb-5 font-semibold">
        <NumberFormat value={+product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      </div>

      { hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
          <p className='text-xs text-gray-500'>FREE Next-day delivery</p>
        </div>
      ) }

      <button className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product
