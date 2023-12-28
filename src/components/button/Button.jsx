import React from 'react'

const Button = ({ color = 'black', children }) => {
	const colorScheme = {
		bgc: color == 'black' ? 'black' : 'white',
		color: color == 'black' ? 'white' : 'black',
	}
	return (
		<div
			style={{
				cursor: 'pointer',
				padding: '8px 20px',
				backgroundColor: colorScheme.bgc,
				color: colorScheme.color,
				lineHeight: 1.5,
				fontSize: '16px',
				border: '1px solid black'
			}}
		>
			{children}
		</div >
	)
}

export default Button