import { customFetch } from "../assets/customFetch";
import { products } from "../stock/products";
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { Loader } from '@mantine/core';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [oneProduct, setOneProduct] = useState({})
    const [loader, setLoader] = useState(true)
    
    const {id} = useParams()
    
    useEffect(() => {
        customFetch(products)
            .then(res => {
                setLoader(false)
                setOneProduct(res.find(item => item.id === parseInt(id)))
            })
    }, [id])

    return (
        <>
            {!loader ? <ItemDetail oneProduct={oneProduct}/> : <Loader color="violet" size="lg" variant="dots"/>}
        </>
    )

}
export { ItemDetailContainer }