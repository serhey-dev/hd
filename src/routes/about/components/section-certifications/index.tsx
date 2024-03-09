import Image from 'next/image';

import Slider from '@/components/slider';

import Certification1 from '@/images/certifications/certification-1.jpg';
import Certification2 from '@/images/certifications/certification-2.jpg';
import Certification3 from '@/images/certifications/certification-3.jpg';
import Certification4 from '@/images/certifications/certification-4.jpg';
import Certification5 from '@/images/certifications/certification-5.jpg';
import Certification6 from '@/images/certifications/certification-6.jpg';
import Certification7 from '@/images/certifications/certification-7.jpg';
import Certification8 from '@/images/certifications/certification-8.jpg';
import Certification9 from '@/images/certifications/certification-9.jpg';
import Certification10 from '@/images/certifications/certification-10.jpg';

const items = [
  {
    key: 'certification-1',
    image: Certification1,
    alt: 'Диплом психолог Дніпро',
  },
  {
    key: 'certification-2',
    image: Certification2,
    alt: 'Професійний психолог Дніпро',
  },
  {
    key: 'certification-3',
    image: Certification3,
    alt: 'Психолог освіта',
  },
  {
    key: 'certification-4',
    image: Certification4,
    alt: 'Психолог с образованием Днепр',
  },
  {
    key: 'certification-5',
    image: Certification5,
    alt: 'Психолог з вищою освітою',
  },
  {
    key: 'certification-6',
    image: Certification6,
    alt: 'Психолог в Днепре',
  },
  {
    key: 'certification-7',
    image: Certification7,
    alt: 'Коучинг Дніпро',
  },
  {
    key: 'certification-8',
    image: Certification8,
    alt: 'Психолог з вищою освітою у Дніпрі',
  },
  {
    key: 'certification-9',
    image: Certification9,
    alt: 'Психологічна підтримка',
  },
  {
    key: 'certification-10',
    image: Certification10,
    alt: 'Схема-терапія Дніпро',
  },
];

export default function SectionCertifications() {
  return (
    <div className="min-h-screen relative border-t border-black">
      <div className="container py-24 lg:pb-36 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-6xl text-center font-serif text-black mb-7 leading-10">Освіта</h2>
        <p className="font-sans italic text-black text-center text-lg px-5 md:px-12 xl:px-36">
          Мій шлях в психологію почався в 2011 році, і триває досі. Цей шлях включав в себе
          закінчення ВНЗ, міжнародного університету з коучингу та купу різноманітних додаткових
          курсів та майстер класів. Наразі я навчаюсь на психотерапевта, що дозволить мені надавати
          ще більш глибинну допомогу.
        </p>
        <p className="font-sans italic text-black text-center text-lg mt-4 mb-8 px-5 md:px-12 xl:px-36">
          P.S. Динда - це моє дівоче прізвище.
        </p>
        <div className="xl:w-[750px] xl:h-[500px] lg:w-[600px] lg:h-[400px] w-full">
          <Slider
            withArrowsBackground
            keyName="certifications"
            hidePrevSlide
            slides={items.map((item) => (
              <Image key={item.key} src={item.image} alt={item.alt} />
            ))}
          />
        </div>
      </div>
    </div>
  );
}
