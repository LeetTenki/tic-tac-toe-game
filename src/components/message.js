import React from 'react'
//Bellow is the styling of Message component
const style = {
	width: "250px",
	margin: "0 auto",
	display: "grid",
    fontSize: "20px",
	fontWeight: "400",
	textAlign:'center', 
	color: 'lime',
	background:"red",
};
//Bellow is the Message that show current player or the  winner or the Draw when game is over
const Message = (props) => <h1 name={"msg"} style={style}>{props.value}</h1>	

export default Message;