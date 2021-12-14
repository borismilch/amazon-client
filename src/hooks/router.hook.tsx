import React, { useContext } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import { Home, Login, Register, Orders, Cart, Success } from '../views'
import { observer } from 'mobx-react-lite'

import { Context, IStore } from '../App'

import Header from '../components/Header'


const Routes:React.FC = () => {

  const { auth } = useContext<IStore>(Context)

  if (auth.loading) { return <p>Loading...</p> }

  return (
    <>
    {
      auth.isAuth ? (
       <>
        <Header />
        <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path='/success'>
          <Success  />
        </Route>

        <Route exact path='/orders'>
          <Orders  />
        </Route>
        
        <Route>
          <Redirect to='/' />
        </Route>

      </Switch>
       </>
      ) : (
       <Switch>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        
        <Route exact path='/success'>
          <Success  />
        </Route>
       
        <Route>
          <Redirect to='/login' />
        </Route>

      </Switch>
      )

    }
    </>
  )
}

export default observer(Routes)
