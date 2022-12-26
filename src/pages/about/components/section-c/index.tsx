import Image from 'next/image';

import ButtonLink from '@/components/buttons/button-link';
import ParallaxBackground from '@/components/parallax-background';
import AnimateOnScroll from '@/components/animate-on-scroll';

export default function SectionC() {
  return (
    <div className="min-h-screen relative border-t border-black">
      <ParallaxBackground
        className="bg-cover opacity-20"
        backgroundImage="/images/photos/about-c.png"
      />
      <div className="z-50 relative flex min-h-screen flex-row items-center justify-between p-24 pt-36 mx-36">
        <Image
          src="/images/photos/about-c.png"
          alt="logo"
          className="block max-w-full rounded-full border border-black object-cover mx-auto"
          width={400}
          height={400}
        />
        <div className="ml-24 w-2/3">
          <h3 className="text-3xl font-serif text-black mb-6">Записуйся на консультацію!</h3>
          <p className="font-sans italic text-black text-lg">
            Працювати в цій сфері - моє покликання! Я з великим задоволенням ділюся своїми знаннями
            та досвідом на наших консультаціях. Тож якщо Ви відчуваєте що вам потрібна допомога - не
            зволікайте!
          </p>

          {/* <AnimateOnScroll
            className="duration-500"
            notScrolledClassName="w-0"
            scrolledClassName="w-1/2"
            bottomOffsetToAnimate={200}
          >
            <div className="h-0.5 w-full bg-black mt-8" />
          </AnimateOnScroll>
          <p className="font-sans italic text-black text-lg my-6">
            Записуйся на консуонсультаці на консультацію! Записуйся на консультацію! Записуйся на
            консультацію!
          </p> */}
          <ButtonLink href={'/schedule'} className="mt-8" text="Записатись" />
        </div>
      </div>
    </div>
  );
}
