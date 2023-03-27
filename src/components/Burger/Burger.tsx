import classes from './Burger.module.css'
import clsx from 'clsx'

type Props = {
  isOpen: boolean,
  toggleBurgerMenu: () => void
}

export function Burger({ isOpen, toggleBurgerMenu }: Props) {
  return (
    <div className={clsx(classes.burger, isOpen && classes.open)} onClick={toggleBurgerMenu}>
      <div />
      <div />
      <div />
    </div>
  )
}