import Image from 'next/image';

import Slider from '@/components/slider';

export default function SectionCertifications() {
  return (
    <div className="min-h-screen relative border-t border-black">
      <div className="container min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl text-center font-serif text-black mb-7">Освіта</h1>
        <p className="font-sans italic text-black text-center text-lg mb-8 px-5 md:px-12 xl:px-36">
          Мій шлях в психологію почався в 2011 році, і триває досі. Цей шлях включав в себе
          закінчення ВНЗ, міжнародного університету з коучингу та купу різноманітних додаткових
          курсів та майстер класів. Наразі я навчаюсь на психотерапевта, що дозволить мені надавати
          ще більш глибинну допомогу.
        </p>
        <div className="border border-black xl:w-[750px] xl:h-[500px] md:w-[450px] md:h-[300px]">
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
