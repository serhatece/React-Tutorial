import { signOut } from 'firebase/auth';
import '../css/Navbar.css';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Navbar() {

    const navigate = useNavigate();

    const logout = async () => {
        toast.success("Çıkış Yapıldı");
        setTimeout(() => {
            signOut(auth);
            navigate('/auth');
        }, 500);
    }

    return (
        <div className='navbar'>
            <div className='navbar-left'>FİREBASE</div>
            <div onClick={logout} className='navbar-right'>Çıkış Yap</div>
        </div>
    );
}

export default Navbar;
