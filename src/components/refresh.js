import React from 'react'

//Bellow is the styling of Refresh button
const style = {
	width: "250px",
	margin: "0 auto",
	display: "grid",
    fontSize: "20px",
	fontWeight: "800",
	color: "lime",
	background: "red",
};
//Bellow is the Refresh button that deletes all values from the boxes
const Refresh = (props) => <button name={"btn"} style={style} onClick={props.onClick}>{props.value}</button>

export default Refresh;