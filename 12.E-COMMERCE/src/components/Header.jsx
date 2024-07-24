import { useState } from 'react';
import '../css/Header.css';
import { BsBasket3Fill } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

function Header() {

    const [theme, setTheme] = useState(false);
    const changeTheme = () => {
        const root = document.getElementById("root");
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
        setTheme(!theme);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row'>
                <img className='logo' src='./src/img/logo2.png' />
                <p className='logo-text'>SERHAT ECE A.Ş</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Search' />
                <div >
                    {
                        theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />
                    }
                    <BsBasket3Fill className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Header