import Slider from '@/components/slider';
import ParallaxBackground from '@/components/parallax-background';
import FeedbackItem from '@/pages/home/components/section-feedback/components/feedback-item';

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
                name="Юлія Б."
                text="Сьогодні в мене був перший такий досвід. Поставили ціль! А Аня дуже вміло направила мене своїми питаннями на самостійні роздуми про те, що мені заважає виконати всі бажані плани та мрії. Допомогла з висновками щодо їх реалізації! Прийшло усвідомлення багатьох речей! Дуже вдячна! Раджу спробувати!"
              />,
              <FeedbackItem
                key="feedback-2"
                name="Александр"
                text="Аня, выражаю тебе огромную благодарность за твою работу. Поставленны нужные вопросы, а главное с определенной значимостью заданы! Это, своего рода, искуство - видеть как целовек рисует целостность отвечая на свои же вопросы. Ну а я, более чем мотивирован и настроен решительно. Первые результати уже в действии!"
              />,
              <FeedbackItem
                key="feedback-3"
                name="Любов"
                text="Добрий вечір. Ви знаєте, після нашої розмови у мене пішло прояснення і на пів року я вже склала план що робити далі. Дякую!"
              />,
              <FeedbackItem
                key="feedback-4"
                name="Диана"
                text="Хочу поблагодарить за сессию! Было очень комфортно, интересно, я смогла увидеть свою ситуацию под разными углами и понять что мне делать дальше и что для меня действительно ценно. Очень жду следующую сессию чтобы поделиться результатами!"
              />,
              <FeedbackItem
                key="feedback-5"
                name="Юлія Л."
                text="Анечка, хотіла подякувати за нашу з вами співпрацю! Багато чого зрозуміла, навчилася, дізналася про себе цікавого, пропрацювала. Дуже сподобалось, що ви не тільки давали поради під час консультацій, а також, у будь-який час були моєю підтримкою та відповідали мені у чаті. Дякую вам за коучинг та сеанси психології."
              />,
              <FeedbackItem
                key="feedback-6"
                name="Артем"
                text="Специалист своего дела, грамотный и образованный человек, с которым было приятно работать. Интересные вопросы, интересный подход. Для себя подчеркнул множество моментов связанных с личной жизнью. Что касаемо моих панических атак - все гораздо проще чем казалось. Спасибо!"
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
