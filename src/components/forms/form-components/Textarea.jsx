import React from 'react'
import styles from './formComponents.module.scss'

const Textarea = ({ label, isRequired = false, name }) => {
	return (
		<label>
			<div className={styles.labelGenStyles}>{label}</div>
			<textarea name={name} required={isRequired}
				cols="50" rows="7"
				className={styles.inputGenStyles}
			>

			</textarea>
		</label>)
}

export default Textarea