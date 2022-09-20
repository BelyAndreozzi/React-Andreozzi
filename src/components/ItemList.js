import { Item } from "./Item";

const ItemList = ({ allProducts}) => {
    
    return(
        <>
        <div className="bottom_page">
            {allProducts.map(product => <Item key={product.id} product={product}/>)}
        </div>
        </>
    )
}


export { ItemList }

