import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import '../css/ProductDetails.css';
import { addToBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { description, price, title, image } = selectedProduct || {};
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload))
    }

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = () => {
        const product = products.find(product => product.id === parseInt(id));
        if (product) {
            dispatch(setSelectedProduct(product));
        }
    };

    return (
        <div className="product-details">
            <div className="product-image">
                <img width={300} height={500} src={image} alt="" />
            </div>
            <div className="product-info">
                <h1 className="product-title">{title}</h1>
                <p className="product-description">{description}</p>
                <h1 className="product-price">{price} ₺</h1>
                <div className="product-quantity">
                    <CiCirclePlus onClick={increment} className="quantity-icon" />
                    <span className="quantity-count">{count}</span>
                    <CiCircleMinus onClick={decrement} className="quantity-icon" />
                </div>
                <div>
                    <button onClick={addBasket} className="add-to-cart-button">Sepete Ekle</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
