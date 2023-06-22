import '@/styles/globals.css'
import { ThemeProvider, extendTheme } from '@mui/joy'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const HTWK_Theme = extendTheme({
    fontFamily:{
      body:"'SourceSans', sans-serif;"
    }
  })
  return <ThemeProvider theme={HTWK_Theme}><Component {...pageProps} /></ThemeProvider>
}
