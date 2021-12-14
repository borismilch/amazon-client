import React, { ChangeEvent, useState } from 'react'
import { useContext } from 'react'
import { Context, IStore } from '../App'
import {observer} from 'mobx-react-lite'

import { useHistory } from 'react-router-dom'

import FormFooter from '../components/auth/FormFooter'

const LoginForm = () => {

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [name, setName] = useState('')

  const { auth } = useContext<IStore>(Context)

  const puahHistoru = () =>{
    history.push('/login')
  }

  return (
    <div style={{padding: 20}}>

    <img src="https://w7.pngwing.com/pngs/491/205/png-transparent-amazon-com-amazon-echo-amazon-prime-logo-amazon-music-amazon-payments-logo-ring-text-logo.png" width={150} alt="Amazon.com"/>

    <div id="signInBorder">
      <p id="SignInTxt">
        Sign up
      </p>

      <label>
        <strong>Name</strong>
        <br />
        <input
          type="text"
          onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          value={name}
        />
      </label>

      <label>
        <strong>Email (phone for mobile accounts)</strong>
        <br />
        <input
          type="text"
          onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <br />

      <label>
        <strong>Password</strong>

        <span><a href="#" id="password">Forgot your password?</a></span>

        <br />

        <input
          type="password"
          onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <div>
        <button onClick={() => auth.registration(email, password)} id="amazon">Sign up</button>
      </div>

      <div id="createAccount">
        <h2><span>Have an account?</span></h2>
        <button onClick={puahHistoru
        } id="newAccount" name="newAcct">Sing in</button>
      </div>

    </div>

    <hr id="footer" />
      <FormFooter />
   
    </div>

  )
}

export default observer(LoginForm)

