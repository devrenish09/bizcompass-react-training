import { Link } from 'react-router-dom';
import './index.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Bizcompass</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/timezone">Timezone</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;