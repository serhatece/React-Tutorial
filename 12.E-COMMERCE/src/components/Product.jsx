import React from 'react'
import '../css/Product.css'

function Product({ product }) {

    const { id, description, price, title, image } = product;

    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p className='title-text'>{title}</p>
                <h3 className='price-text'>{price} ₺</h3>
            </div>

            <div className='flex-row'>
                <button className='detail-buton'>Detayına Git</button>
            </div>
        </div>

    )
}

export default Product