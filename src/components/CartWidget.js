import { NavLink } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Indicator } from "@mantine/core";

const CartWidget = () => {

  const {itemQuantity} = useContext(CartContext)


  return (
    <>
    <NavLink to="/cart">
      <Indicator color="grape" label={itemQuantity()} inline size={20} radius="sm" withBorder>
        <IconShoppingCart color="white" width="40" height="40"/>
      </Indicator>
    </NavLink>
    </>
  )
}
export default CartWidget

