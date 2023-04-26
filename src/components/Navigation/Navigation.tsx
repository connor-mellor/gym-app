import Image from "next/image";
import classes from "./Navigation.module.css";
import Link from "next/link";

import { Burger, Menu } from "..";
import { useState } from "react";

import { links } from "../../../fixtures";
import { Box, Typography } from "@mui/material";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurgerMenu = () => setIsOpen(!isOpen);

  return (
    <Box className={classes.nav}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="start"
        width="50%"
      >
        <Link href="/">
          <Box className={classes.logoContainer}>
            <Image
              src="/muscle-flex.svg"
              alt="muscle flex logo"
              className={classes.logo}
              width={45}
              height={45}
              priority
            />
          </Box>
        </Link>
        <Box className={classes.titleContainer}>
          <Typography
            sx={{ fontFamily: `var(--font-bebas-neue)`, margin: 0 }}
            variant="h4"
          >
            Progress Gym Tracker
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="end" width="50%">
        <Burger isOpen={isOpen} toggleBurgerMenu={toggleBurgerMenu} />
        <Menu
          isOpen={isOpen}
          links={links}
          toggleBurgerMenu={toggleBurgerMenu}
        />
      </Box>
    </Box>
  );
}
