import Link from 'next/link';

import Instagram from '@/components/icons/instagram';
import Telegram from '@/components/icons/telegram';
import Facebook from '@/components/icons/facebook';
import Viber from '@/components/icons/viber';

import Map from '@/pages/contacts/components/section-contacts/components/map';
import AnimateOnScroll from '@/components/animate-on-scroll';

export default function SectionContacts() {
  return (
    <div className="min-h-screen">
      <div className="container text-center pb-0 p-16 px-6">
        <h1 className="text-6xl mb-6 text-center font-serif text-black mb-8 mt-16">Контакти</h1>
        <p className="font-sans text-lg text-black ">
          Я з радістю вам допоможу або відповім на ваші запитання (10:00 - 19:00). Оберіть будь-який
          зручний для вас спосіб щоб звʼязатись зі мною або записатись до мене на консультацію:
        </p>
        <AnimateOnScroll
          className="duration-500"
          notScrolledClassName="w-0"
          scrolledClassName="w-36 mx-auto"
          bottomOffsetToAnimate={200}
        >
          <div className="h-0.5 w-full bg-black mt-8" />
        </AnimateOnScroll>
        <p className="font-sans text-lg text-black mt-7">Соціальні мережі та месенджери:</p>
        <div className="flex items-center justify-center mt-2">
          <Link
            className="flex items-center text-black duration-300 fill-black hover:fill-green hover:text-green mr-5"
            target="_blank"
            href="https://t.me/hanna_dynda"
          >
            <Telegram />
            <span className="font-serif text-2xl ml-2">Telegram</span>
          </Link>
          <div className="flex items-center text-black fill-black mr-5">
            <Viber />
            <span className="font-serif text-2xl ml-2">Viber</span>
          </div>
          <Link
            className="flex items-center text-black duration-300 fill-black hover:fill-green hover:text-green mr-5"
            target="_blank"
            href="https://instagram.com/hanna_dynda?igshid=MTg0ZDhmNDA="
          >
            <Instagram />
            <span className="font-serif text-2xl ml-2">Instagram</span>
          </Link>
          <Link
            className="flex items-center text-black duration-300 fill-black hover:fill-green hover:text-green"
            target="_blank"
            href="https://instagram.com/hanna_dynda?igshid=MTg0ZDhmNDA="
          >
            <Facebook />
            <span className="font-serif text-2xl ml-2">Facebook</span>
          </Link>
        </div>
        {/* <AnimateOnScroll
          className="duration-500"
          notScrolledClassName="w-0"
          scrolledClassName="w-36 mx-auto"
          bottomOffsetToAnimate={200}
          timeout={500}
        >
          <div className="h-0.5 w-full bg-black mt-8" />
        </AnimateOnScroll> */}
        <p className="font-sans text-lg text-black mt-8 mb-2">Телефон або пошта:</p>
        <div className="flex-row items-center">
          <Link
            className="font-sans text-black text-lg hover:text-green duration-300 link-underline link-underline-hover mr-4"
            href="tel:+380990375009"
          >
            +38(099)-03-75-009
          </Link>
          <Link
            className="font-sans text-black text-lg hover:text-green duration-300 link-underline link-underline-hover"
            href="mailto:info@hd-psychologist.com.ua"
          >
            info@hd-psychologist.com.ua
          </Link>
        </div>
        <AnimateOnScroll
          className="duration-500"
          notScrolledClassName="w-0"
          scrolledClassName="w-36 mx-auto"
          bottomOffsetToAnimate={200}
          timeout={400}
        >
          <div className="h-0.5 w-full bg-black mt-8" />
        </AnimateOnScroll>
        <p className="font-sans text-lg text-black  mt-8 mb-8">
          Якщо ви шукаєте психолога у місті Дніпро - у нас є можливість зустрітись оффлайн за
          адресою Івана Акінфєєва, 25:
        </p>
      </div>
      <Map />
    </div>
  );
}
