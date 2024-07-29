import { useState } from 'react';
import '../css/Header.css';
import { BsBasket3Fill } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';

function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.basket);

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
                <img onClick={() => navigate("/")} className='logo' src='./src/img/logo2.png' />
                <p className='logo-text'>SERHAT ECE A.Ş</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Search' />
                <div>
                    {
                        theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />
                    }
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <BsBasket3Fill style={{ marginRight: '7px' }} className='icon' />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Header