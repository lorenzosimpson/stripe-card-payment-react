import React from 'react';


function Nav() {
    return (
        <div className='nav'>
            <div id='nav-items'>
                <div id='logo-container'>
                <h3>StoreFront</h3>
                </div>

            <span id='search-container'>
            <input id='search' placeholder='Search for a product'></input></span>
            <div id='nav-links-container'>
                <p>FAQ</p>
                <p>Contact</p>
                <button id='login-btn'>Log In</button>
                </div>
            </div>

        </div>
    )
}

export default Nav;