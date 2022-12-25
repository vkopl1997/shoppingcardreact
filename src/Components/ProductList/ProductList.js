import '../ProductList/ProductList.css'
const ProductList = ({ product, addToCard}) =>{
    return(
        <div className='productlistflex'>
            {product.map((productItem,productIndex)=>{
                return(
                    <div className='seconddiv'>
                        <div className='productitem'>
                            <img src={productItem.url} width='100%' alt='product'/>
                            <p>{productItem.name} | {productItem.category} </p>
                            <p>{productItem.price}$</p>
                            <p>{productItem.seller}</p>
                            <button onClick={()=>addToCard(productItem)}>add to card</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default ProductList