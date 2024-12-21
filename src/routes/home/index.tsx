import Head from '@/components/layout/head';
import SectionHero from '@/routes/home/components/section-hero';
import SectionMethods from '@/routes/home/components/section-methods';
import SectionFeedback from '@/routes/home/components/section-feedback';
import SectionReasons from '@/routes/home/components/section-reasons';
import SectionCallback from '@/routes/home/components/section-callback';

export default function Home() {
  return (
    <main>
      <Head title="Психолог Запоріжжя">
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Психолог який тобі допоможе. Підходи: когнітивно-поведінкова терапія, гештальт терапія, арт терапія, коучинг. Психолог з вищою освітою у місті Запоріжжя. Записатись на консультацію."
        />

        <meta property="og:locale" content="uk_UA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Психолог Запоріжжя | Психолог Ганна Лищенко" />
        <meta
          property="og:description"
          content="Психолог який тобі допоможе. Підходи: когнітивно-поведінкова терапія, гештальт терапія, арт терапія, коучинг. Психолог з вищою освітою у місті Запоріжжя. Записатись на консультацію."
        />
        <meta property="og:url" content="https://hannapsychologist.com.ua/" />
        <meta property="og:site_name" content="Психолог Ганна Лищенко" />
        <meta property="og:image" content="https://hannapsychologist.com.ua/images/photos/me.jpg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="852" />
        <meta property="og:image:type" content="image/jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Психолог який тобі допоможе. Підходи: когнітивно-поведінкова терапія, гештальт терапія, арт терапія, коучинг. Психолог з вищою освітою у місті Запоріжжя. Записатись на консультацію."
        />
        <meta name="twitter:title" content="Психолог Запоріжжя | Психолог Ганна Лищенко" />
        <meta
          name="twitter:image"
          content="https://hannapsychologist.com.ua/images/photos/me.jpg"
        />

        <link rel="canonical" href="https://hannapsychologist.com.ua/"></link>
      </Head>
      <SectionHero />
      <SectionMethods />
      <SectionFeedback />
      <SectionReasons />
      <SectionCallback />
    </main>
  );
}
