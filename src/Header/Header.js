import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='Header-container'>
            <nav className='nav-content'>
                <a href="\Home">Home</a>
                <a href="\About">About</a>
                <a href="\Product">Products</a>
                <a href="\Service">Service</a>
            </nav>
            {/* <div className='search-item'>
                <input type="text" />
                <button>Search</button>

            </div> */}
        </div>
    );
};

export default Header;