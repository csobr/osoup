import '../styles/globals.css';
import type { AppContext, AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>);
}

MyApp.getInitalProps = async (appContext: AppContext) => {
  const appProps = await MyApp.getInitalProps(appContext);

  return { ...appProps };
};
export default MyApp;
