import React from 'react'
import styles from './formComponents.module.scss'

const InputEmail = ({ label, isRequired = true, name }) => {
	return (
		<label>
			<div className={styles.labelGenStyles}>{label}</div>
			<input type="email" className={styles.inputGenStyles} required={isRequired}
				name={name}
				pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
				title='Некоректно введена поштова адреса'
			/>
		</label>)
}

export default InputEmail