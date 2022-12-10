import Head from '@/components/layout/head';
import SectionHero from '@/pages/home/components/section-hero';
import SectionMethods from '@/pages/home/components/section-methods';
import SectionFeedback from '@/pages/home/components/section-feedback';
import SectionD from '@/pages/home/components/section-d';
import SectionCallback from '@/pages/services/components/section-callback';

export default function Home() {
  return (
    <main>
      <Head title="Home" description="Home" />
      <SectionHero />
      <SectionMethods />
      <SectionFeedback />
      <SectionD />
      <SectionCallback />
    </main>
  );
}
