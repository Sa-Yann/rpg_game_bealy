import React from 'react'

interface DaProps {
    tiles: any
    mapSize: {
        width:number
        height:number
    }
    usedTile: {
        x:number
        y:number
    }
    setTiles: Array<Array<{x:number, y:number, id:number, v:{ x:number, y:number}}>>
    
}

// interface TileState {
//     x: number;
//     y: number;
//     id: number;
//     v: {
//         x: number;
//         y: number;
//     }[]
// }




const MapArea: React.FC<DaProps> = ({tiles, mapSize, usedTile, setTiles}) =>{


    //Cloning the previous matrix
    function cloneMatrix(mtrx:[][]) {
        const cloneAllMtrx = new Array(mtrx.length)

        // we loop throught the stripe Canvas(mtrx) and slice and affect each Canvas row to the respective cloneStripe row
        // we don t push to keep the aray the sam esize lenght as the stripe Canvas(mtrx)
        for (let i=0; i< mtrx.length; i++){
            cloneAllMtrx[i] = mtrx[i].slice(0) // cutting/grabbing the entire previouis matrix row 
        }
        return cloneAllMtrx
    }
    
    
    function dropTile(x:number, y:number):any{
        setTiles(previousState => {
            console.log("🚀 ~ file: Map.jsx ~ line 18 ~ dropTile ~ previousState", previousState)
            //  cloningt he previous matrix sttate then act on that copy
            // by endings the sprite tiles to the copy
            const clone = cloneMatrix(previousState)
            console.log("🚀 ~ file: Map.jsx ~ line 22 ~ dropTile ~ clone", clone)
            //  the currenttile we re dropping need to become the active tile
            const tile = {
                ...clone[y][x], // the tile we re changing on the mapArea
                v: usedTile // changing  the value from the tile we wantto change to the value of the active tile
            }
            // doing the swap : affecting the mpa case to the choosen tile from the indexTile Map
            clone[y][x] = tile
            console.log("🚀 ~ file: Map.jsx ~ line 29 ~ dropTile ~ tile", tile)
            return clone
        })
}

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
                <div 
                    style={{display: 'flex'}}
                    onClick={() => dropTile(x, y)} //the case to drop need x and y droppoint values
                >
                    {
                        row.map((tile:[], x:number) =>(
                        <div
                            
                            style={{
                                borderTop: '1px black solid',
                                borderRight: '1px black solid',
                                // Droping tiles that include a 32px modifier
                                // becomes
                                backgroundPosition: ` -${tile.v.x} px -${tile.v.y}`,
            
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
