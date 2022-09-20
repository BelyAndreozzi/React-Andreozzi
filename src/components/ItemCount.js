import { Button } from "@mantine/core";
import { showNotification } from '@mantine/notifications';
import { IconShoppingCartPlus } from "@tabler/icons";

function ItemCount({ quantity, setQuantity, stock, onAdd }) {

    const minus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const plus = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    return (
        <>
            <div className="ItemCount">
                <div className="ItemCount_modifiers">
                    <Button onClick={minus} variant="outline" color="red" radius="xl" compact> - </Button>
                    <div className="ItemCount_modifiers_n">{quantity}</div>
                    <Button onClick={plus} variant="outline" color="green" radius="xl" compact> + </Button>
                </div>
                <div>
                    <Button variant="outline" color="violet" onClick={() => {
                        onAdd()
                        showNotification({
                            title: 'Producto agregado al carrito',
                            message: '',
                            icon: <IconShoppingCartPlus />,
                            color: "grape",
                            radius: "xl"
                        })
                    }} > Añadir al carrito </Button>

                </div>
            </div>
        </>
    )
}

export { ItemCount }