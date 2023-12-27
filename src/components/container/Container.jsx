import React from 'react'

const Container = ({ children }) => {
	return (
		<div style={{
			maxWidth: '1340',
			paddingLeft: '20px',
			paddingRight: '20px',
			margin: '0 auto',
		}}>
			{children}
		</div>
	)
}

export default Container