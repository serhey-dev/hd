import Image from 'next/image';

import ButtonLink from '@/components/button-link';
import ParallaxBackground from '@/components/parallax-background';

export default function SectionC() {
  return (
    <div className="min-h-screen relative border-t border-black">
      <ParallaxBackground className="bg-cover opacity-20" backgroundImage="/images/photos/77.png" />
      <div className="z-50 relative min-h-screen flex flex-row items-center justify-between p-24 pt-36 mx-36">
        <Image
          src="/images/photos/77.png"
          alt="logo"
          className="block max-w-full rounded-full border border-black object-cover mx-auto"
          width={400}
          height={400}
        />
        <div className="ml-24 w-2/3">
          <h3 className="text-3xl font-serif text-black mb-6">Записуйся на консультацію!</h3>
          <p className="font-sans italic text-black text-lg">
            консультацію! Записуйся на консультаціюа консультацію! Записуйся на консультацію!
            Записуйся на консультацію!Записуйся на консультацію! Записуйся на консультацію!
            Записуйся
          </p>
          <p className="font-sans italic text-black text-lg mt-5">
            Записуйся на консультацію! консультацію! Записуйся на консультацію! Записуйся на
            консультацію!
          </p>
          <p className="font-sans italic text-black text-lg my-6">
            Записуйся на консуонсультаці на консультацію! Записуйся на консультацію! Записуйся на
            консультацію!
          </p>
          <ButtonLink href={'/schedule'} text="Записатись" />
        </div>
      </div>
    </div>
  );
}
