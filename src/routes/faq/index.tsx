import Head from '@/components/layout/head';
import SectionFAQ from '@/routes/faq/components/section-faq';

export default function FAQ() {
  return (
    <main>
      <Head title="Питання та відповіді">
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Популярні питання про психологію та коучинг і відповіді на них. Як проходить консультація. Мій графік роботи."
        />

        <meta property="og:locale" content="uk_UA" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Питання та відповіді | Психолог Ганна Лищенко" />
        <meta
          property="og:description"
          content="Популярні питання про психологію та коучинг і відповіді на них. Як проходить консультація. Мій графік роботи."
        />
        <meta property="og:url" content="https://hd-psychologist.com.ua/about" />
        <meta property="og:site_name" content="Психолог Ганна Лищенко" />
        <meta property="og:image" content="https://hd-psychologist.com.ua/images/photos/me.jpg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="852" />
        <meta property="og:image:type" content="image/jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Популярні питання про психологію та коучинг і відповіді на них. Як проходить консультація. Мій графік роботи."
        />
        <meta name="twitter:title" content="Питання та відповіді | Психолог Ганна Лищенко" />
        <meta name="twitter:image" content="https://hd-psychologist.com.ua/images/photos/me.jpg" />
      </Head>
      <SectionFAQ />
    </main>
  );
}
