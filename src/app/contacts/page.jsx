'use client'
import PageSection from '@/components/page-section/PageSection'
import React from 'react'
import styles from './page.module.scss'
import CustomForm from '@/components/forms/CustomForm'
import InputText from '@/components/forms/form-components/InputText'
import InputEmail from '@/components/forms/form-components/InputEmail'
import Textarea from '@/components/forms/form-components/Textarea'
import SubmitButton from '@/components/forms/form-components/SubmitButton'

const ContactsPage = () => {
	return (
		<>
			<PageSection>
				<div className={styles.contactsPageTitle}>
					<h2>Зв'яжіться з нами</h2>
				</div>
				<div className={styles.contactsPageForm}>
					<CustomForm action={() => console.log('function missed')}>
						<div className={styles.formContainer}>
							<InputText label="Повне ім'я" name="fullName" />

							<InputEmail label="Пошта" name="email" />

							<Textarea label="Повідомлення" name="message" />

							<div className={styles.formContainer__submit}>
								<SubmitButton>Надіслати</SubmitButton>
							</div>

						</div>
					</CustomForm>

				</div>
			</PageSection>
		</>
	)
}

export default ContactsPage