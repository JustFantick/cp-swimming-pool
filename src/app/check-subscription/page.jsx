'use client'
import PageSection from '@/components/page-section/PageSection'
import React, { useState } from 'react'
import styles from './page.module.scss'
import CustomForm from '@/components/forms/CustomForm'
import InputText from '@/components/forms/form-components/InputText'
import InputEmail from '@/components/forms/form-components/InputEmail'
import SubmitButton from '@/components/forms/form-components/SubmitButton'
import { findSubscriptionInfo } from '@/server-actions/formActions'
import Popup from '@/components/popup/Popup'
import SubscriptionInfo from '@/components/subscription-info/SubscriptionInfo'

const CheckSubscriptionPage = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [subscriptionInfo, setSubscriptionInfo] = useState(null);

	const unsuccessfulRequest = <center><h4>Інформації по даному запиту не знайдено</h4></center>;
	const successfulRequest =
		<>
			<center style={{ marginBottom: 15 }}><h4>Запит успішно завершено</h4></center>

			<SubscriptionInfo dataObj={subscriptionInfo} />
		</>;

	return (
		<>
			<PageSection>
				<div className={styles.titleSection}>
					<h2>Введіть дані вашого тарифного плану</h2>
				</div>

				<div className={styles.formSection}>
					<CustomForm action={async formData => {
						const result = await findSubscriptionInfo(formData);
						console.log(result);

						setIsPopupOpen(true);

						if (result.success == true) {
							setSubscriptionInfo(result.foundObj);
						} else {
							setSubscriptionInfo(null);
						}

					}}>
						<div className={styles.formContainer}>
							<InputText label="Ім'я" name="firstName" />
							<InputText label="Прізвище" name="lastName" />
							<InputEmail label="Пошта" name="email" />

							<div className={styles.formContainer__submit}>
								<SubmitButton>Надіслати</SubmitButton>
							</div>
						</div>

					</CustomForm>
				</div>

			</PageSection>

			{isPopupOpen &&
				<Popup closePopup={() => setIsPopupOpen(false)}>
					{subscriptionInfo === null ? unsuccessfulRequest : successfulRequest}
				</Popup>
			}
		</>
	)
}

export default CheckSubscriptionPage