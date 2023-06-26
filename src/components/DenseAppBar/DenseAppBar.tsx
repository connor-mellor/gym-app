import * as React from "react";
import Image from "next/legacy/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Image
            src="/muscle-flex.svg"
            alt="muscle flex logo"
            width={45}
            height={45}
            priority
          />
          <Typography variant="h6" color="inherit" component="div">
            Dev Muscles
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
