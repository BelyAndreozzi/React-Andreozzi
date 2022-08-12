import { customFetch } from "../assets/customFetch";
import { products } from "../stock/products";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { Loader } from '@mantine/core';


const ItemListContainer = ({ grettings }) => {
  
  const [allProducts, setAllProducts] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    customFetch(products)
      .then(data => {
        setLoader(true)
        setAllProducts(data)
      })
       
  }, [])

  return (
    <>
      <h1>{grettings}</h1>
      {!loader && <Loader color="violet" size="lg" variant="dots"/>}
      {loader && <ItemList allProducts={allProducts}/>}
    </>
  )
}
export default ItemListContainer