import React from 'react'
import styles from './buttons.module.scss'

const SwitchButton = ({ stateOnText, stateOfftext }) => {
	return (
		<div className={styles.switchButton}>
			<div className={styles.switchButton__stateOn}>{stateOnText}</div>
			<div className={styles.switchButton__stateOff}>{stateOfftext}</div>

		</div>
	)
}

export default SwitchButton