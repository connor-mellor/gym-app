import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Navigation = () => {
    const NavItems: Navigation = {
        title: "Progress Gym Tracker",
        ctaOne: "View PB's",
        ctaTwo: "Record PB's"
    }
    
    return (
        <div className={styles.nav}>
          <div className={styles.center}>
            <div className={styles.logoContainer}>
              <Image
                src="/muscle-flex.svg"
                alt="muscle flex logo"
                className={styles.logo}
                width={100}
                height={75}
                priority
              />
            </div>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}> {NavItems.title} </h1>
            </div>
          </div>

          <div className={styles.center}>
            <p className={styles.typography}>
              <a href="#"> {NavItems.ctaOne} </a>
            </p>
            <p className={styles.typography}>
              <a href="#" className={styles.cta}> {NavItems.ctaTwo} </a>
            </p>
          </div>
        </div>
    )
}

export default Navigation;