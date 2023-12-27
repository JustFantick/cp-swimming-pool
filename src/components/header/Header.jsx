import React from 'react'
import styles from './header.module.scss'
import Container from '../container/Container'
import Logo from '../logo/logo'
import Link from 'next/link'
import Button from '../button/button'

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.header__body}>
					<div className={styles.header__menu}>
						<Logo />
						<Link href="/">Головна</Link>
						<Link href="/plans">Тарифи</Link>
						<Link href="/contacts">Контакти</Link>

					</div>

					<div className={styles.header__buttonSection}>
						<Link href="/check-subscription">
							<Button>Перевірити абонемент</Button>
						</Link>

					</div>

				</div>

			</Container>

		</header>
	)
}

export default Header