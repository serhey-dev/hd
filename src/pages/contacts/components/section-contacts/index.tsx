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
      <div className="container md:pt-32 pt-16 text-center">
        <h1 className="text-6xl font-serif text-black mb-8">Контакти</h1>
        <p className="font-sans text-lg text-black px-4">
          Я з радістю вам допоможу або відповім на ваші запитання (10:00 - 19:00). Оберіть будь-який
          зручний для вас спосіб щоб звʼязатись зі мною або записатись до мене на консультацію:
        </p>
        <AnimateOnScroll
          className="duration-500"
          notScrolledClassName="w-0"
          scrolledClassName="w-36 mx-auto"
        >
          <div className="h-0.5 w-full bg-black sm:my-8 my-4" />
        </AnimateOnScroll>
        <p className="font-sans text-lg text-black">Соціальні мережі та месенджери:</p>
        <div className="flex flex-row flex-wrap items-center justify-center mt-2">
          <div className="md:w-1/2 w-full flex items-center justify-center md:justify-end">
            <div className="flex items-center justify-center">
              <Link
                className="flex items-center text-black duration-300 fill-black hover:fill-green hover:text-green mr-5"
                target="_blank"
                href="https://t.me/hanna_dynda"
              >
                <Telegram />
                <span className="font-serif text-2xl ml-2">Telegram</span>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center text-black fill-black mr-5">
                <Viber />
                <span className="font-serif text-2xl ml-2">Viber</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex items-center justify-center md:justify-start mt-2 md:mt-0">
            <div className="flex items-center justify-center">
              <Link
                className="flex items-center text-black duration-300 fill-black hover:fill-green hover:text-green mr-5"
                target="_blank"
                href="https://instagram.com/hanna_dynda?igshid=MTg0ZDhmNDA="
              >
                <Instagram />
                <span className="font-serif text-2xl ml-2">Instagram</span>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link
                className="flex items-center text-black duration-300 fill-black hover:fill-green hover:text-green"
                target="_blank"
                href="https://instagram.com/hanna_dynda?igshid=MTg0ZDhmNDA="
              >
                <Facebook />
                <span className="font-serif text-2xl ml-2">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
        <p className="font-sans text-lg text-black mt-8 mb-2">Телефон або пошта:</p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Link
            className="font-sans text-black text-lg hover:text-green duration-300 link-underline link-underline-hover mr-4"
            href="tel:+380990375009"
          >
            +38(099)-03-75-009
          </Link>
          <Link
            className="mt-2 md:mt-0 font-sans text-black text-lg hover:text-green duration-300 link-underline link-underline-hover"
            href="mailto:info@hd-psychologist.com.ua"
          >
            info@hd-psychologist.com.ua
          </Link>
        </div>
        <AnimateOnScroll
          className="duration-500"
          notScrolledClassName="w-0"
          scrolledClassName="w-36 mx-auto"
          timeout={400}
        >
          <div className="h-0.5 w-full bg-black sm:my-8 my-4" />
        </AnimateOnScroll>
        <p className="font-sans text-lg text-black mb-8 px-4">
          Якщо ви шукаєте психолога у місті Дніпро - у нас є можливість зустрітись оффлайн за
          адресою Івана Акінфєєва, 25:
        </p>
      </div>
      <Map />
    </div>
  );
}
