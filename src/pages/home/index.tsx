import Head from '@/components/head';
import SectionHero from '@/pages/home/components/section-hero';
import SectionMethods from '@/pages/home/components/section-methods';
import SectionFeedback from '@/pages/home/components/section-feedback';
import SectionD from '@/pages/home/components/section-d';

export default function Home() {
  return (
    <main>
      <Head title="Home" description="Home" />
      <SectionHero />
      <SectionMethods />
      <SectionFeedback />
      <SectionD />
    </main>
  );
}
