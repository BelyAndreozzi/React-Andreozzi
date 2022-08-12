import { Button} from '@mantine/core';

const ItemDetail = ({oneProduct}) => {
    console.log(oneProduct);
    return(
        <>
            <section className="ItemDetail">
                <div>
                    <img src={oneProduct.img} alt={oneProduct.name} className="ItemDetail_img"/>
                </div>
                <div className="ItemDetail_info">
                    <div className="ItemDetail_header">
                        <div className="ItemDetail_dato">{oneProduct.category}</div>
                        <h2 className='ItemDetail_title'>{oneProduct.name}</h2>
                    </div>
                    <div className="ItemDetail_body">
                        <div>Descripción: {oneProduct.description}</div>
                        <div className="ItemDetail_body_numbers">
                            <div>Precio: ${oneProduct.price}</div>
                            <div className="ItemDetail_dato ItemDetail_body_numbers">Stock: {oneProduct.stock}</div>
                        </div>
                    </div>
                    <div className="ItemDetail_footer">
                        <Button variant="outline" color="violet" className="ItemDetail_footer_btn"> Añadir al carrito </Button>
                        <Button variant="outline" color="violet" className="ItemDetail_footer_btn"> Comprar ahora </Button>
                    </div>
                </div>
            </section>
            
        </>
    )
}
export { ItemDetail }