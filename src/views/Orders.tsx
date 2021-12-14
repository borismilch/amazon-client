import React from 'react'

import { useEffect, useState } from 'react'
import { IOrder } from '../models/IPoduct'

import { useContext } from 'react'
import { Context, IStore } from '../App'
import OrderItem from '../components/orders/Order'

const Orders = () => {

  const [orders, setOrders] = useState<IOrder[]>([])
  const { cart, auth } = useContext<IStore>(Context)

  const getOrders = async () => {
    const order = await cart.getOrders(auth.user.email)

    setOrders(order)
  }

  useEffect(() => {
    getOrders()
  }, [orders])

  return (
    <div className='min-h-screen bg-white w-full'>
      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b mb-5 pb-1 border-yellow-400'>Your Orders</h1>

        { !orders.length && ( <p>No orders found</p> ) }

        <div className='flex flex-col gap-6'>
          { orders.length && orders.map((order: IOrder) => (
            <OrderItem order={order} />
          ))}
        </div>
      
      </main>
    </div>
   
  )
}

export default Orders
