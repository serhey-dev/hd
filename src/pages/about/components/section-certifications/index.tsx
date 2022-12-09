import Image from 'next/image';

import Slider from '@/components/slider';

export default function SectionCertifications() {
  return (
    <div className="min-h-screen border-t border-black">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-6xl text-center font-serif text-black mb-16 mt-16">Освіта</h1>
        <div style={{ height: '600px', width: '850px' }}>
          <Slider
            keyName="certifications"
            slides={[
              <Image
                className="object-cover"
                key="certification-1"
                src="/images/certifications/1.jpg"
                alt="certification"
                fill
              />,
              <Image
                className="object-cover"
                key="certification-2"
                src="/images/certifications/2.jpg"
                alt="certification"
                fill
              />,
              <Image
                className="object-cover"
                key="certification-3"
                src="/images/certifications/3.jpg"
                alt="certification"
                fill
              />,
              <Image
                className="object-cover"
                key="certification-4"
                src="/images/certifications/4.jpg"
                alt="certification"
                fill
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
