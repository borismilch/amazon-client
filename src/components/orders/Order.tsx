import React from 'react'
import { IOrder } from '../../models/IPoduct'
import moment from 'moment'
import NumberFormat from 'react-number-format'

const Order: React.FC<{order: IOrder}> = ({order}) => {
  return (
    <div className='border relative rounded-md'>

      <div className='flex items-center space-x-10 p-5 text-sm bg-gray-200 text-gray-600'>

        <div>
          <p className='font-bold text-xs uppercase'>Order placed</p>
          <p>{moment.unix(order.date).format('DD MM YYYY')}</p>
        </div>

        <div>
          <p className='text-xs font-bold'>TOTAL</p>

          <p>
            <NumberFormat value={+order.total} displayType={'text'} thousandSeparator={true} prefix={'$'} /> - next Day Delivery {" "}
            <NumberFormat value={+order.total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </p>

        </div>

        <p className='text-sm whitespace-nowrap text-right text-blue-500 mt-2 flex flex-1 justify-end '><span>
        {order.items.length} items</span>
        </p>
        
        <p className='absolute top-2 right-4 text-right w-40 lg:w-72 truncate text-[9px]'>ORDER #{order._id}</p>

      </div>

      <div className='p-5 sm:p-10'>
        <div className='flex space-x-6 overflow-x-auto'>
            {
              order.items.map(i => i.image).map(image => (
                <img src={image + ''} className='h-20 object-contain m-0 sm:h-32' alt="dd" />
              ))
            }
          </div>
       </div>
      
    </div>
  )
}

export default Order
