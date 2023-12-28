import React from 'react'
import styles from './formComponents.module.scss'

const InputPhone = ({ label, isRequired = true, name }) => {
	return (
		<label>
			<div className={styles.labelGenStyles}>{label}</div>
			<input type="tel" className={styles.inputGenStyles} required={isRequired}
				name={name}
				pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
				title='Некоректно введений номер телефону'
			/>
		</label>
	)
}

export default InputPhone