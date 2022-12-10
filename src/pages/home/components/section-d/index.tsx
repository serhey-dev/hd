import Image from 'next/image';

import ButtonLink from '@/components/button-link';
import AnimateOnScroll from '@/components/animate-on-scroll';

export default function SectionD() {
  return (
    <div className="min-h-screen border-t border-black h-full flex justify-center">
      <div className="flex container flex-row items-center justify-center">
        <Image src="/images/1.jpeg" alt="logo" width={450} height={1} />
        <div className="w-1/3 ml-36">
          <h3 className="text-3xl font-serif text-black mb-6">Записуйся на консультацію!</h3>
          <p className="font-sans italic text-black text-lg">
            консультацію! Записуйся на консультаціюа консультацію! Записуйся на консультацію!
            Записуйся на консультацію!Записуйся на консультацію! Записуйся на консультацію!
            Записуйся
          </p>
          <p className="font-sans italic text-black text-lg">
            Записуйся на консультацію! консультацію! Записуйся на консультацію! Записуйся на
            консультацію!
          </p>
          <p className="font-sans italic text-black text-lg mb-6">
            Записуйся на консуонсультаці на консультацію! Записуйся на консультацію! Записуйся на
            консультацію!
          </p>
          <AnimateOnScroll
            className="duration-500"
            notScrolledClassName="w-0"
            scrolledClassName="w-1/2"
            bottomOffsetToAnimate={200}
          >
            <div className="h-px w-full bg-black mb-8" />
          </AnimateOnScroll>
          <ButtonLink href="/schedule" text="Записатись" />
        </div>
      </div>
    </div>
  );
}
