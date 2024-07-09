function Product(props) {

    return (
        <div>
            <div>Ürün Bilgileri</div>
            <div>
                <div>İsim : {props.productName}</div>
                <div>Fiyat : {props.price} TL</div>
            </div>
        </div>
    )
}

export default Product