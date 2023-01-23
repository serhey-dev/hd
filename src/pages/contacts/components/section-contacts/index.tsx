import Link from 'next/link';

import Config from '@/config';
import { formatPhoneNumber } from '@/helpers/ui';

import Viber from '@/components/icons/viber';
import Facebook from '@/components/icons/facebook';
import Telegram from '@/components/icons/telegram';
import Instagram from '@/components/icons/instagram';
import AnimateOnScroll from '@/components/animate-on-scroll';
import Map from '@/pages/contacts/components/section-contacts/components/map';

export default function SectionContacts() {
  return (
    <div className="min-h-screen">
      <div className="container text-center pt-16 md:pt-32">
        <h1 className="text-6xl font-serif text-black mb-8">Контакти</h1>
        <p className="font-sans text-lg text-black px-4">
          Я з радістю вам допоможу або відповім на ваші запитання (10:00 - 19:00). Оберіть будь-який
          зручний для вас спосіб щоб звʼязатись зі мною або записатись до мене на консультацію:
        </p>
        <AnimateOnScroll
          className="duration-500 my-4 sm:my-8"
          notScrolledClassName="w-0"
          scrolledClassName="w-36 mx-auto"
        >
          <div className="h-0.5 w-full bg-black" />
        </AnimateOnScroll>
        <p className="font-sans text-lg text-black">Соціальні мережі та месенджери:</p>
        <div className="flex flex-row flex-wrap items-center justify-center mt-2">
          <div className="w-full flex items-center justify-center md:w-1/2 md:justify-end">
            <div className="flex items-center justify-center">
              <Link
                className="flex items-center text-black duration-300 fill-black hover:fill-green hover:text-green mr-5"
                target="_blank"
                href={Config.LINK_TELEGRAM}
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
          <div className="w-full flex items-center justify-center mt-2 md:w-1/2  md:justify-start md:mt-0">
            <div className="flex items-center justify-center">
              <Link
                className="flex items-center text-black duration-300 fill-black hover:fill-green hover:text-green mr-5"
                target="_blank"
                href={Config.LINK_ISNTAGRAM}
              >
                <Instagram />
                <span className="font-serif text-2xl ml-2">Instagram</span>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link
                className="flex items-center text-black duration-300 fill-black hover:fill-green hover:text-green"
                target="_blank"
                href={Config.LINK_FACEBOOK}
              >
                <Facebook />
                <span className="font-serif text-2xl ml-2">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
        <p className="font-sans text-lg text-black mt-8 mb-2">Телефон або пошта:</p>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <Link
            className="font-sans text-lg text-green mt-2 md:mt-0 md:mr-4"
            href={`tel:${Config.CONTACT_PHONE_NUMBER}`}
          >
            {formatPhoneNumber(Config.CONTACT_PHONE_NUMBER)}
          </Link>
          <Link
            className="font-sans text-lg text-green mt-2 md:mt-0"
            href={`mailto:${Config.CONTACT_EMAIL}`}
          >
            {Config.CONTACT_EMAIL}
          </Link>
        </div>
        <AnimateOnScroll
          className="duration-500 my-4 sm:my-8"
          notScrolledClassName="w-0"
          scrolledClassName="w-36 mx-auto"
          timeout={400}
        >
          <div className="h-0.5 w-full bg-black" />
        </AnimateOnScroll>
        <p className="font-sans text-lg text-black mb-8 px-4">
          Якщо ви шукаєте психолога у місті Дніпро - у нас є можливість зустрітись офлайн за адресою{' '}
          {Config.OFFICE_LOCATION_ADDRESS}:
        </p>
      </div>
      <Map />
    </div>
  );
}
