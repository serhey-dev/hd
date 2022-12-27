import Image from 'next/image';

import ButtonLink from '@/components/buttons/button-link';
import ParallaxBackground from '@/components/parallax-background';

export default function SectionHero() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <ParallaxBackground
        backgroundImage="/images/photos/home-hero.png"
        className="bg-center bg-cover lg:bg-contain md:bg-right-bottom"
      />
      <div className="absolute z-30 bottom-12 container flex flex-row items-center justify-center">
        <p className="font-sans italic text-black px-3 md:text-lg">
          Перша консультація - за донат! (при навності скріну будь-якого донату на користь
          Армії/Волонтерів). Слава Україні!&nbsp;&nbsp;
          <Image
            src="/icons/ukraine.png"
            alt="Ukraine flag"
            className="inline mb-0.5"
            width={28}
            height={1}
          />
        </p>
      </div>
      <div className="relative z-20 container w-full">
        <div className="max-w-[700px] px-3 xl:pb-32 xl:pt-0 lg:pl-12">
          <h1 className="font-serif text-black leading-[4rem] mb-3 md:text-7xl text-6xl md:leading-[5rem]">
            Ганна Динда - психолог, який тобі допоможе!
          </h1>
          <h2 className="font-sans italic text-lg text-black mb-6 leading-8 md:text-xl">
            Записуйся на консультацію і ми разом знайдемо рішення!
          </h2>
          <ButtonLink href="/schedule" text="Записатись" />
        </div>
      </div>
    </div>
  );
}
