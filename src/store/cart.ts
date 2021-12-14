
import { makeAutoObservable } from 'mobx'

import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../http'
import { IProduct, ICart } from '../models/IPoduct'


export default class ProductStore {

  cart = {} as ICart

  constructor() {
    makeAutoObservable(this)
  } 

  addCartItem (item: IProduct) {

    if (this.cart[item._id]) {
      this.cart[item._id].count += 1
    }
    else {
      this.cart[item._id] = {...item, count: 1 }
    }
    
  }

  removeCartItem (id: string) {
    
    if (this.cart[id].count > 1 ) {
      this.cart[id].count += -1
    }
    else  delete this.cart[id] 
    
  }

  async getOrders (email: string) {
    const orders = await axios.post(API_URL + 'orders', { email })

    return orders.data
  }

  get quantityCount () {
    return Object.values(this.cart).reduce((acc, c) => acc += c.count, 0)
  }

  get totalCost () {
    return Object.values(this.cart).reduce((acc, c) => acc +=( c.count * +c.price), 0)
  }

}
