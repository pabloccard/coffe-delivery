import { createContext, ReactNode, useContext, useState } from 'react'
import { CartProduct } from '../../types/Product'

type CartContextType = {
  cart: Array<CartProduct>
  addProduct(id: string, quantity: number): void
  removeProduct(id: string): void
  updateProductAmount(id: string, amount: number): void
}

const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Array<CartProduct>>([])

  async function addProduct(id: string, quantity: number) {
    try {
      const updatedCart = [...cart]
      const product = updatedCart.find((product) => product.id === id)
      const amount = product ? product.amount + quantity : quantity

      if (product) {
        product.amount = amount >= 9 ? 9 : amount
      } else {
        const response = await fetch(
          `https://my-json-server.typicode.com/pabloccard/coffe-delivery-api/products/${id}`,
        )
        const data: Omit<CartProduct, 'amount'> = await response.json()

        const newProduct: CartProduct = {
          id: data.id,
          title: data.title,
          price: data.price,
          img: data.img,
          amount,
        }

        updatedCart.push(newProduct)
      }

      setCart(updatedCart)
    } catch (error) {
      console.error(error)
    }
  }

  function removeProduct(id: string) {
    try {
      const product = cart.find((item) => item.id === id)

      if (!product) {
        throw new Error('Erro ao adicionar produto')
      }

      const updatedCart = cart.filter((item) => item.id !== id)
      setCart(updatedCart)
    } catch (err) {
      console.error(err)
    }
  }

  function updateProductAmount(id: string, amount: number) {
    const updatedCart = [...cart]
    const product = updatedCart.find((item) => item.id === id)

    if (!product) {
      throw new Error('Erro ao  atualizar a quantidade de produto')
    }

    product.amount = amount

    setCart(updatedCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updateProductAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextType {
  const context = useContext(CartContext)

  return context
}
