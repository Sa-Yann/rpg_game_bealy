import React from 'react'
import StripeSetArea from './StripeSetArea';
import StripeButtonArea from './StripeButtonArea';
import StripeTopicListArea from './StripeTopicListArea';

function StripeMapArea() {
    return (
        <div className='column1'>
            <StripeSetArea />
            <StripeButtonArea />
            <StripeTopicListArea /> 
        </div>
    )
}

export default StripeMapArea
