import { createContext, ReactNode, useContext, useState } from 'react'
import { ProductCart } from '../../types/Product'

type CartContextType = {
  cart: Array<ProductCart>
}

const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Array<ProductCart>>([])

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  )
}

export function useCart(): CartContextType {
  const context = useContext(CartContext)

  return context
}
