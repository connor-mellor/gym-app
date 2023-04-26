import classes from "./Burger.module.css";
import clsx from "clsx";
import { Box } from "@material-ui/core";

type Props = {
  isOpen: boolean;
  toggleBurgerMenu: () => void;
};

export function Burger({ isOpen, toggleBurgerMenu }: Props) {
  return (
    <Box
      className={clsx(classes.burger, isOpen && classes.open)}
      onClick={toggleBurgerMenu}
    >
      <Box />
      <Box />
      <Box />
    </Box>
  );
}
