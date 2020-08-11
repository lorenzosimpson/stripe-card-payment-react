import React from 'react';
import MainCard from './Card'

function Dash(props) {
    return (
        <div className='dashboard-wrapper'>
            <div className='side-nav'>
                <ul>
                    <li>Dresses</li>
                    <li>Shoes</li>
                    <li>Hats</li>
                </ul>
            </div>
            <div className='store-wrapper'>
                <div className='store-inner'>
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                </div>
            </div>
        </div>
    );
}

export default Dash;