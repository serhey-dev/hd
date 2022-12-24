import Image from 'next/image';

import Slider from '@/components/slider';

export default function SectionCertifications() {
  return (
    <div className="min-h-screen relative border-t border-black">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-6xl text-center font-serif text-black mt-16 mb-4">Освіта</h1>
        <p className="font-sans italic text-black text-lg mt-3 mb-16 px-72 text-center">
          Працювати в цій сфері - моє покликання! Я з великим задоволенням ділюся своїми знаннями та
          досвідом на наших консультаціях.
        </p>
        <div className="border border-black" style={{ height: '500px', width: '750px' }}>
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
