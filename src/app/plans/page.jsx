import PageSection from '@/components/page-section/PageSection'
import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import SwitchButton from '@/components/button/SwitchButton'
import SubscriptionCard from '@/components/subscription-card/SubscriptionCard'
import Link from 'next/link'
import CustomForm from '@/components/forms/CustomForm'
import InputText from '@/components/forms/form-components/InputText'
import InputEmail from '@/components/forms/form-components/InputEmail'
import InputPhone from '@/components/forms/form-components/InputPhone'
import Select from '@/components/forms/form-components/Select'
import Textarea from '@/components/forms/form-components/Textarea'
import SubmitButton from '@/components/forms/form-components/SubmitButton'
import { addRequestToDb } from '@/server-actions/formActions'

const PlansPage = () => {
	return (
		<>
			<PageSection>
				<div className={styles.titleSection}>
					<h1>Дізнайтеся про наші тарифи</h1>
					<p>Насолоджуйтесь необмеженим доступом до нашого басейну з нашими гнучкими тарифами.</p>
				</div>
			</PageSection>

			<PageSection>
				<div className={styles.twoBlockedSection}>
					<div className={styles.twoBlockedSection__content}>
						<div className={styles.featureListSection}>
							<div className={styles.featureListSection__listItem_marked}>
								<h4>Переваги планів підписки</h4>
								<p>Наші абонементи пропонують ексклюзивний доступ до басейну, роздягалень та додаткових зручностей. Насолоджуйтесь зручним та приємним плаванням з нашими комплексними абонементами.</p>
							</div>
							<div className={styles.featureListSection__listItem}>
								<h4>Зручний доступ до басейну</h4>
								<p>З нашими абонементами ви матимете необмежений доступ до нашого басейну. Занурюйтесь, коли хочете, і отримуйте максимум задоволення від занять плаванням завдяки нашим гнучким варіантам членства.</p>
							</div>
							<div className={styles.featureListSection__listItem}>
								<h4>Гардероб</h4>
								<p>Як абонент, ви матимете доступ до наших зручних шафок для зберігання речей. Зберігайте свої речі в безпеці, поки ви насолоджуєтесь відпочинком у басейні.</p>
							</div>
						</div>
					</div>

					<div className={styles.twoBlockedSection__image} style={{ position: 'relative' }}>
						<Image src="/image-subscription.png" alt='img3' fill />
					</div>

				</div>
			</PageSection>

			<PageSection>
				<div className={styles.plansSection}>
					<div className={styles.plansSection__title}>
						<h2>Доступні тарифи</h2>
						<p>Оберіть тарифний план, відповідаючий вашим потребам та бюджету</p>
					</div>

					<div className={styles.plansSection__switchButton}>
						<SwitchButton stateOnText="Щомісяця" stateOfftext="Щороку" />
					</div>

					<div className={styles.plansSection__planCards}>
						<SubscriptionCard
							subscriptionName="Тариф базовий"
							price="₴200/міс"
							servicesList={[
								"Доступ до басейну",
								"Включені уроки плавання",
								"Знижки на аксесуари для басейну",
							]}
						/>

						<SubscriptionCard
							subscriptionName="Бізнес тариф"
							price="₴350/рік"
							servicesList={[
								"Всі функції з Базового тарифного плану",
								"Пріоритетний доступ до басейну",
								"Ексклюзивні події та акції",
								"Персоналізовані тренінги",
								"Безкоштовне обслуговування басейну",
							]}
						/>
					</div>

				</div>
			</PageSection>

			<PageSection>
				<div className={styles.requestFormSection}>
					<div className={styles.requestFormSection__title}>
						<h2>Залишити заявку</h2>
						<p>
							Маєте питання? Потрібна додаткова інформація? <strong><Link href="/contacts">Зв'яжіться з нами.</Link></strong>
						</p>
					</div>

					<div className={styles.requestFormSection__form}>
						<CustomForm action={addRequestToDb}>
							<div className={styles.formContainer}>
								<div className={styles.formContainer__firstName}>
									<InputText label="Ім'я" name="firstName" />
								</div>

								<div className={styles.formContainer__lastName}>
									<InputText label="Прізвище" name="lastName" />
								</div>
								<div className={styles.formContainer__email}>
									<InputEmail label="Пошта" name="email" />
								</div>
								<div className={styles.formContainer__phone}>
									<InputPhone label="Номер телефону" name="phone" />
								</div>

								<div className={styles.formContainer__type}>
									<Select label="Оберіть тариф"
										name="subscriptionType"
										optionsList={[
											{ value: "basic", text: "Базовий" },
											{ value: "business", text: "Бізнес" },
										]}
									/>
								</div>
								<div className={styles.formContainer__term}>
									<Select label="Оберіть тривалість тарифу"
										name="subscriptionTerm"
										optionsList={[
											{ value: 1, text: 1 },
											{ value: 2, text: 2 },
											{ value: 3, text: 3 },
											{ value: 4, text: 4 },
											{ value: 5, text: 5 },
										]}
									/>
								</div>

								<div className={styles.formContainer__message}>
									<Textarea label="Повідомлення" name="message" />
								</div>

								<div className={styles.formContainer__submit}>
									<SubmitButton>Надіслати</SubmitButton>
								</div>
							</div>

						</CustomForm>

					</div>


				</div>
			</PageSection>
		</>
	)
}

export default PlansPage