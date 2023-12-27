import React from 'react'
import styles from './footer.module.scss'
import Container from '../container/Container'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.footer__body}>
					<div className={styles.footer__left}>© 2023 Dick&Joyer. Всі права захищені.</div>

					<div className={styles.footer__right}>
						<Link href="/">Головна</Link>
						<Link href="/plans">Тарифи</Link>
						<Link href="/contacts">Контакти</Link>
					</div>

				</div>

			</Container>

		</footer>
	)
}

export default Footer