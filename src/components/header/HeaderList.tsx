import React from 'react'

import { ShoppingCartIcon } from '@heroicons/react/outline'

import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../App';

const HeaderList:React.FC = () => {

  const { auth, cart } = useContext(Context)

  const history = useHistory()

  const pushHistory = () => { history.push('/cart') }

  return (
   <div className='text-white text-xs flex gap-6 px-4 items-center'>

    <div className='link popupParent'>
     <p> Hello, {auth.user.email} </p>
     <p  className='font-extrabold md:text-sm' >Account List</p>

    
    </div>

    <div className='link' onClick={() => { history.push('/orders') }}>
     <p> Returns</p>
     <p className='font-extrabold md:text-sm'>& Orders</p>
    </div>

    <div className='link relative flex items-center '>

      <div className='relative' onClick={pushHistory}>
        
      <span className='cart_indicator' style={{borderRadius: '50%'}}>{cart.quantityCount}</span>
        <ShoppingCartIcon className='w-8 h-8' />
      </div>

      <p className='font-extrabold md:text-sm hidden md:inline mt-1 '>Basket</p>
    </div>

   </div>
  )
}

export default observer(HeaderList)
