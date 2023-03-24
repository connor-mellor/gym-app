import classes from './Burger.module.css'
import clsx from 'clsx'

export function Burger({ isOpen, toggleBurgerMenu }: any) {
  return (
    <div className={clsx(classes.burger, isOpen && classes.open)} onClick={toggleBurgerMenu}>
      <div />
      <div />
      <div />
    </div>
  )
}