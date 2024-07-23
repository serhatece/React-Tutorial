import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, name, price } = product;
    const navigate = useNavigate();

    return (
        <div style={{ marginBottom: '40px' }}>
            <hr />
            <div>Ürün Detay</div>
            <h3>İsim : {name}</h3>
            <h3>Fiyati : {price}</h3>
            <button onClick={() => navigate("/product-details/" + id)}>Detaylar</button>
        </div>
    )
}

export default Product