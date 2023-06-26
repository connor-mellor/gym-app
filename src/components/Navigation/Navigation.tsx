import Image from "next/legacy/image";
import classes from "./Navigation.module.css";
import Link from "next/link";
import { Burger, Menu } from "..";
import { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { links } from "../../../fixtures";
import { Box, Typography } from "@mui/material";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBurgerMenu = () => setIsOpen(!isOpen);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.up("sm"));

  return (
    <Box className={classes.nav}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="start"
        width="50%"
      >
        <Link href="/" legacyBehavior>
          <Box className={classes.logoContainer}>
            <Image
              src="/weightlifter-frontal-silhouette-svgrepo-com.svg"
              alt="weightlifter logo"
              className={classes.logo}
              height={40}
              width={40}
              priority
            />
          </Box>
        </Link>
        {isMobile && (
          <Box className={classes.titleContainer}>
            <Typography className={classes.title} variant="h4">
              Progress Gym Tracker
            </Typography>
          </Box>
        )}
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
