import Head from '@/components/layout/head';
import SectionContacts from '@/routes/contacts/components/section-contacts';

export default function Contacts() {
  return (
    <main>
      <Head title="Контакти">
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Психолог у Дніпрі. Онлайн або офлайн консультації. Оберіть будь-який зручний для вас спосіб щоб звʼязатись зі мною та/або записатись на консультацію."
        />

        <meta property="og:locale" content="uk_UA" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Контакти | Психолог Ганна Лищенко" />
        <meta
          property="og:description"
          content="Психолог у Дніпрі. Онлайн або офлайн консультації. Оберіть будь-який зручний для вас спосіб щоб звʼязатись зі мною та/або записатись на консультацію."
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
          content="Психолог у Дніпрі. Онлайн або офлайн консультації. Оберіть будь-який зручний для вас спосіб щоб звʼязатись зі мною та/або записатись на консультацію."
        />
        <meta name="twitter:title" content="Контакти | Психолог Ганна Лищенко" />
        <meta name="twitter:image" content="https://hd-psychologist.com.ua/images/photos/me.jpg" />
      </Head>
      <SectionContacts />
    </main>
  );
}
