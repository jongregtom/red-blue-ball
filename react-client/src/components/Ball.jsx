import React from 'react';

const Ball = function(props) {
  const circleStyle = {
	padding:10,
	margin:20,
	display:"inline-block",
	backgroundColor: props.color,
	borderRadius: "50%",
	width:300,
	height:300
  }
  return (
  <div style={circleStyle}>
  </div> 
  )
}
export default Ball;