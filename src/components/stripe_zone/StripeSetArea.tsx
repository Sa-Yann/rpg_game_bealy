import React from 'react';
// import useButtonStripeMap from './useButtonStripeMap'


interface IProps {
    classBtn_A:string
    classBtn_B:string
    classBtn_C:string
    classBtn_D:string
}

const StripeSetArea: React.FC<IProps> =({classBtn_A, classBtn_B, classBtn_C, classBtn_D}) => {

    const height = 320
    const width = 256

    const cases = []
    // each cases is having an id
    let id = 0 

    for (let y = 0; y < height; y = y + 32) {
        const row = [];
        for (let x = 0; x < width; x = x + 32) {
            row.push({
                x, y, id: id++
            })
        }
        cases.push(row);
        
    }
    console.log(cases)


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
            <div
            style={{
                position: 'absolute',
                top: 0,
                left:0,
                zIndex: 100
            }}   
            >
            {
                cases.map((row,y) => 
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        {
                            row.map((tile, x) => 
                                <div
                                    style={{
                                        borderTop: '1px black solid',
                                        borderRight: '1px black solid',
                                        
                                        width: 32,
                                        height: 32,
                                    }}
                                />
                               
                            ) 
                        }
                    </div>
                )
            }
            </div>
            
            
            
            
         </>
        
    )
}

export default StripeSetArea
