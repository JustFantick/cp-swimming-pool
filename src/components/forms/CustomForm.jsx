import React from 'react'

const CustomForm = ({ children, action }) => {
	return (
		<form action={action}>
			{children}
		</form>
	)
}

export default CustomForm