import React from 'react';
import MainCard from './Card'

function Dash(props) {
    return (
        <div className='dashboard-wrapper'>
            <div className='side-nav'>
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            </div>
            <div className='store-wrapper'>
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
    );
}

export default Dash;