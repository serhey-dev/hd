import Image from 'next/image';

import ButtonLink from '@/components/button-link';
import Circle from '@/components/icons/circle';
import ParallaxBackground from '@/components/parallax-background';
import AnimateOnScroll from '@/components/animate-on-scroll';

export default function SectionHero() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <ParallaxBackground backgroundImage="/images/photos/22.png" />
      {/* <div style={{ left: '110px', width: '800px'}} className="absolute mx-auto mt-4 bottom-12">
        <Circle className="fill-black" />
        <div className=" top-16 pt-2">
          <p className="font-serif text-4xl text-black text-center pt-2 mb-3">
            Перша консультація - за донат!{' '}
          </p>
          <p className="font-sans text-black text-center text-lg mb-2">
            (при навності скріну будь-якого донату <br /> на користь Армії/Волонтерів)
          </p>
          <div className="flex items-center justify-center">
            <p className="font-serif text-4xl text-black mr-4">Слава Україні!</p>
            <Image className="mt-2" src="/icons/ukraine.png" alt="ukraine" width={35} height={1} />
          </div>
        </div>
      </div> */}
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
