import React, { useEffect, useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './hooks/router.hook'
import './Aoo.css'

import AuthStore from './store/auth'
import CartStore from './store/cart'
import ProductStore from './store/products'
import { createContext } from 'react'

const auth = new AuthStore()
const products = new ProductStore()
const cart = new CartStore()

export interface IStore {
  auth: typeof auth,
  products: typeof products,
  cart: typeof cart
}

export const Context = createContext<IStore>({ auth, products, cart })

const App = () => {

  const { auth, products } = useContext(Context)
  
  
  useEffect(() => {
    if (localStorage.getItem('token')) { auth.checkAuth() }
    auth.setLoading(false)
  }, [])

  return (

    <Context.Provider value={{auth, products, cart}}>
      <Router>
         <Routes />
      </Router>
    </Context.Provider>
    
  );
};

export default App;
