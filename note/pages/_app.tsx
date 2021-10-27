import '../styles/global.css'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/store'
import Layout from '@/layouts'
import { ThemeProvider } from '@emotion/react'
import theme from '@/styles/theme'

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </Provider>
)

export default App
