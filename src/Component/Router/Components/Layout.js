import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Layout extends Component {
    render() {
        return (
            <div>
                <nav className='navbar narbar expand-lg narbar-light bg-light'>
                    <ul className='navbar-nav nr-auto'>
                    <li><Link to={'/Home'} className='nav-link'>Home</Link></li>
                    <li><Link to={'/Topic'} className='nav-link'>Contact</Link></li>
                    <li><Link to={'/About'} className='nav-link'>About</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Layout;