import React , { useState } from 'react'

export default function useButtonStripeMap() {

    const [ classBtn_A , setClassBtn_A ] = useState<string>('isActive');
    const [ classBtn_B , setClassBtn_B ] = useState<string>('isNotActive');
    const [ classBtn_C , setClassBtn_C ] = useState<string>('isNotActive');
    const [ classBtn_D , setClassBtn_D ] = useState<string>('isNotActive');

    


    const handleOnClick_A = () => {
        
        // console.log('button A clicked')
        
        classBtn_A === 'isNotActive'? 
            setClassBtn_A('isActive') : 
            setClassBtn_A('isActive') ; 
            setClassBtn_B('isNotActive') ; 
            setClassBtn_C('isNotActive') ; 
            setClassBtn_D('isNotActive')
    }

    const handleOnClick_B = () => {
        
        // console.log('button B clicked')
        
        classBtn_B === 'isNotActive'? 
            setClassBtn_B('isActive') : 
            setClassBtn_B('isActive') ; 
            setClassBtn_A('isNotActive') ; 
            setClassBtn_C('isNotActive'); 
            setClassBtn_D('isNotActive')
        // console.log('classBtn_B: ' + classBtn_B)
    }
    
    const handleOnClick_C = () => {
        
        // console.log('button C clicked')
        
        classBtn_C === 'isNotActive'? 
            setClassBtn_C('isActive') : 
            setClassBtn_C('isActive') ; 
            setClassBtn_A('isNotActive') ; 
            setClassBtn_B('isNotActive'); 
            setClassBtn_D('isNotActive') 
    }

    const handleOnClick_D = () => {
        
        // console.log('button D clicked')
        
        classBtn_D === 'isNotActive'? 
            setClassBtn_D('isActive') : 
            setClassBtn_D('isActive') ; 
            setClassBtn_A('isNotActive') ; 
            setClassBtn_B('isNotActive') ; 
            setClassBtn_C('isNotActive') 
    }

    return {
        classBtn_A, classBtn_B, classBtn_C,classBtn_D,
        render:(
        <div className='ButtonStripeMap'
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '15px',
            }}
        >
            <button 
                className={`btn ${classBtn_A}`} 
                onClick={handleOnClick_A}
            >A</button>
            <button className={`btn ${classBtn_B}`}
                onClick={handleOnClick_B}
            >B
            </button>
            <button className={`btn ${classBtn_C}`}
                onClick={handleOnClick_C}
            >C
            </button>
            <button className={`btn ${classBtn_D}`}
                onClick={handleOnClick_D}
            >D
            </button>
        </div>
    )}
}

 
