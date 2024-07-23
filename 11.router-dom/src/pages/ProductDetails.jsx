import { useParams } from 'react-router-dom'
import { products } from '../data/product';
import Product from '../components/Product';

function ProductDetails() {

    const { id } = useParams();

    return (
        <div>
            <h1>Ürün Detaylari</h1>
            <hr />
            {
                products && products.map((product) => {
                    if (product.id == id) {
                        return <Product product={product} />
                    }
                })
            }
        </div>
    )
}

export default ProductDetails