import { Navigation } from "@/components";
import { DenseAppBar } from "@/components/DenseAppBar";
import "@/styles/globals.css";
import theme from "@/theme";
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material";
import type { AppProps } from "next/app";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  </>;
}
