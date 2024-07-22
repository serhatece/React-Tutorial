import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to={"/"}>Ana Sayfa</Link>
            <Link to={"/about"}>Hakkımızda</Link>
            <Link to={"/products"}>Ürünlerimiz</Link>
            <Link to={"/concact"}>İletişim</Link>

        </div>
    )
}

export default Header