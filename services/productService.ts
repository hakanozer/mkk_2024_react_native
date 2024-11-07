import { IProduct, IProducts } from "../models/IProducts"
import { config } from "./config"

export const allProduct = () => {
  return config.get<IProducts>('products')
}

export const singleProduct = (id:number) => {
  return config.get<IProduct>('products/'+id)
}