import { useState } from "react";
import { Button } from "@mantine/core";


function ItemCount({stock, initial, onAdd}) {
    const [itemCount, setItemCount] = useState(1)
    
    const minus = () => {
        if (itemCount > initial) {
            setItemCount(itemCount - 1)
        }
    }
    
    const plus = () => {
        if (itemCount < stock) {
            setItemCount(itemCount + 1)
        }
    }

    // Función del item count de anterior entrega. Ignorar por ahora. Estaba en ItemListContainer.
  /* const onAdd = (quantity) => {
    alert("Agregaste " + quantity + " productos al carrito.")
  } */


    return(
        <>
        <div className="ItemCount">
            <div className="ItemCount_modifiers">
                <Button onClick={minus} variant="outline" color="red" radius="xl" compact> - </Button>
                <p> {itemCount} </p>
                <Button onClick={plus} variant="outline" color="green" radius="xl" compact> + </Button>
            </div>
            <div className="ItemCount_addToCart">
                <Button onClick={()=>{ if(stock>0) onAdd(itemCount)}} variant="outline" color="violet" radius="xl"> Agregar al carrito </Button>

            </div>
        </div>
        </>
    )
}

export default ItemCount