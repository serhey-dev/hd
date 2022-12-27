import Image from 'next/image';

import ButtonLink from '@/components/buttons/button-link';
import AnimateOnScroll from '@/components/animate-on-scroll';

export default function SectionReasons() {
  return (
    <div className="min-h-screen border-t border-black py-16">
      <div className="container">
        <h1 className="text-6xl mb-6 text-center font-serif text-black lg:mb-16 mb-10">
          Коли звертатись до психолога?
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center md:px-0 px-5">
          <Image src="/images/photos/home-d.jpg" alt="Reasons" width={400} height={1} />
          <div className="xl:w-1/3 lg:w-1/2 w-full lg:ml-16 mt-8 lg:mt-0">
            <ul>
              <li>
                <p className="font-sans italic text-black text-md">
                  Постійне роздратування та головний біль
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  Тяжко пережіваєте розлучення, не знаєте що робити далі
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  Ви хочете заробляти більше, але Вам завжди щось заважає, и Ви не знаєте куди
                  рухатись
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  Панічні атаки, постійна тривожність
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  Майже завжди сняться кошмари, не можете відпочити
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  Ви постійно сваретесь з дружіною/чоловіком. Думаєте про розлучення
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  Нічого не тішить, постійно втомлені, немає бажання до життя
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  Хочете стосунків та сім'ю, але не знаєте як їх розпочати. Боїтеся знайомства з
                  дівчиною/хлопцем
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  У Вас бувають напади агресії, Вас це лякає
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  Хочете змінити роботу, але не знаєте як
                </p>
              </li>
            </ul>
            <AnimateOnScroll
              className="duration-500 my-8"
              notScrolledClassName="w-0"
              scrolledClassName="w-36"
            >
              <div className="h-0.5 w-full bg-black" />
            </AnimateOnScroll>
            <ButtonLink href="/schedule" text="Записатись" />
          </div>
        </div>
      </div>
    </div>
  );
}
