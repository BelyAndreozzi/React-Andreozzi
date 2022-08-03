import ItemCount from "./ItemCount"
import { Notification } from '@mantine/core';
import { IconCheck } from '@tabler/icons';

const ItemListContainer = ({ grettings }) => {
  

  const onAdd = (quantity) => {
    alert("Agregaste " + quantity + " productos al carrito.")
  }

  return (
    <>
      <p>{grettings}</p>
      <ItemCount initial={1} stock={7} onAdd={onAdd}/>
      <ItemCount initial={1} stock={0} onAdd={onAdd}/>
    </>
  )
}
export default ItemListContainer