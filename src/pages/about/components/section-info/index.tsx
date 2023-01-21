import Image from 'next/image';

import ButtonLink from '@/components/buttons/button-link';
import ParallaxBackground from '@/components/parallax-background';

import AboutInfoImage from '@/images/photos/about-info.png';

export default function SectionInfo() {
  return (
    <div className="min-h-screen relative border-t border-black">
      <ParallaxBackground
        className="bg-cover opacity-20 bg-center md:bg-right-bottom"
        backgroundImage="/images/photos/about-info.png"
      />
      <div className="z-20 relative container min-h-screen py-12 flex flex-col items-center justify-center md:flex-row">
        <Image
          src={AboutInfoImage}
          alt="Психолог Днепр"
          className="flex-none rounded-full border border-black w-72 lg:w-[400px] md:mr-12"
          width={400}
        />
        <div className="px-5 text-center mt-6 w-full sm:w-3/4 md:w-1/2 xl:w-[40%] md:mt-0 md:text-left">
          <h2 className="text-3xl font-serif text-black mb-6">Записуйся на консультацію!</h2>
          <p className="font-sans italic text-black text-lg">
            Працювати в цій сфері - моє покликання! Я з великим задоволенням ділюся своїми знаннями
            та досвідом на наших консультаціях. Тож якщо Ви відчуваєте що вам потрібна допомога - не
            зволікайте!
          </p>
          <ButtonLink href={'/schedule'} className="mt-8 mx-auto md:mx-0" text="Записатись" />
        </div>
      </div>
    </div>
  );
}
