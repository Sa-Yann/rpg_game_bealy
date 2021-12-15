import React from 'react'
import '../index.css'
import StripeArea from './stripe_zone/StripeArea';
import MapArea from './map_zone/MapArea';

function GameWindow() {
    return (
        <div className='windowSize'>
            <StripeArea/>
            <MapArea />
        </div>
    )
}

export default GameWindow
