import Head from '@/components/layout/head';
import SectionHero from '@/routes/about/components/section-hero';
import SectionInfo from '@/routes/about/components/section-info';
import SectionCertifications from '@/routes/about/components/section-certifications';

export default function About() {
  return (
    <main>
      <Head title="Про мене">
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Психолог Ганна Лищенко. Психолог з вищою освітою та сертифікаціями. Записатись на консультацію або коучинг сесію."
        />

        <meta property="og:locale" content="uk_UA" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Про мене | Психолог Ганна Лищенко" />
        <meta
          property="og:description"
          content="Психолог Ганна Лищенко. Психолог з вищою освітою та сертифікаціями. Записатись на консультацію або коучинг сесію."
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
          content="Психолог Ганна Лищенко. Психолог з вищою освітою та сертифікаціями. Записатись на консультацію або коучинг сесію."
        />
        <meta name="twitter:title" content="Про мене | Психолог Ганна Лищенко" />
        <meta name="twitter:image" content="https://hd-psychologist.com.ua/images/photos/me.jpg" />
      </Head>
      <SectionHero />
      <SectionCertifications />
      <SectionInfo />
    </main>
  );
}
