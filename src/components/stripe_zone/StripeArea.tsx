import React from 'react'
import StripeSetArea from './StripeSetArea';
import useStripeButtonArea from './useStripeButtonArea';
import StripeTopicListArea from './StripeTopicListArea';


interface IPropss {
    spriteSet: string
    usedTile: {
        x:number
        y:number
    }
    setUsedTile:any
}

const StripeArea: React.FC<IPropss> = ({spriteSet, usedTile, setUsedTile}) => {

    const {render,classBtn_A, classBtn_B, classBtn_C, classBtn_D} = useStripeButtonArea()
    
    return (
        <div className='column1'
        style={{
            position: 'relative'
        }}
        >
            <StripeSetArea 
                {...{classBtn_A, classBtn_B, classBtn_C, classBtn_D, spriteSet, usedTile, setUsedTile}}
            />
            {render}
            <StripeTopicListArea /> 
        </div>
    )
}

export default StripeArea
