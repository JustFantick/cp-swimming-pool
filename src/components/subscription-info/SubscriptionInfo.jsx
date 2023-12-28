import React from 'react'
import styles from './subscriptionInfo.module.scss'

const SubscriptionInfo = ({ dataObj }) => {
	const type = dataObj.subscriptionType == "basic" ? "Базовий" : "Бізнес"

	return (
		<table className={styles.subscriptionInfoContainer}>
			<tr className={styles.subscriptionInfoContainer__firstName}>
				<td>Ім'я:</td>
				<td>{dataObj.firstName}</td>
			</tr>
			<tr className={styles.subscriptionInfoContainer__lastName}>
				<td>Прізвище:</td>
				<td>{dataObj.lastName}</td>
			</tr>
			<tr className={styles.subscriptionInfoContainer__email}>
				<td>Пошта:</td>
				<td>{dataObj.email}</td>
			</tr>
			<tr className={styles.subscriptionInfoContainer__phone}>
				<td>Номер телефону:</td>
				<td>{dataObj.tel}</td>
			</tr>
			<tr className={styles.subscriptionInfoContainer__type}>
				<td>Тариф:</td>
				<td>{type}</td>
			</tr>
			<tr className={styles.subscriptionInfoContainer__term}>
				<td>Термін(міс):</td>
				<td>{dataObj.subscriptionTerm}</td>
			</tr>

		</table>
	)
}

export default SubscriptionInfo