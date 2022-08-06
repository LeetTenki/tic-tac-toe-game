import React from 'react';

//Bellow is the styling of the squares or Boxes
const style = {
	border: "2px solid blue",
	fontSize: "40px",
	background: "lime",
}   

/*
box.js is the units structure of the board user interface.
It is made up of button.
When is clicked it will call the function passed from porps.
*/
const Box = (props) => <button name={props.name} style={style} onClick={props.onClick}> {props.value} </button>
export default Box;
