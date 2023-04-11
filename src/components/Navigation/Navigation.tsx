import Image from 'next/image'
import classes from './Navigation.module.css'
import Link from 'next/link'

import { Burger, Menu } from '..'
import { useState } from 'react';

import { links } from '../../../fixtures';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBurgerMenu = () => setIsOpen(!isOpen);
    const myLoader = ({ src, width, quality }: Loader) => `https://connor-mellor.github.io/gym-app/${src}?w=${width}&q=${quality || 75}`;
    
    
    return (
        <div className={classes.nav}>
          <div className={classes.center}>
            <Link href="/">
                <div className={classes.logoContainer}>
                  <Image
                    loader={myLoader}
                    src={process.env.assetPrefix + '/muscle-flex.svg'}
                    alt="muscle flex logo"
                    className={classes.logo}
                    width={45}
                    height={45}
                    priority
                  />
                </div>
            </Link>
            <div className={classes.titleContainer}>
              <h1 className={classes.title}> Progress Gym Tracker </h1>
            </div>
          </div>

          <div className={classes.center}>
            <Burger 
              isOpen={isOpen}
              toggleBurgerMenu={toggleBurgerMenu}
            />
            <Menu 
              isOpen={isOpen} 
              links={links}
              toggleBurgerMenu={toggleBurgerMenu}
            />
          </div>
        </div>
    )
}