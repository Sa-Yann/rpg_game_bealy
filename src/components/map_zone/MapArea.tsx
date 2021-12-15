import React from 'react'

interface DaProps {
    tiles: any
    mapSize: {
        width:number
        height:number
    }
}

const MapArea: React.FC<DaProps> = ({tiles, mapSize}) =>{



    return (
        <div 
            className='column2'
            style={{
                // making sure that our map size is not cpompromised by margin or paddings or the border
                backgroundColor: 'white',
                boxSizing: "border-box",
                width: mapSize.width,
            }}
        >
            {/* MAP AREA */}
            {
                tiles.map((row:[], y:number) => 
                <div style={{display: 'flex'}}>
                    {
                        row.map((tile:[], x:number) =>(
                        <div
                            
                            style={{
                                borderTop: '1px black solid',
                                borderRight: '1px black solid',
                                width: 32,
                                height: 32
                        }}
                        /> ) 
                        )
                    }
                </div>
                )
            }
        </div>
    )
}

export default MapArea
