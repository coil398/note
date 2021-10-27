import '../styles/global.css'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/store'
import Layout from '@/layout'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
)

export default MyApp
