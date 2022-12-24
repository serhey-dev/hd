import Slider from '@/components/slider';
import FeedbackItem from '@/pages/home/components/section-feedback/components/feedback-item';
import ParallaxBackground from '@/components/parallax-background';

export default function SectionFeedback() {
  return (
    <div className="relative overflow-hidden min-h-screen border-t border-black pb-36">
      <ParallaxBackground backgroundImage="/images/photos/home-feedback.png" />
      <div className="container flex flex-col justify-center items-center px-24">
        <h1 className="text-6xl mb-6 text-center font-serif text-black mb-24 mt-16">Відгуки</h1>
        <div className="w-1/2">
          <Slider
            keyName="feedback"
            hidePrevSlide
            slides={[
              <FeedbackItem
                key="feedback-1"
                name="Юлія"
                text="Сьогодні в мене був перший такий досвід. Поставили ціль! А Аня дуже вміло направила мене своїми питаннями на самостійні роздуми про те, що мені заважає виконати всі бажані плани та мрії. Допомогла з висновками щодо їх реалізації! Прийшло усвідомлення багатьох речей! Дуже вдячна! Раджу спробувати!"
                photo="/images/2.jpeg"
              />,
              <FeedbackItem
                key="feedback-2"
                name="Александр"
                text="Аня, выражаю тебе огромную благодарность за твою работу. Поставленны нужные вопросы, а главное с определенной значимостью заданы! Это, своего рода, искуство - видеть как целовек рисует целостность отвечая на свои же вопросы. Ну а я, более чем мотивирован и настроен решительно. Первые результати уже в действии!"
                photo="/images/2.jpeg"
              />,
              <FeedbackItem
                key="feedback-3"
                name="Любов"
                text="Добрий вечір. Ви знаєте, після нашої розмови у мене пішло прояснення і на пів року я вже склала план що робити далі. Дякую!"
                photo="/images/2.jpeg"
              />,
              <FeedbackItem
                key="feedback-4"
                name="Диана"
                text="Хочу поблагодарить за сессию! Было очень комфортно, интересно, я смогла увидеть свою ситуацию под разными углами и понять что мне делать дальше и что для меня действительно ценно. Очень жду следующую сессию чтобы поделиться результатами!"
                photo="/images/2.jpeg"
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
