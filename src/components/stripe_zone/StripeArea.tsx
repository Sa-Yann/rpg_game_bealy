import React from 'react'
import StripeSetArea from './StripeSetArea';
import useStripeButtonArea from './useStripeButtonArea';
import StripeTopicListArea from './StripeTopicListArea';


function StripeArea() {

    const {render,classBtn_A, classBtn_B, classBtn_C, classBtn_D} = useStripeButtonArea()
    
    return (
        <div className='column1'>
            <StripeSetArea {...{classBtn_A, classBtn_B, classBtn_C, classBtn_D}}/>
            {render}
            <StripeTopicListArea /> 
        </div>
    )
}

export default StripeArea
