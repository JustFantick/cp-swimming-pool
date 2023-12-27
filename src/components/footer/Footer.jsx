import React from 'react'
import styles from './footer.module.scss'
import Container from '../container/Container'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.footer__body}>
					<div className={styles.footer__left}>© 2023 Dick&Joyer. All rights reserved.</div>

					<div className={styles.footer__right}>
						<Link href="/">Home</Link>
						<Link href="/plans">Plans</Link>
						<Link href="/contacts">Contacts</Link>
					</div>

				</div>

			</Container>

		</footer>
	)
}

export default Footer