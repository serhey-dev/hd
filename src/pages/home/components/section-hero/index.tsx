import Image from 'next/image';

import ButtonLink from '@/components/button-link';
import ParallaxBackground from '@/components/parallax-background';

export default function SectionHero() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <ParallaxBackground backgroundImage="/images/photos/home-hero.png" />
      <div
        style={{ left: '210px' }}
        className="absolute mx-auto mt-4 bottom-12 flex flex-row items-center"
      >
        <p className="italic font-sans text-lg text-black mr-4">
          Перша консультація - за донат! (при навності скріну будь-якого донату на користь
          Армії/Волонтерів). Слава Україні!
        </p>
        <Image className="" src="/icons/ukraine.png" alt="ukraine" width={35} height={1} />
      </div>
      <div className="container w-full flex items-start mb-32 z-10">
        <div className="w-1/2 ml-12 ">
          <h1
            className="text-7xl mb-3 font-serif text-black leading-24"
            style={{ lineHeight: '80px' }}
          >
            Ганна Динда - психолог, який тобі допоможе!
          </h1>
          <h2 className="font-sans italic text-xl text-black mb-6 leading-8">
            Записуйся на консультацію і ми разом знайдемо рішення!
          </h2>
          <ButtonLink href="/schedule" text="Записатись" />
        </div>
      </div>
    </div>
  );
}
