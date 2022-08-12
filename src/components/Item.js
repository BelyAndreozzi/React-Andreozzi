import { Button, Title} from '@mantine/core';

const Item = ({product}) => {

    return(
        <>
        <div className="itemContainer">
            <div className="itemContainer_Card">
            <Title order={3}>{product.name}</Title>
                <img src={product.img} alt={product.name} width="150px"/>
                <div>${product.price}</div>
                <Button variant="outline" color="violet"> Ver detalle </Button>
            </div>
        </div>
        </>
    )
}

export { Item }