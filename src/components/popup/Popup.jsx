import React, { useRef } from 'react'
import styles from './popup.module.scss'

const Popup = ({ children, closePopup }) => {
	const popupContainer = useRef(null);
	function outBodyClickHandler(e) {
		if (e.target == popupContainer.current) closePopup();
	}

	return (
		<div ref={popupContainer} className={styles.popupContainer} onClick={outBodyClickHandler}>
			<div className={styles.popupContainer__body}>
				{children}
			</div>

		</div>
	)
}

export default Popup