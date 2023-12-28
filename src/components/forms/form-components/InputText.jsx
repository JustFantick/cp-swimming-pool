import React from 'react'
import styles from './formComponents.module.scss'

const InputText = ({ label, isRequired = true, name }) => {
	return (
		<label>
			<div className={styles.labelGenStyles}>{label}</div>
			<input type="text" className={styles.inputGenStyles} required={isRequired} name={name} />
		</label>
	)
}

export default InputText