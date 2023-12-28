import React from 'react'
import styles from './subscriptionCard.module.scss'

const SubscriptionCard = ({ subscriptionName, price, servicesList }) => {
	return (
		<div className={styles.subscriptionCard}>
			<div className={styles.subscriptionCard__name}>{subscriptionName}</div>

			<div className={styles.subscriptionCard__price}>{price}</div>

			<ul className={styles.subscriptionCard__servicesList}>
				{servicesList.map(liText => (
					<li>{liText}</li>
				))}
			</ul>

		</div>
	)
}

export default SubscriptionCard