import React from 'react'
import styles from './formComponents.module.scss'

const Select = ({ label, isRequired = true, optionsList, name }) => {
	return (
		<label>
			<div className={styles.labelGenStyles}>
				{label}
			</div>
			<select name={name} className={styles.inputGenStyles}
				title='title'
				required={isRequired}
			>
				{optionsList.map((obj, id) => (
					<option key={id} value={obj.value}>{obj.text}</option>
				))}
			</select>
		</label>
	)
}

export default Select