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
                <li><Link to="/timezone">Timezone </Link>
                    <p>Date Function</p>
                </li>
                <li><Link to="/functions">Function</Link>
                    <p>Sync/Async</p>
                </li>
                <li><Link to="/counter">Counter/Timer</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;