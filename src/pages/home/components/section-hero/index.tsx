import Image from 'next/image';

import ButtonLink from '@/components/button-link';
import Circle from '@/components/icons/circle';
import ParallaxBackground from '@/components/parallax-background';
import AnimateOnScroll from '@/components/animate-on-scroll';

export default function SectionHero() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <ParallaxBackground backgroundImage="/images/photos/22.png" />
      <div className="absolute w-1/3 mx-auto mt-4 right-20 bottom-8">
        <Circle className="fill-black" />
        <div className="absolute top-28">
          <p className="font-serif text-4xl text-black text-center pt-2">
            Перша консультація - безкоштовна!{' '}
          </p>
          <p className="font-sans px-16 text-black text-center">
            (при навності скріну будь-якого донату на користь Армії/Волонтерів)
          </p>
          <div className="flex items-center justify-center">
            <p className="font-serif text-5xl text-black mr-4">Слава Україні!</p>
            <Image className="mt-2" src="/icons/ukraine.png" alt="ukraine" width={35} height={1} />
          </div>
        </div>
      </div>
      <div className="container w-full flex items-start mb-32 z-10">
        <div className="w-1/2 ml-12">
          <h1 className="text-6xl mb-3 font-serif text-black">
            Ганна Динда - психолог який тобі допоможе!
          </h1>
          <h2 className="font-sans italic text-xl text-black mb-6 leading-8">
            Записуйся на консультацію і ми разом <br />
            вирішимо твої проблеми!
          </h2>
          <AnimateOnScroll
            className="duration-500"
            notScrolledClassName="w-0"
            scrolledClassName="w-1/3"
          >
            <div className="h-px w-full bg-black mb-8" />
          </AnimateOnScroll>
          <ButtonLink href="/schedule" text="Записатись" />
        </div>
      </div>
    </div>
  );
}
