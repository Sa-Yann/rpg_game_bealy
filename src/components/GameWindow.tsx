import React, { useEffect, useState } from 'react'
import '../index.css'
import StripeArea from './stripe_zone/StripeArea';
import MapArea from './map_zone/MapArea';
import tileSetTemplate from '../tileset/tileset.png'





function GameWindow() {

    //TileSet will be needed to build the list of topics in the StripeTopicListArea compnt
    const [spriteSet, setSpriteSet] = useState<string>(tileSetTemplate)

    // we also want to be able to pass on to ather component the selected tile
    const [tiles, setTiles] = useState<Array<Array<{x:number, y:number, id:number, v:{ x:number, y:number}}>>>([]) //!!!!! any to fix

    // in order to be able to use or change the size of the map
    // !!!!check what s up with the mapSize useState type
    const [mapSize, setMapSize] = useState<{width:number, height:number}>({
        width: 596,
        height: 512,
    })

    //setup active tile useState to be able to target a specific tile
    // Setting up the default tile to be eble to pick up and move
    //   x: 1 * 32, y: 1 * 32 => default tile choosen
    const [usedTile, setUsedTile] = useState<{x:number, y:number}>({ x: 1 * 32, y: 1 * 32})

    // When the window load we want to represent the grid of tiles that represent the map area to build
    // so we use : an useeffect Hook
    // same type of matrix as in teh built on to of teh tileSet Area component

    useEffect(() => {
        const _tiles = []
        let id = 0
        // we crerate an inner loop for each row
        for(let y = 0; y < mapSize.height; y = y + 32) {
            const row = []
            for(let x = 0; x < mapSize.width; x = x +32) {
                row.push({
                    x,
                    y,
                    id: id++,
                    // v is a key value: pointingto the exat top position of the selected tile
                    v: {x:-32, y: -32} // since the map start empty we set x:-32, y: -32 so it outisde of our tile set  and can just show a blank tile
                })
            }
            _tiles.push(row)
        }
        setTiles(_tiles)
        // console.log("🚀 ~ file: App.jsx ~ line 43 ~ useEffect ~ _tiles", _tiles)
    }, [mapSize.height, mapSize.width])


    return (
        <div className='windowSize'>
            <StripeArea
                spriteSet={spriteSet}
                usedTile={usedTile}
                setUsedTile={setUsedTile}
            />
            <MapArea 
                tiles={tiles}
                mapSize={mapSize}
                usedTile={usedTile}
                setTiles={setTiles}
            />
        </div>
    )
}

export default GameWindow
