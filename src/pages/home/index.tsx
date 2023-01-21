import Head from '@/components/layout/head';
import SectionHero from '@/pages/home/components/section-hero';
import SectionMethods from '@/pages/home/components/section-methods';
import SectionFeedback from '@/pages/home/components/section-feedback';
import SectionReasons from '@/pages/home/components/section-reasons';
import SectionCallback from '@/pages/home/components/section-callback';

export default function Home() {
  return (
    <main>
      <Head title="Психолог Дніпро">
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Психолог який тобі допоможе. Підходи: когнітивно-поведінкова терапія, гештальт терапія, арт терапія, коучинг. Психолог з вищою освітою у місті Дніпро. Записатись на консультацію."
        />

        <meta property="og:locale" content="uk_UA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Психолог Дніпро | Психолог Ганна Динда" />
        <meta
          property="og:description"
          content="Психолог який тобі допоможе. Підходи: когнітивно-поведінкова терапія, гештальт терапія, арт терапія, коучинг. Психолог з вищою освітою у місті Дніпро. Записатись на консультацію."
        />
        <meta property="og:url" content="https://hd-psychologist.com.ua/" />
        <meta property="og:site_name" content="Психолог Ганна Динда" />
        <meta property="og:image" content="https://hd-psychologist.com.ua/images/photos/me.jpg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="852" />
        <meta property="og:image:type" content="image/jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Психолог який тобі допоможе. Підходи: когнітивно-поведінкова терапія, гештальт терапія, арт терапія, коучинг. Психолог з вищою освітою у місті Дніпро. Записатись на консультацію."
        />
        <meta name="twitter:title" content="Психолог Дніпро | Психолог Ганна Динда" />
        <meta name="twitter:image" content="https://hd-psychologist.com.ua/images/photos/me.jpg" />
      </Head>
      <SectionHero />
      <SectionMethods />
      <SectionFeedback />
      <SectionReasons />
      <SectionCallback />
    </main>
  );
}
