import Image from 'next/image';

import ButtonLink from '@/components/button-link';
import AnimateOnScroll from '@/components/animate-on-scroll';

export default function SectionD() {
  return (
    <div className="min-h-screen border-t border-black h-full flex justify-center">
      <div className="flex container flex-row items-center justify-center">
        <Image src="/images/1.jpeg" alt="logo" width={450} height={1} />
        <div className="w-1/3 ml-36">
          <h3 className="text-3xl font-serif text-black mb-6">Приклади причин для звернення</h3>
          <ul>
            <li>
              <p className="font-sans italic text-black text-lg">
                Постійне роздратування та головний біль
              </p>
            </li>
            <li>
              <p className="font-sans italic text-black text-lg">
                Тяжко пережіваєте розлучення, не знаєте що робити далі
              </p>
            </li>
            <li>
              <p className="font-sans italic text-black text-lg">
                Ви хочете заробляти більше, але Вам завжди щось заважає, и Ви не знаєте куди
                рухатись
              </p>
            </li>
            <li>
              <p className="font-sans italic text-black text-lg">
                Панічні атаки, постійна тривожність
              </p>
            </li>
            <li>
              <p className="font-sans italic text-black text-lg">
                Майже завжди сняться кошмари, не можете відпочити
              </p>
            </li>
            <li>
              <p className="font-sans italic text-black text-lg">
                Ви постійно сваретесь з дружіною/чоловіком. Думаєте про розлучення
              </p>
            </li>
            <li>
              <p className="font-sans italic text-black text-lg">
                Нічого не тішить, постійно втомлені, немає бажання до життя
              </p>
            </li>
            <li>
              <p className="font-sans italic text-black text-lg">
                Хочете стосунків та сім'ю, але не знаєте як їх розпочати. Боїтеся знайомства з
                дівчиною/хлопцем
              </p>
            </li>
            <li>
              <p className="font-sans italic text-black text-lg">
                У Вас бувають напади агресії, Вас це лякає
              </p>
            </li>
            <li>
              <p className="font-sans italic text-black text-lg">
                Хочете змінити роботу, але не знаєте як
              </p>
            </li>
          </ul>
          <AnimateOnScroll
            className="duration-500"
            notScrolledClassName="w-0"
            scrolledClassName="w-36"
            bottomOffsetToAnimate={200}
          >
            <div className="h-0.5 w-full bg-black my-8" />
          </AnimateOnScroll>
          <ButtonLink href="/schedule" text="Записатись" />
        </div>
      </div>
    </div>
  );
}
