import Head from '@/components/layout/head';
import SectionServices from '@/pages/services/components/section-services';

export default function Services() {
  return (
    <main>
      <Head title="Послуги психолога">
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Індивідуальна консультація, парна консультація, коучинг, тренінги. Вартість консультації."
        />

        <meta property="og:locale" content="uk_UA" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Послуги психолога | Психолог Ганна Динда" />
        <meta
          property="og:description"
          content="Індивідуальна консультація, парна консультація, коучинг, тренінги. Вартість консультації."
        />
        <meta property="og:url" content="https://hd-psychologist.com.ua/about" />
        <meta property="og:site_name" content="Психолог Ганна Динда" />
        <meta property="og:image" content="https://hd-psychologist.com.ua/images/photos/me.jpg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="852" />
        <meta property="og:image:type" content="image/jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Індивідуальна консультація, парна консультація, коучинг, тренінги. Вартість консультації."
        />
        <meta name="twitter:title" content="Послуги психолога | Психолог Ганна Динда" />
        <meta name="twitter:image" content="https://hd-psychologist.com.ua/images/photos/me.jpg" />
      </Head>
      <SectionServices />
    </main>
  );
}
