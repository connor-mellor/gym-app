import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import { Burger, Menu } from '../components'
import { useState } from 'react';

export default function Navigation() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);
    
    return (
        <div className={styles.nav}>
          <div className={styles.center}>
            <Link href="/">
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
            </Link>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}> Progress Gym Tracker </h1>
            </div>
          </div>

          <div className={styles.center}>
            <div onClick={toggleHamburger}>
                <Burger />
            </div>
                <Menu hamburgerOpen={hamburgerOpen} toggleHamburger={toggleHamburger}/>
          </div>
        </div>
    )
}