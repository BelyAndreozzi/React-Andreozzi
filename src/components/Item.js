import { Button, Title} from '@mantine/core';
import { NavLink } from "react-router-dom"

const Item = ({product}) => {

    return(
        <>
        <div className="itemContainer">
            <div className="itemContainer_Card">
            <Title order={3}>{product.name}</Title>
                <img src={product.img} alt={product.name} width="150px"/>
                <div>${product.price}</div>
                <Button variant="outline" color="violet"> 
                <NavLink to={`/product/${product.id}`}>
                    Ver detalle
                </NavLink>
                 </Button>
            </div>
        </div>
        </>
    )
}

export { Item }