import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import { createClient, Provider } from 'urql'

const client = createClient({
  url: 'http://localhost:3333/graphql',
  fetchOptions: {
    credentials: 'include',
  },
});

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client} >
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
