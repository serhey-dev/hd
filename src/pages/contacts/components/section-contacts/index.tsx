import Link from 'next/link';

import ButtonLink from '@/components/button-link';

import Instagram from '@/components/icons/instagram';
import Telegram from '@/components/icons/telegram';
import Facebook from '@/components/icons/facebook';

import Map from '@/pages/contacts/components/section-contacts/components/map';

export default function SectionContacts() {
  return (
    <div className="min-h-screen">
      <div className="container text-center pb-12 p-16 px-6">
        <h1 className="text-6xl mb-6 text-center font-serif text-black mb-12 mt-16">Контакти</h1>
        <p className="font-sans text-lg text-black">
          Записуйся і так і сяк. Записуйся і так і сяк. Записуйся і так і сяк. Записуйся і так і
          сяк. Записуйся і так і сяк.{' '}
        </p>
        <p className="font-sans text-lg text-black">
          Записуйся і так і сяк. к. Записуйся і так і сяк. Записуйся і так і сяк.{' '}
        </p>
        <p className="font-sans text-lg text-black mt-8">
          Записуйся і так і сяк. Записуйся і так і сяк. Записуйся і так і сякписуйся і так і сяк:
        </p>
        <div className="flex items-center justify-center mt-4">
          <Link
            className="flex items-center text-black duration-300 fill-black hover:fill-green hover:text-green mr-5"
            target="_blank"
            href="https://instagram.com/hanna_dynda?igshid=MTg0ZDhmNDA="
          >
            <Instagram />
            <span className="font-serif text-2xl ml-2">Instagram</span>
          </Link>
          <Link
            className="flex items-center text-black duration-300 fill-black hover:fill-green hover:text-green mr-5"
            target="_blank"
            href="https://t.me/hanna_dynda"
          >
            <Telegram />
            <span className="font-serif text-2xl ml-2">Telegram</span>
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
        <p className="font-sans text-lg text-black mt-4 mb-4">або за телефоном</p>
        <Link
          className="font-serif text-black text-2xl hover:text-green duration-300 link-underline link-underline-hover"
          href="tel:+380990375009"
        >
          +38(099)-03-75-009
        </Link>
        <div className="mt-4">
          <Link
            className="font-sans text-black text-lg hover:text-green duration-300 link-underline link-underline-hover"
            href="mailto:info@hd-psychologist.com.ua"
          >
            info@hd-psychologist.com.ua
          </Link>
        </div>
        <p className="font-sans text-lg text-black mt-8 mb-3">
          Записуйся і так і сяк. Записуйся і так і сяк. Записуйся і так і сякписуйся і так і сяк:
        </p>
        <div className="flex justify-center">
          <ButtonLink href="/schedule" text="Записатись" className="mx-auto" />
        </div>
        <p className="font-sans text-lg text-black mt-8 mb-4">
          Або зустріч оффлайн (Дніпро, вул. Івана Акінфєєва, 25):
        </p>
        <Map />
      </div>
    </div>
  );
}
