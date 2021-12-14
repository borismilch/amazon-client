import React from 'react'
import { observer } from 'mobx-react-lite'

import { useContext } from 'react'
import { Context } from '../../App'
import NumberFormat from 'react-number-format'

const CartSidebar: React.FC<{createSession: () => void}> = ({createSession}) => {

  const {cart} = useContext(Context)
  const isItems = !!cart.quantityCount

  if (!isItems) { return <div></div> }

  return (
    <div className='flex flex-col mt-6 bg-white p-6 w-full lg:max-w-[230px] md:mr-10'>
     <div className='flex items-start'>
       Subtotal { cart.quantityCount } items: 

       <span className="font-bold">
         <NumberFormat value={Math.floor(cart.totalCost)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
       </span>

     </div>

     <button onClick={createSession} className='button mt-2'>
      Chekout
     </button>
    </div>
  )
}

export default observer(CartSidebar)
