import React from 'react'
// import ButtonStripeMap from './ButtonStripeMap';
import useButtonStripeMap from './useButtonStripeMap'

function useStripeButtonArea() {

    // A hook in a hook : wierd I know...willl coreect it if i got time
    const { render , classBtn_A, classBtn_B, classBtn_C, classBtn_D} = useButtonStripeMap()


    return {
        classBtn_A, classBtn_B, classBtn_C, classBtn_D,
        render: (
        <div className='spriteButtonArea'>
            {/* <ButtonStripeMap /> */}
            {render}
        </div>
    )}
}

export default useStripeButtonArea
