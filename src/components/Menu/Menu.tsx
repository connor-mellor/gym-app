import Link from "next/link";
import classes from "./Menu.module.css";
import clsx from "clsx";
import { Box } from "@material-ui/core";

type Props = {
  isOpen: boolean;
  links: Link[];
  toggleBurgerMenu: () => void;
};

export function Menu({ isOpen, links, toggleBurgerMenu }: Props) {
  return (
    <Box className={clsx(classes.menu, isOpen && classes.hamburgerOpen)}>
      {links.map(({ id, name, href }) => (
        <Link key={id} href={href} onClick={() => toggleBurgerMenu()} legacyBehavior>
          {name}
        </Link>
      ))}
    </Box>
  );
}
