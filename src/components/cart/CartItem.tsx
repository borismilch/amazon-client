import { StarIcon } from '@heroicons/react/solid'
import React from 'react'
import { ICartItem } from '../../models/IPoduct'

import NumberFormat from 'react-number-format'

import { observer } from 'mobx-react-lite'

import { Context } from '../../App'
import { useContext } from 'react'

const CartItem: React.FC<{product: ICartItem}> = ({ product }) => {

  const {cart} = useContext(Context) 

  const addCartItem = () => cart.addCartItem(product)
  const removeCartItem = () => cart.removeCartItem(product._id)


  return (
    <div className=' flex flex-col gap-4 md:gap-0 md:grid grid-cols-5 '>

      <img 
        src={product.image + ''} 
        alt="" 
        width={200}
        height={200}
        className='object-contain'
      />

      <div className='col-span-3 mx-5'>
        <p className='font-semibold'>{product.title}</p>

        <div className='flex '>
        {  Array(4).fill('').map((_, i) => (
          <StarIcon className='h-5 text-yellow-500' key={i} />
        )) }
        </div>
      

        <p className='text-xs my-2 line-clamp-3'>{product.description}</p>

        <div className='font-semibold flex gap-2'> 
          <NumberFormat value={+product.price * product.count} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          { product.count }
        </div>

        <div className='flex items-center space-x-2 '>
          <img className='w-12 m-0' src="https://links.papareact.com/fdw" alt="" />
          <p className='text-xs text-gray-500'>FREE Next-day delivery</p>
        </div>
      

      </div>

      <div className='flex flex-col gap-3 my-auto justify-self-end'>
        <button onClick={addCartItem} className='button  font-semibold'>Add to basket</button>
        <button onClick={removeCartItem} className='button  font-semibold'>Remove</button>
      </div>
      
    </div>
  )
}

export default observer(CartItem)
