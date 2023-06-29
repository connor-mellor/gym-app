import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    h1: {
      fontSize: "3rem",
      fontFamily: "var(--font-bebas-neue)",
      lineHeight: 1.2,
      fontWeight: 700,
      marginBottom: "1rem",
      "@media (max-width: 767px)": {
        fontSize: "2rem",
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "2.25rem",
      lineHeight: 1.2,
      fontWeight: 700,
      marginBottom: "1rem",
      "@media (max-width: 767px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight: 1.2,
      fontWeight: 700,
      marginBottom: "0.75rem",
      "@media (max-width: 767px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      "@media (max-width: 767px)": {
        fontSize: "0.875rem",
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.2,
      "@media (max-width: 767px)": {
        fontSize: "0.75rem",
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        fontSize: "0.875rem",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (portrait phones)
      sm: 600, // Small devices (landscape phones)
      md: 960, // Medium devices (tablets)
      lg: 1280, // Large devices (laptops/desktops)
      xl: 1920, // Extra large devices (large desktops)
    },
  },
});

export default theme;
