'use client'
import React, { useRef } from 'react'

const CustomForm = ({ children, action }) => {
	const formRef = useRef(null);

	return (
		<form ref={formRef} action={async formData => {
			formRef.current?.reset();
			await action(formData);
		}}>
			{children}
		</form>
	)
}

export default CustomForm