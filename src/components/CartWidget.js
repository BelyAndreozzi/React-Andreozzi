import { NavLink } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { ActionIcon, Indicator } from "@mantine/core";

const CartWidget = () => {

  const {itemQuantity} = useContext(CartContext)


  return (
    <>
    <NavLink to="/cart">
      <Indicator color="grape" label={itemQuantity()} inline size={20} radius="sm" withBorder>
        <ActionIcon color="grape" size="xl" radius="xl" variant="outline">
          <IconShoppingCart color="white" size={34}/>
        </ActionIcon>
      </Indicator>
    </NavLink>
    </>
  )
}
export default CartWidget

