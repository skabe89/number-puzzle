import React, {useState} from 'react'
import Tile from './Tile'

export default function Board() {

  const [board, setBoard] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '0'])


  return (
    <div className="board">
     <Tile char = {board[0]}/>
     <Tile char = {board[1]}/>
     <Tile char = {board[2]}/>
     <Tile char = {board[3]}/>
     <Tile char = {board[4]}/>
     <Tile char = {board[5]}/>
     <Tile char = {board[6]}/>
     <Tile char = {board[7]}/>
     <Tile char = {board[8]}/>
    </div>
  )
}
