import Link from "next/link";
import classes from './Menu.module.css'
import clsx from 'clsx';

type Props = {
  isOpen: boolean,
  links: Link[],
}

export function Menu({ isOpen, links }: Props) {

  return (
    <div className={clsx(classes.menu, isOpen && classes.hamburgerOpen)}>
      {
        links.map(({ name, href }, index) => 
          <Link key={index} href={href}> { name } </Link>
        )
      }
      
    </div>
  )
}