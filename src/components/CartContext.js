import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([])

const { Provider } = CartContext

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    //Revisa si ya está el item en el array (SOME)
    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const addToCart = (product, quantity) => {
        const newProduct = {
            ...product,
            quantity
        }

        if (isInCart(newProduct.id)) {
            const findProduct = cart.find(x => x.id === newProduct.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].quantity += quantity
            setCart(auxArray)
        } else {
            setCart([...cart, newProduct])
        }
    }


    //Elimina un item del array (FILTER)
    const removeItem = (id) => {
        return setCart(cart.filter(item => item.id !== id))
    }

    //resetea el cart 
    const clearCart = () => {
        return setCart([])
    }

    // Cantidad de unidades en el cart 
    const itemQuantity = () => {
        return cart.reduce((acc, item) => acc += item.quantity, 0)
    }

    //Precio total de la compra
    const itemTotalPrice = () => {
        return cart.reduce((acc, item) => acc += item.quantity * item.price, 0)
    }

    return <Provider value={{ cart, isInCart, addToCart, clearCart, removeItem, itemQuantity, itemTotalPrice }}>{children}</Provider>

}

export { CartContextProvider }