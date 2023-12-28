import React from 'react'
import styles from './formComponents.module.scss'

const SubmitButton = ({ children }) => {
	return (
		<button type='submit' className={styles.submitButton}>
			{children}
		</button>
	)
}

export default SubmitButton