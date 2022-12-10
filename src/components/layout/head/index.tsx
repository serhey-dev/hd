import NextHead from 'next/head';

interface IHeadProps {
  title: string;
  description: string;
}

export default function Head(props: IHeadProps) {
  return (
    <NextHead>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
