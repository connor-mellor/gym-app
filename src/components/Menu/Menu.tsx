import Link from "next/link";
import classes from './Menu.module.css'
import clsx from 'clsx';

type Props = {
  isOpen: boolean,
  links: Link[],
  toggleBurgerMenu: () => void
}

export function Menu({ isOpen, links, toggleBurgerMenu }: Props) {

  return (
    <div className={clsx(classes.menu, isOpen && classes.hamburgerOpen)}>
      {
        links.map(({ id, name, href }) => 
          <Link key={id} href={href} onClick={() => toggleBurgerMenu()}> 
            { name }
          </Link>
        )
      }
    </div>
  )
}