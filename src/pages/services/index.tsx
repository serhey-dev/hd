import Head from '@/components/head';
import SectionServices from '@/pages/services/components/section-sevices';
import SectionCallback from '@/pages/services/components/section-callback';

export default function Services() {
  return (
    <main>
      <Head title="Services" description="Services" />
      <SectionServices />
      {/* <SectionCallback /> */}
    </main>
  );
}
