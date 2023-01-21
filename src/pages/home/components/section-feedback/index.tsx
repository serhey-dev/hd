import Image from 'next/image';

import Slider from '@/components/slider';
import ParallaxBackground from '@/components/parallax-background';
import FeedbackItem from '@/pages/home/components/section-feedback/components/feedback-item';

import FeedbackItemImage from '@/images/photos/home-hero.png';

export default function SectionFeedback() {
  return (
    <div className="relative overflow-hidden min-h-screen border-t border-black flex items-center justify-center">
      <ParallaxBackground
        backgroundImage="/images/photos/home-feedback.png"
        className="bg-cover bg-center lg:bg-contain lg:bg-right-bottom"
      />
      <div className="relative z-20 container py-16 flex flex-col items-center lg:mb-24">
        <h2 className="text-6xl font-serif text-black text-center mb-8 md:mb-10">Відгуки</h2>
        <div className="xl:w-[750px] xl:h-[500px] lg:w-[600px] lg:h-[400px] w-full">
          <Slider
            keyName="feedback"
            hidePrevSlide
            slides={[
              <FeedbackItem
                key="feedback-1"
                name="Юлія"
                text="Сьогодні в мене був перший такий досвід. Поставили ціль! А Аня дуже вміло направила мене своїми питаннями на самостійні роздуми про те, що мені заважає виконати всі бажані плани та мрії. Допомогла з висновками щодо їх реалізації! Прийшло усвідомлення багатьох речей! Дуже вдячна! Раджу спробувати!"
                image={
                  <Image
                    className="rounded-full border-black border"
                    src={FeedbackItemImage}
                    alt="Психолог Дніпро відгук"
                    width={100}
                  />
                }
              />,
              <FeedbackItem
                key="feedback-2"
                name="Александр"
                text="Аня, выражаю тебе огромную благодарность за твою работу. Поставленны нужные вопросы, а главное с определенной значимостью заданы! Это, своего рода, искуство - видеть как целовек рисует целостность отвечая на свои же вопросы. Ну а я, более чем мотивирован и настроен решительно. Первые результати уже в действии!"
                image={
                  <Image
                    className="rounded-full border-black border"
                    src={FeedbackItemImage}
                    alt="Коучинг Дніпро відгук"
                    width={100}
                  />
                }
              />,
              <FeedbackItem
                key="feedback-3"
                name="Любов"
                text="Добрий вечір. Ви знаєте, після нашої розмови у мене пішло прояснення і на пів року я вже склала план що робити далі. Дякую!"
                image={
                  <Image
                    className="rounded-full border-black border"
                    src={FeedbackItemImage}
                    alt="Психолог Днепр отзыв"
                    width={100}
                  />
                }
              />,
              <FeedbackItem
                key="feedback-4"
                name="Диана"
                text="Хочу поблагодарить за сессию! Было очень комфортно, интересно, я смогла увидеть свою ситуацию под разными углами и понять что мне делать дальше и что для меня действительно ценно. Очень жду следующую сессию чтобы поделиться результатами!"
                image={
                  <Image
                    className="rounded-full border-black border"
                    src={FeedbackItemImage}
                    alt="Коучинг Днепр отзыв"
                    width={100}
                  />
                }
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
