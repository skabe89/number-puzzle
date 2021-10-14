import React, {useState} from 'react'
import Tile from './Tile'

export default function Board() {

  const [board, setBoard] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '0'])


  return (
    <div>
      {console.log({board})}
      <Tile char = {board[4]} />
    </div>
  )
}
