import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { Loader } from '@mantine/core';
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [oneProduct, setOneProduct] = useState({})
    const [loader, setLoader] = useState(true)

    const { id } = useParams()

    useEffect(() => {

        const docRef = doc(db, "products", id);
        const consulta = getDoc(docRef);
        consulta
            .then(snapshot => {
                setOneProduct({ id: snapshot.id, ...snapshot.data() })
                setLoader(false)
            })
            .catch(err => {
                console.log(err);
            })

    }, [id])

    return (
        <>
            {!loader ? <ItemDetail oneProduct={oneProduct} /> : <Loader color="violet" size="lg" variant="dots" />}
        </>
    )

}
export { ItemDetailContainer }