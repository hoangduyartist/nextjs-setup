import '../styles/globals.css'
import App from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from '../i18n';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>Next with Antd</Head>
      <Component {...pageProps}/>
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp)

