import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Checkout } from "./Checkout"
import { ActionIcon, Button } from '@mantine/core';
import { IconShoppingCartX, IconTrash } from '@tabler/icons';
import { Link } from "react-router-dom";

const Cart = () => {

  const { cart, removeItem, clearCart, itemQuantity, itemTotalPrice } = useContext(CartContext)

  if (cart.length > 0) {
    return (
      <div className="cart_container">
        <div className="cart_container_top">
          <div className="cart_header">
            <h3 className="cart_header_title">Carrito de compras</h3>
            <ActionIcon color="red" size="xl" radius="xl" variant="outline" onClick={() => clearCart()}>
              <IconShoppingCartX size={34} />
            </ActionIcon>
          </div>
        </div>
        <div className="cart_container_bottom">
          {
            cart.map((element, index) => {
              return <div className="cards" key={index}>
                <div className="cart">
                  <div className="cart_card">
                    <div className="cart_card_image">
                      <img src={element.img} alt={element.name} width={120} />
                    </div>
                    <div className="cart_card_infoL">
                      <h1 className="cart_card_infoL_title">{element.name}</h1>
                      <h3 className="cart_card_infoL_category">{element.category}</h3>
                    </div>
                    <div className="cart_card_infoR">
                      <div className="cart_card_infoR_price">{element.quantity} x ${element.price}</div>
                      <ActionIcon color="red" radius="xl" variant="light" className="cart_card_infoR_remove" onClick={() => removeItem(element.id)}>
                        <IconTrash size={36} />
                      </ActionIcon>
                    </div>
                  </div>
                </div>

              </div>
            })
          }
          <hr />
          <div className="cart_total">
            <div className="cart_total_container">
              <div>
                <div className="cart_total_subtotal">Subtotal</div>
                <div className="cart_total_products">
                  Productos: {itemQuantity()}
                </div>
              </div>
              <div className="cart_total_price">
                Total: ${itemTotalPrice()}
              </div>
            </div>
            <div className="cart_total_checkout">
              <Checkout />
            </div>
          </div>

        </div>
      </div>
    )
  }


  return (
    <div className="emptyCart">
      <h2>¡Tu carrito está vacío!</h2>
      <Link to="/">
        <Button variant="filled" color="grape" radius="xl" size="xl" uppercase>
          Ir al inicio
        </Button>
      </Link>
    </div>
  )
}
export { Cart }