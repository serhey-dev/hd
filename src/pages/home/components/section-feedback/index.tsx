import Slider from '@/components/slider';
import FeedbackItem from '@/pages/home/components/section-feedback/components/feedback-item';
import ParallaxBackground from '@/components/parallax-background';

export default function SectionFeedback() {
  return (
    <div className="relative overflow-hidden min-h-screen border-t border-black pb-36">
      <ParallaxBackground backgroundImage="/images/photos/66.png" />
      <div className="container px-24">
        <h1 className="text-6xl mb-6 text-center font-serif text-black mb-24 mt-16">Відгуки</h1>
        <Slider
          keyName="feedback"
          slides={[
            <FeedbackItem
              key="feedback-1"
              name="Алекс Топольский"
              text="Аня така класна, Аня така asdasdasdas d, Аня класна, Аня такss sss а класна, Аня така asdasdasdas d, Аня класна, Аня такss sss а а класна, Аня така asdasdasdas d, Аня класна, Аня такss sss а а класна, Аня така asdasdasdas d, Аня класна, Аня такss sss а а класна, Аня така класна, Аня така класна"
              photo="/images/2.jpeg"
            />,
            <FeedbackItem
              key="feedback-2"
              name="Тарас"
              text="Аня така класна, Аня така asdasdasdas d, Аня класна, Аня такss sss а класна, Аня така класна, Аня така класна Аня така класна, Аня така asdasdasdas d, Аня класна, Аня такss sss а класна, Аня така класна, Аня така класна Аня така класна, Аня така asdasdasdas d, Аня класна, Аня такss sss а класна, Аня така класна, Аня така класна"
              photo="/images/2.jpeg"
            />,
            <FeedbackItem
              key="feedback-3"
              name="Орфей"
              text="Аня така класна, Аня така asdasdasdas d, Аня класна, Аня такss sss а класна, Аня така класна, Аня така класна"
              photo="/images/2.jpeg"
            />,
          ]}
        />
      </div>
    </div>
  );
}
