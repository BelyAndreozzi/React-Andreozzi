import { Button } from '@mantine/core';
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import { IconStar, IconStarOff } from '@tabler/icons';

const ItemDetail = ({ oneProduct }) => {

    const [added, setAdded] = useState(false)

    const [quantity, setQuantity] = useState(1)

    const { isInCart, addToCart } = useContext(CartContext)

    const onAdd = () => {
        setAdded(true)
        isInCart(oneProduct.id)
        addToCart(oneProduct, quantity)
    }

    return (
        <>
            <div class="card">
                <div class="card__title">
                    <div class="line">
                    </div>
                    <h3>Jewelry</h3>
                </div>
                <div class="card__body">
                    <div class="half">
                        <div class="featured_text">
                            <h1>{oneProduct.name}</h1>
                            <p class="sub">{oneProduct.category}</p>
                            <p class="price">${oneProduct.price}</p>
                        </div>
                        <div class="image">
                            <img src={oneProduct.img} alt={oneProduct.name} />
                        </div>
                    </div>
                    <div class="half">
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
                        </div>
                        <span class="stock"> Product stock: {oneProduct.stock}</span>
                        <div class="reviews">
                            <ul class="stars">
                                <li><IconStar /></li>
                                <li><IconStar /></li>
                                <li><IconStar /></li>
                                <li><IconStar /></li>
                                <li><IconStarOff /></li>
                            </ul>
                            <span>(1 review)</span>
                        </div>
                    </div>
                </div>
                <div class="card__footer">
                    <div>
                        {
                            added ?
                                <Link to="/cart">
                                    <Button variant="outline" color="violet"> Comprar ahora </Button>
                                </Link>
                                :
                                <ItemCount quantity={quantity} setQuantity={setQuantity} initial={oneProduct.initial} stock={oneProduct.stock} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export { ItemDetail }