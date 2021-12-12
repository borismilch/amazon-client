import React, { useEffect, useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './hooks/router.hook'

import AuthStore from './store/auth'
import ProductStore from './store/products'
import { createContext } from 'react'

const auth = new AuthStore()
const products = new ProductStore()

export interface IStore {
  auth: typeof auth,
  products: typeof products
}

export const Context = createContext<IStore>({ auth, products })

const App = () => {

  const { auth, products } = useContext(Context)
  
  
  useEffect(() => {
    if (localStorage.getItem('token')) { auth.checkAuth() }
    auth.setLoading(false)
  }, [])

  return (

    <Context.Provider value={{auth, products}}>
      <Router>
         <Routes />
      </Router>
    </Context.Provider>
    
  );
};

export default App;
