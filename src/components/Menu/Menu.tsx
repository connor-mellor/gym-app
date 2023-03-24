import Link from "next/link";
import classes from './Menu.module.css'
import clsx from 'clsx';

type Props = {
  isOpen: boolean,
  links: Link[]
}

export function Menu({ isOpen, links }: any) {
  return (
    <div className={clsx(classes.menu, isOpen && classes.hamburgerOpen)}>
      <Link href="/"> Dashboard </Link>
      <Link href="/stats"> View PBs </Link>
      <Link href="/stats"> Record PBs </Link>
      {/* {
        links.map(({ name, href }) => {
          console.log(name, href)
        })
      } */}

      {/* {links.map(({ name, href }, index) => {        
        index ? (
          <Link key={index} href={href}> {name} </Link>
        ) : null
      })} */}
    </div>
  )
}