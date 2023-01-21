import Image from 'next/image';

import MethodItem from '@/pages/home/components/section-methods/components/method-item';

import CognitiveItemImage from '@/images/methods/cognitive.png';
import GestaltItemImage from '@/images/methods/gestalt.png';
import ArtItemImage from '@/images/methods/art.png';
import CoachItemImage from '@/images/methods/coach.png';

export default function SectionMethods() {
  return (
    <div className="min-h-screen border-t border-black py-16">
      <div className="container">
        <h2 className="text-6xl mb-6 text-center font-serif text-black mb-10">
          Напрями та підходи
        </h2>
        <ul className="flex flex-col items-center w-full">
          <MethodItem
            className="md:flex-row"
            name="Когнітивно-поведінкова терапія (КПТ)"
            image={
              <Image
                src={CognitiveItemImage}
                alt="Когнитивно-поведенческая терапия Днепр"
                width={320}
              />
            }
            content={
              <>
                <p className="font-sans italic text-black text-lg mb-3">
                  Когнітивно-поведінкова терапія (КПТ) - це психологічний підхід, заснований на
                  наукових принципах, дослідження показали, що вона ефективна для широкого кола
                  проблем.
                </p>
                <p className="font-sans italic text-black text-lg mb-3">
                  КПТ фокусується на тому, як ваші думки, переконання і ставлення впливають на ваші
                  емоції і поведінку, і допомагає вам освоїти навички, які необхідні для вирішення
                  різноманітних проблем.
                </p>
                <p className="font-sans italic text-black text-lg">
                  Вона поєднує в собі когнітивну терапію (досліджуючи те, що ви думаєте) і
                  поведінкову терапію (досліджуючи те, що ви робите).
                </p>
              </>
            }
          />
          <MethodItem
            className="md:flex-row-reverse"
            name="Гештальт терапія"
            image={
              <Image
                src={GestaltItemImage}
                alt="Гештальт терапия Днепр"
                className="lg:mt-4"
                width={300}
              />
            }
            content={
              <>
                <p className="font-sans italic text-black text-lg">
                  Гештальт терапія - це напрямок психотерапії, в основі якої лежить робота з
                  бажаннями, інтересами і особистістю пацієнта і яке допомагає:
                </p>
                <ul className="list-disc font-sans italic text-black text-lg ml-8">
                  <li>зрозуміти себе, мотиви своїх слів, вчинків, дій</li>
                  <li>відшукати своє призначення</li>
                  <li>викинути з голови нав’язливі думки про минуле</li>
                  <li>розвинути здібності самоконтролю</li>
                  <li>звільнитися від комплексів і страхів</li>
                </ul>
              </>
            }
          />
          <MethodItem
            className="md:flex-row"
            name="Коучинг"
            content={
              <>
                <p className="font-sans italic text-black text-lg mb-3">
                  Коучинг - метод здійснення консалтингу й тренінгу, в якому «коуч», допомагає тобі
                  досягнути певної цілі в професії чи в особистому житті.
                </p>
                <p className="font-sans italic text-black text-lg">
                  На відміну від наставництва, коучинг зосереджується на досягненні конкретної цілі
                  способом, який людині належить зрозуміти самотужки. Коучинг - це про партнерство
                  між коучем та клієнтом.
                </p>
              </>
            }
            image={<Image src={CoachItemImage} alt="Коучинг Днепр" width={300} />}
          />
          <MethodItem
            className="md:flex-row-reverse"
            name="АРТ-терапія"
            content={
              <>
                <p className="font-sans italic text-black text-lg mb-3">
                  АРТ-терапія - це вид психотерапії та психологічної корекції, заснований на
                  мистецтві та творчості. Це метод психотерапії, який дозволяє з допомогою творчості
                  пережити внутрішні конфлікти, тривогу, страхи, що турбують людину.
                </p>
                <p className="font-sans italic text-black text-lg mb-3">
                  Арт-терапія підходить не лише дітям, а й дорослим. Перевага цього методу у роботі
                  з дітьми є такою, що цей метод є достатньо екологічним.
                </p>
                <p className="font-sans italic text-black text-lg">
                  Тут не тільки малюнки, а й будь-яка творча діяльність.
                </p>
              </>
            }
            image={<Image src={ArtItemImage} alt="Арт терапия Дніпро" width={280} />}
          />
        </ul>
      </div>
    </div>
  );
}
