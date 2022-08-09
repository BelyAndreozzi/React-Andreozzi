import { Item } from "./Item";

const ItemList = ({ allProducts}) => {
    console.log(allProducts);
    return(
        <>
            {allProducts.map(product => <Item key={product.id} product={product}/>)}
        </>
    )
}


export { ItemList }

