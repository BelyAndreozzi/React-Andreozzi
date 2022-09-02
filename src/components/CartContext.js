import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { createContext } from "react";
import { db } from "./firebase";

export const CartContext = createContext([])

const { Provider } = CartContext

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const [id, setId] = useState()

    const newOrder = async (info) => {
      await addDoc(collection(db, "orders"), {
            buyer:{
                fullname: info.name + ' ' + info.lastName,
                email: info.email,
                mobileNumber: info.mobileNumber,
                saveInfo: info.saveData
            },
            products: [...cart],
            date: serverTimestamp(),
            total: itemTotalPrice(cart)
        }).then(res=>setId(res.id));

        return id;
    }

    //Revisa si ya está el item en el array
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


    //Elimina un item del array 
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

    return <Provider value={{ cart, newOrder, id, isInCart, addToCart, clearCart, removeItem, itemQuantity, itemTotalPrice }}>{children}</Provider>

}

export { CartContextProvider }