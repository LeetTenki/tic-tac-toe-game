import React from 'react'
import Box from './box'
//Bellow is the styling of the board
const style = {
	width: "250px",
	height: "250px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

//Bellow is the board with 9 squares or Boxes
const Board = (props) => (
    <div style={style}>
        {[ ...Array(9)].map((_, pos) => <Box key={pos} name={pos} onClick={()=>props.onClick(pos)} value={props.value[pos]}/>)}
    </div>
)
export default Board;