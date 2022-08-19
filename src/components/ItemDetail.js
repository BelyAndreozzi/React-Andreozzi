import { Button} from '@mantine/core';
import { ItemCount } from "./ItemCount";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ItemDetail = ({oneProduct}) => {

    const [added, setAdded] = useState(false)

    const onAdd = () => {
        setAdded(true)
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
                        <NavLink to="/cart">
                            <Button variant="outline" color="violet"> Comprar ahora </Button>
                        </NavLink>
                        :
                        <ItemCount initial={oneProduct.initial} stock={oneProduct.stock} onAdd={onAdd}/>
                    }
                    </div>
                </div>
            </section>
            
        </>
    )
}
export { ItemDetail }