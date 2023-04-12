import { Navigation } from '@/components'
import '@/styles/globals.css'
import theme from '@/theme'
import { ThemeProvider } from '@material-ui/core'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Component {...pageProps} /> 
      </ThemeProvider>
    </>
  )
}
