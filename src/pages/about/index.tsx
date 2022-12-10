import Head from '@/components/layout/head';
import SectionGeneral from '@/pages/about/components/section-general';
import SectionC from '@/pages/about/components/section-c';
import SectionCertifications from '@/pages/about/components/section-certifications';

export default function About() {
  return (
    <main>
      <Head title="About" description="About" />
      <SectionGeneral />
      <SectionCertifications />
      <SectionC />
    </main>
  );
}
