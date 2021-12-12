import React from 'react'

import { ShoppingCartIcon } from '@heroicons/react/outline'

const HeaderList = () => {
  return (
   <div className='text-white text-xs flex gap-6 px-4 items-center'>

    <div className='link'>
     <p> Hello, Sign in</p>
     <p  className='font-extrabold md:text-sm' >Account List</p>
    </div>

    <div className='link'>
     <p> Returns</p>
     <p className='font-extrabold md:text-sm'>& Orders</p>
    </div>

    <div className='link relative flex items-center'>

      <div className='relative'>
        
      <span className='cart_indicator' style={{borderRadius: '50%'}}>0</span>
        <ShoppingCartIcon className='w-8 h-8' />
      </div>

      <p className='font-extrabold md:text-sm hidden md:inline mt-1 '>Basket</p>
    </div>

   </div>
  )
}

export default HeaderList
