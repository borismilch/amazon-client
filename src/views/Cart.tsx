import React from 'react'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../App'

import CartItem from '../components/cart/CartItem'
import { ICartItem } from '../models/IPoduct'
import CartSidebar from '../components/cart/CartSidebar'

import { API_URL } from '../http'

import { STRIPE_PUBLIC_KEY, STRIPE_SECRET } from '../config'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios'

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY)

const Checkout = () => {

  const { cart, auth } = useContext(Context)

  const createSession = async () => {
    const stripe = await stripePromise

    const checkoutSession = await axios.post(API_URL + 'checkout', {
      items: Object.values(cart.cart),
      email: auth.user.email,
      total: cart.totalCost
    })

    // redirect user to Stripe Checkpit

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id
    })

    if (result?.error) {
      alert(result.error.message)
    }

  }



  return (
    <div className='bg-gray-100'>
    
    <main className='lg:flex max-w-screen-2xl mx-auto'>

    <div className='flex-grow m-5 shadow-sm'>
      <img
       src="https://links.papareact.com/ikj" 
       width={1020} height={250} 
       className='object-contain' 
       alt="" 
      />

      <div className='flex flex-col p-5 space-y-10 bg-white'>
        <h1 className='pb-4 border-b text-3xl'>Your shopping Basket</h1>
        {
          !cart.quantityCount ? 
          (
            <div>
              <h1 className='text-xl'>No products found</h1>
            </div>
          ) 
           : 
          (
            <>
              {
               Object.values(cart.cart).map((c:ICartItem) => (
                  <CartItem product={c} key={c._id} />
                ))
              }
              
            </>
          ) 
        }

      </div>

    </div>

    <CartSidebar createSession ={createSession} />

    </main>


    </div>
  )
}

export default observer(Checkout)
