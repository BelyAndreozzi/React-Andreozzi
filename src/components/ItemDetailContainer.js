import { customFetch } from "../assets/customFetch";
import { products } from "../stock/products";
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { Loader } from '@mantine/core';

const ItemDetailContainer = () => {

    const [oneProduct, setOneProduct] = useState({})
    

    useEffect(() => {
        customFetch(products)
            .then(res => setOneProduct(res.find(item => item.id === 1)))//Item hardcodeado 
    }, [])

    return (
        <>
            
            <ItemDetail oneProduct={oneProduct}/>
        </>
    )

}
export { ItemDetailContainer }