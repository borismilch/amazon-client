import React, { ChangeEvent, useState } from 'react'
import { useContext } from 'react'
import { Context } from '../App'

import {observer} from 'mobx-react-lite'

const RegisterPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { auth } = useContext(Context)

  return (
    <div style={{padding: 20}}>
      <input
       type="text"
       onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
       value={email}
      />

      <input
       type="password"
       onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
       value={password}
      />

      <button onClick={() => auth.login(email, password)}>Login</button>
      <button onClick={() => auth.registration(email, password)} >Register</button>
    </div>
  )
}

export default observer(RegisterPage)