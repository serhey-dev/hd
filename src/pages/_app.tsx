import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function App(props: AppProps) {
  return (
    <>
      <Header />
      <props.Component {...props.pageProps} />
      <Footer />
    </>
  );
}
