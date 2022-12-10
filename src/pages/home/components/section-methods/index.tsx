import AnimateOnScroll from '@/components/animate-on-scroll';
import MethodItem from '@/pages/home/components/section-methods/components/method-item';

export default function SectionMethods() {
  return (
    <div className="relative overflow-hidden min-h-screen border-t border-black py-16">
      <div className="container">
        <h1 className="text-6xl mb-6 text-center font-serif text-black mb-16">
          Напрямки та підходи
        </h1>
        <ul className="flex flex-col items-center w-full">
          <AnimateOnScroll
            className="flex flex-col items-center duration-500"
            notScrolledClassName="opacity-0 translate-x-0"
            scrolledClassName="opacity-100 -translate-x-6"
            bottomOffsetToAnimate={200}
          >
            <MethodItem
              name="Когнітивно-поведінкова терапія (КПТ)"
              image="/images/2.jpeg"
              content={
                <>
                  <p className="font-sans italic text-black text-lg mb-3">
                    Когнітивно-поведінкова терапія (КПТ) - це психологічний підхід, заснований на
                    наукових принципах, дослідження показали, що вона ефективна для широкого кола
                    проблем.
                  </p>
                  <p className="font-sans italic text-black text-lg mb-3">
                    КПТ фокусується на тому, як ваші думки, переконання і ставлення впливають на
                    ваші емоції і поведінку, і допомагає вам освоїти навички, які необхідні для
                    вирішення різноманітних проблем.
                  </p>
                  <p className="font-sans italic text-black text-lg">
                    Вона поєднує в собі когнітивну терапію (досліджуючи те, що ви думаєте) і
                    поведінкову терапію (досліджуючи те, що ви робите).
                  </p>
                </>
              }
            />
          </AnimateOnScroll>
          <AnimateOnScroll
            className="flex flex-col items-center duration-500"
            notScrolledClassName="opacity-0 translate-x-0"
            scrolledClassName="opacity-100 translate-x-6"
            bottomOffsetToAnimate={200}
          >
            <MethodItem
              name="Гештальт терапія"
              image="/images/2.jpeg"
              className="flex-row-reverse"
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
          </AnimateOnScroll>
          <AnimateOnScroll
            className="flex flex-col items-center duration-500"
            notScrolledClassName="opacity-0 translate-x-0"
            scrolledClassName="opacity-100 -translate-x-6"
            bottomOffsetToAnimate={200}
          >
            <MethodItem
              name="АРТ-терапія"
              content={
                <>
                  <p className="font-sans italic text-black text-lg mb-3">
                    АРТ-терапія - це вид психотерапії та психологічної корекції, заснований на
                    мистецтві та творчості. Це метод психотерапії, який дозволяє з допомогою
                    творчості пережити внутрішні конфлікти, тривогу, страхи, що турбують людину.
                  </p>
                  <p className="font-sans italic text-black text-lg mb-3">
                    Арт-терапія підходить не лише дітям, а й дорослим. Перевага цього методу у
                    роботі з дітьми є такою, що цей метод є достатньо екологічним.
                  </p>
                  <p className="font-sans italic text-black text-lg">
                    Тут не тільки малюнки, а й будь-яка творча діяльність.
                  </p>
                </>
              }
              image="/images/2.jpeg"
            />
          </AnimateOnScroll>
          <AnimateOnScroll
            className="flex flex-col items-center duration-500"
            notScrolledClassName="opacity-0 translate-x-0"
            scrolledClassName="opacity-100 translate-x-6"
            bottomOffsetToAnimate={200}
          >
            <MethodItem
              name="Коучинг"
              content={
                <>
                  <p className="font-sans italic text-black text-lg mb-3">
                    Коучинг - метод здійснення консалтингу й тренінгу, в якому «коуч», допомагає
                    тобі досягнути певної цілі в професії чи в особистому житті.
                  </p>
                  <p className="font-sans italic text-black text-lg">
                    На відміну від наставництва, коучинг зосереджується на досягненні конкретної
                    цілі способом, який людині належить зрозуміти самотужки. Коучинг - це про
                    партнерство між коучем та клієнтом.
                  </p>
                </>
              }
              image="/images/2.jpeg"
              className="flex-row-reverse"
            />
          </AnimateOnScroll>
        </ul>
      </div>
    </div>
  );
}
