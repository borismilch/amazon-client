export interface IRaiting {

  rait: Number,
  count: Number,

}

export interface IProduct {
  _id: string
  title: String
  id: String
  price: Number
  description: String
  category: String
  image: String

  raiting: IRaiting
}

export interface ICart {
  [key: string] : ICartItem
}

export interface ICartItem extends IProduct {
  count: number
}

export interface IOrder {
  owner: string,
  _id: string,
  currency: string,
  date: number,
  total: number,
  items: ICartItem[]
}