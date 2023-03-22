import Link from "next/link";
import classes from './Menu.module.css'

export function Menu({ hamburgerOpen, toggleHamburger }: any) {
    const open = hamburgerOpen ? classes.hamburgerOpen : ''

    return (
        <div className={`${classes.menu} ${open}`}>
            <div className={classes.close}>
                <div onClick={toggleHamburger}>Close</div>
            </div>
            <Link href="/stats">View PB</Link>
            <Link href="/stats">Record PB</Link>
        </div>
    )
}