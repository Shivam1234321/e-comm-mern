import {Link, useNavigate} from 'react-router-dom';
import checkAuth from '../auth/CheckAuth';

const Nav=() =>{
    const navigate= useNavigate();
    const logout= ()=>{
        localStorage.removeItem('user');
        navigate('/signup');
    }
    return(
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li>{(checkAuth()) ? <Link onClick={logout} to="/signup">Logout</Link> : <Link to="/signup">Sign Up</Link>}</li>
            </ul>
        </div>
    )
}
export default Nav;