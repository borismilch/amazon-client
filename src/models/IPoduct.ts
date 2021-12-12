export interface IRaiting {

  rait: Number,
  count: Number,

}

export interface IProduct {
  
  title: String
  id: String
  price: Number
  description: String
  category: String
  image: String

  raiting: IRaiting
}