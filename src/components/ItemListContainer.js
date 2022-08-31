import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { Loader } from '@mantine/core';
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = ({ grettings }) => {

  const [allProducts, setAllProducts] = useState([])
  const [loader, setLoader] = useState(true)
  const { category } = useParams()

  useEffect(() => {
    setLoader(true)
    const productsCollection = collection(db, "products")

    if (!category) {
      const consulta = getDocs(productsCollection)

      consulta
        .then(snapshot => {
          const allProducts = snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              id: doc.id
            }
          });
          setAllProducts(allProducts)
          setLoader(false)
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      const filter = query(productsCollection, where("category", "==", category))
      const consulta = getDocs(filter)

      consulta
        .then(snapshot => {
          const allProducts = snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              id: doc.id
            }
          });
          setAllProducts(allProducts)
          setLoader(false)
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [category])

  return (
    <>
      <h1>{grettings}</h1>
      {!loader ? <ItemList allProducts={allProducts} /> : <Loader color="violet" size="lg" variant="dots" />}
    </>
  )
}
export default ItemListContainer