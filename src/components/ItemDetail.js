import { Button} from '@mantine/core';
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import { CartContext } from './CartContext';

const ItemDetail = ({oneProduct}) => {

    const [added, setAdded] = useState(false)

    const [quantity, setQuantity] = useState(1)

    const {isInCart, addToCart} = useContext(CartContext)

    const onAdd = () => {
        setAdded(true)
        isInCart (oneProduct.id)
        addToCart(oneProduct, quantity)
    }

    return(
        <>
            <section className="ItemDetail">
                <div>
                    <img src={oneProduct.img} alt={oneProduct.name} className="ItemDetail_img"/>
                </div>
                <div className="ItemDetail_info">
                    <div className="ItemDetail_header">
                        <div className="ItemDetail_dato">{oneProduct.category}</div>
                        <h2 className='ItemDetail_title'>{oneProduct.name}</h2>
                    </div>
                    <div className="ItemDetail_body">
                        <div>Descripción: {oneProduct.description}</div>
                        <div className="ItemDetail_body_numbers">
                            <div>Precio: ${oneProduct.price}</div>
                            <div className="ItemDetail_dato ItemDetail_body_numbers">Stock: {oneProduct.stock}</div>
                        </div>
                    </div>
                    <div className="ItemDetail_footer">
                    {
                        added ? 
                        <Link to="/cart">
                            <Button variant="outline" color="violet"> Comprar ahora </Button>
                        </Link>
                        :
                        <ItemCount quantity={quantity} setQuantity={setQuantity} initial={oneProduct.initial} stock={oneProduct.stock} onAdd={onAdd}/>
                    }
                    </div>
                </div>
            </section>
            
        </>
    )
}
export { ItemDetail }