import { Item } from "./Item";

const ItemList = ({ allProducts}) => {
    
    return(
        <>
            {allProducts.map(product => <Item key={product.id} product={product}/>)}
        </>
    )
}


export { ItemList }

