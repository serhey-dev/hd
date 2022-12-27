import Head from '@/components/layout/head';
import SectionHero from '@/pages/home/components/section-hero';
import SectionMethods from '@/pages/home/components/section-methods';
import SectionFeedback from '@/pages/home/components/section-feedback';
import SectionReasons from '@/pages/home/components/section-reasons';
import SectionCallback from '@/pages/home/components/section-callback';

export default function Home() {
  return (
    <main>
      <Head title="Home" description="Home" />
      <SectionHero />
      <SectionMethods />
      <SectionFeedback />
      <SectionReasons />
      <SectionCallback />
    </main>
  );
}
