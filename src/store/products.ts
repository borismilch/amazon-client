
import { makeAutoObservable } from 'mobx'

import axios from 'axios'
import { API_URL } from '../http'
import { IProduct } from '../models/IPoduct'


export default class ProductStore {
  
  constructor() {
    makeAutoObservable(this)
  }

  async getProducts() {
    const prods = await axios.get<IProduct[]>(API_URL + 'products')
    console.log(prods)
    return prods
  }

}
