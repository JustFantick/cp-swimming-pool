import Image from 'next/image'
import styles from './page.module.scss'
import PageSection from '@/components/page-section/PageSection'
import Link from 'next/link'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <>
      <PageSection>
        <div className={styles.greetingSection}>
          <div className={styles.greetingSection__title}>
            <h1>Ласкаво просимо <br /> до нашого басейну!</h1>
          </div>

          <div className={styles.greetingSection__subtitle}>
            <p>
              Відчуйте справжню релаксацію та розваги у нашому найсучаснішому басейні. Приєднуйтесь до нас вже сьогодні!
            </p>

            <Link href="/plans">
              <Button>Обрати тариф</Button>
            </Link>
          </div>

          <div className={styles.greetingSection__image} style={{ position: 'relative' }}>
            <Image src="/img1.jpg" alt='img1' fill />
          </div>

        </div>

      </PageSection>
    </>
  )
}
