import { NavLink } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons";

const CartWidget = () => {
  return (
    <>
    <NavLink to="/cart">
      <IconShoppingCart color="black"/>
    </NavLink>
    </>
  )
}
export default CartWidget

