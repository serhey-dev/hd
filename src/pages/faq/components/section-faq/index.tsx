import AnimateOnScroll from '@/components/animate-on-scroll';
import ParallaxBackground from '@/components/parallax-background';
import QuestionItem from '@/pages/faq/components/section-faq/components/question-item';

export default function SectionFAQ() {
  return (
    <div className="relative min-h-screen">
      <div className="container relative z-10 p-24 pt-16">
        <h1 className="text-6xl mb-6 text-center font-serif text-black mb-12 mt-16">
          Питання та відповіді
        </h1>
        <div className="flex flex-row justify-between">
          <div className="pr-24">
            <h2 className="text-4xl text-center font-serif text-black mb-2">Проблеми</h2>
            <AnimateOnScroll
              className="duration-500 mb-3"
              notScrolledClassName="w-0"
              scrolledClassName="w-36 mx-auto"
              bottomOffsetToAnimate={200}
            >
              <div className="h-0.5 w-full bg-black" />
            </AnimateOnScroll>
            <ul>
              <QuestionItem
                question="Як зробити щоб жінка хоть трошки мене любила?"
                answer="Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              />
              <QuestionItem
                question="Як зробити щоб жінка хоть трошки мене любила?"
                answer="Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              />
              <QuestionItem
                question="Як зробити щоб жінка хоть трошки мене любила?"
                answer="Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              />
              <QuestionItem
                question="Як зробити щоб жінка хоть трошки мене любила?"
                answer="Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              />
              <QuestionItem
                question="Як зробити щоб жінка хоть трошки мене любила?"
                answer="Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              />
            </ul>
          </div>
          <div>
            <h2 className="text-4xl text-center font-serif text-black mb-2">Консультації</h2>
            <AnimateOnScroll
              className="duration-500 mb-3"
              notScrolledClassName="w-0"
              scrolledClassName="w-36 mx-auto"
              bottomOffsetToAnimate={200}
              timeout={400}
            >
              <div className="h-0.5 w-full bg-black" />
            </AnimateOnScroll>
            <ul>
              <QuestionItem
                question="Як зробити щоб жінка хоть трошки мене любила?"
                answer="Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              />
              <QuestionItem
                question="Як зробити щоб жінка хоть трошки мене любила?"
                answer="Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              />
              <QuestionItem
                question="Як зробити щоб жінка хоть трошки мене любила?"
                answer="Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              />
              <QuestionItem
                question="Як зробити щоб жінка хоть трошки мене любила?"
                answer="Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              />
              <QuestionItem
                question="Як зробити щоб жінка хоть трошки мене любила?"
                answer="Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              />
              <QuestionItem
                question="Як зробити щоб жінка хоть трошки мене любила?"
                answer="Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
