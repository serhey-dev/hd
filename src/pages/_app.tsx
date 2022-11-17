import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function App(props: AppProps) {
  return (
    <>
      <Header />
        <props.Component {...props.pageProps} />
      <Footer />
    </>
  );
}
