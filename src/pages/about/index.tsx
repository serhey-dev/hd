import Head from '@/components/layout/head';
import SectionHero from '@/pages/about/components/section-hero';
import SectionInfo from '@/pages/about/components/section-info';
import SectionCertifications from '@/pages/about/components/section-certifications';

export default function About() {
  return (
    <main>
      <Head title="About" description="About" />
      <SectionHero />
      <SectionCertifications />
      <SectionInfo />
    </main>
  );
}
