import React from 'react';
// import useButtonStripeMap from './useButtonStripeMap'


interface IProps {
    classBtn_A:string
    classBtn_B:string
    classBtn_C:string
    classBtn_D:string
}

const StripeSetArea: React.FC<IProps> =({classBtn_A, classBtn_B, classBtn_C, classBtn_D}) => {

      

    return (
        
        <>
            {
                `${classBtn_A}` === 'isActive' && <div className='spriteSetArea_A'></div> 
                    
            }
            {
                `${classBtn_B}` === 'isActive' && <div className='spriteSetArea_B'></div> 
                    
            }
            {
                `${classBtn_C}` === 'isActive' && <div className='spriteSetArea_C'></div> 
                    
            }
            {
                `${classBtn_D}` === 'isActive' && <div className='spriteSetArea_D'></div> 
                    
            }    
            {/* Test props pass down properly */}
            {/* <p>classBtn_A: {classBtn_A}</p>
            <p>classBtn_B: {classBtn_B}</p>
            <p>classBtn_C: {classBtn_C}</p>
            <p>classBtn_D: {classBtn_D}</p> */}
            
            
            
         </>
        
    )
}

export default StripeSetArea
