import { customFetch } from "../assets/customFetch";
import { products } from "../stock/products";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { Loader } from '@mantine/core';
import { useParams } from "react-router-dom";


const ItemListContainer = ({ grettings }) => {
  
  const [allProducts, setAllProducts] = useState([])
  const [loader, setLoader] = useState(true)

  const { category } = useParams()

  useEffect(() => {
    setLoader(true)
    customFetch(products)
      .then(data => {
        if (category) {
          setLoader(false)
          setAllProducts(data.filter(product => product.category === category))
        } else {
          setLoader(false)
          setAllProducts(data)
        }
      })
  }, [category])

  return (
    <>
      <h1>{grettings}</h1>
      {!loader ? <ItemList allProducts={allProducts}/> : <Loader color="violet" size="lg" variant="dots"/>}
    </>
  )
}
export default ItemListContainer