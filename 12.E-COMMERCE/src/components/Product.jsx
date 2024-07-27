import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {

    const { id, description, price, title, image } = product;

    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p className='title-text'>{title}</p>
                <h3 className='price-text'>{price} ₺</h3>
            </div>

            <div className='flex-row'>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-buton'>Detayına Git</button>
            </div>
        </div>

    )
}

export default Product