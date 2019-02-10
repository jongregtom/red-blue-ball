import React from 'react';

const Ball = function(props) {
  const circleStyle = {
	padding:10,
	margin:'50px auto 0',
	display:"block",
	background: `radial-gradient(circle at 65% 15%, white 1px, white 3%, ${props.color} 90%, white 5%)`,
	borderRadius: "50%",
	width:600,
	height:600
  }
  return (
  <div style={circleStyle}>
  </div> 
  )
}
export default Ball;