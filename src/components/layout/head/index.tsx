import NextHead from 'next/head';

interface IHeadProps {
  title: string;
  children?: React.ReactNode;
}

export default function Head(props: IHeadProps) {
  return (
    <NextHead>
      <title>{props.title} | Психолог Ганна Динда</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#ae413a" />
      <meta name="theme-color" content="#ffffff" />
      {props.children}
    </NextHead>
  );
}
