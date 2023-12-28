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
      <PageSection>
        <div className={styles.twoBlockedSection}>
          <div className={styles.twoBlockedSection__content}>
            <div className={styles.featureSection}>
              <h2>Відчуйте себе в ідеальному басейні</h2>
              <p>У Dick&Joyer ми пропонуємо унікальний досвід відвідування басейну. Завдяки найсучаснішому контролю температури, просторому розміру та спеціальним зручностям, наш басейн створений для того, щоб забезпечити вам максимальний комфорт та насолоду.</p>
              <ul>
                <li>Регулювання температури: Ідеально налаштовуйте температуру води на свій смак.</li>
                <li>Просторий розмір: Багато місця для плавання та відпочинку.</li>
                <li>Особливі зручності: Насолоджуйтесь нашими розкішними послугами біля басейну.</li>
              </ul>

              <Button color='white'>Дізнатися більше</Button>
            </div>
          </div>

          <div className={styles.twoBlockedSection__image} style={{ position: 'relative' }}>
            <Image src="/img2.jpg" alt='img2' fill />
          </div>

        </div>
      </PageSection>

      <PageSection>
        <div className={styles.twoBlockedSection}>
          <div className={styles.twoBlockedSection__image} style={{ position: 'relative' }}>
            <Image src="/img3.jpg" alt='img3' fill />
          </div>

          <div className={styles.twoBlockedSection__content}>
            <div className={styles.featureListSection}>
              <div className={styles.featureListSection__listItem_marked}>
                <h4>Необмежений доступ до басейну</h4>
                <p>Насолоджуйтесь необмеженим доступом до нашого басейну, що дозволить вам плавати коли завгодно і скільки завгодно. Пориньте в освіжаючий досвід!</p>
              </div>
              <div className={styles.featureListSection__listItem}>
                <h4>Доступні гостьові перепустки</h4>
                <p>Розділіть радість плавання з друзями та родиною, скориставшись нашими гостьовими абонементами. Вони можуть приєднатися до вас, щоб весело провести день у басейні!</p>
              </div>
              <div className={styles.featureListSection__listItem}>
                <h4>Знижки на заходи</h4>
                <p>As a subscriber, you'll enjoy exclusive discounts on exciting poolside events. Don't miss out on the opportunity to save while having a great time!</p>
              </div>
            </div>
          </div>

        </div>
      </PageSection>

      <PageSection>
        <div className={styles.gallerySection}>
          <div className={styles.gallerySection__title}>
            <h2>Галерея басейну</h2>
            <p>Відчуйте спокійну атмосферу нашого басейну</p>
          </div>

          <div className={styles.gallerySectionImages}>
            <div className={styles.gallerySectionImages__img1}>
              <Image src="/img-gallery3.jpg" alt='img-gallery3' fill />
            </div>
            <div className={styles.gallerySectionImages__img2}>
              <Image src="/img-gallery2.jpg" alt='img-gallery2' fill />
            </div>
            <div className={styles.gallerySectionImages__img3}>
              <Image src="/img-gallery1.jpg" alt='img-gallery1' fill />
            </div>

          </div>


        </div>
      </PageSection>
    </>
  )
}
