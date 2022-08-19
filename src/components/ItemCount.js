import { useState } from "react";
import { Button } from "@mantine/core";


function ItemCount({stock, initial, onAdd}) {

    const [itemCount, setItemCount] = useState(initial)
    
    const minus = () => itemCount > initial && setItemCount(itemCount - 1)
    
    const plus = () => itemCount < stock && setItemCount(itemCount + 1)


    return(
        <>
        <div className="ItemCount">
            <div className="ItemCount_modifiers">
                <Button onClick={minus} variant="outline" color="red" radius="xl" compact> - </Button>
                <div className="ItemCount_modifiers_n">{itemCount}</div>
                <Button onClick={plus} variant="outline" color="green" radius="xl" compact> + </Button>
            </div>
            <div>
            <Button variant="outline" color="violet" onClick={onAdd} className=""> Añadir al carrito </Button>

            </div>
        </div>
        </>
    )
}

export { ItemCount }