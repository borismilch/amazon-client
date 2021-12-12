import {IUser} from '../models/IUser'
import { makeAutoObservable } from 'mobx'
import AuthService from '../services/AuthService'

import axios from 'axios'
import { API_URL } from '../http'
import { AuthResponse } from '../models/response/AuthResponse'

export default class Store {
  user = {} as IUser
  isAuth = false as boolean
  loading = true as boolean

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setLoading(val: boolean): void {
    this.loading = val
  }
  
  setUser(user:IUser) {
    this.user = user
  }

  async login (email: string, password: string) {

    try {
      this.setLoading(true)
      const response = await AuthService.login(email, password)

      console.log(response)

      localStorage.setItem('token', response.data.accesToken)

      this.setAuth(true)
      this.setUser(response.data.user)
      this.setLoading(false)

    } catch (e: any) { console.log(e) }

  }

  async registration (email: string, password: string) {

    try {
      this.setLoading(true)
      const response = await AuthService.registration(email, password)

      console.log(response)

      localStorage.setItem('token', response.data.accesToken)

      this.setAuth(true)
      this.setUser(response.data.user)
      this.setLoading(false)

    } catch (e: any) { console.log(e.response?.data?.message) }

  }

  async logout () {

    try {
      const response = await AuthService.logout()

      localStorage.removeItem('token')

      this.setAuth(false)
      this.setUser({} as IUser)

    } catch (e: any) { console.log(e.response?.data?.message) }

  }

  async checkAuth() {
  
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}refresh`, {withCredentials: true})
      
      localStorage.setItem('token', response.data.accesToken);
      this.setAuth(true);
      this.setUser(response.data.user);

      this.setLoading(false)
      
    } catch (e: any) {
      this.setLoading(false)
      console.log(e);
     } 
    }
  }
