import React from 'react';
import Nav from './Nav';
import Dash from './Dash';

function Store(props) {
    return (
        <div className='store'>
            <Nav />
            <Dash />
        </div>
    );
}

export default Store;