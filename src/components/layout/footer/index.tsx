import Link from 'next/link';
import Image from 'next/image';

import Condig from '@/config';
import { formatPhoneNumber } from '@/helpers/ui';

import Viber from '@/components/icons/viber';
import Telegram from '@/components/icons/telegram';
import Facebook from '@/components/icons/facebook';
import Instagram from '@/components/icons/instagram';
import FooterLink from '@/components/layout/footer/components/footer-link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black">
      <div className="container flex flex-wrap flex-row items-center justify-center py-8">
        <Link
          className="font-serif text-lg text-black hover:text-green whitespace-nowrap duration-300 mr-8 order-2 md:mr-0  md:order-1"
          href={`tel:${Condig.CONTACT_PHONE_NUMBER}`}
        >
          {formatPhoneNumber(Condig.CONTACT_PHONE_NUMBER)}
        </Link>
        <div className="flex flex-row items-center justify-center flex-wrap order-1 mb-8 mx-10 min-w-full lg:mx-20 md:order-2 md:min-w-fit md:mb-0">
          <div>
            <FooterLink href="/services" text="Послуги" className="mb-3" />
            <FooterLink href="/about" text="Про мене" />
          </div>
          <Link href="/" className="mx-8 lg:mx-20">
            <Image src="/images/logo.png" alt="logo" width={90} height={1} />
          </Link>
          <div>
            <FooterLink href="/faq" text="Питання" className="mb-3" />
            <FooterLink href="/contacts" text="Контакти" />
          </div>
        </div>
        <div className="flex flex-row items-center order-3">
          <Link target="_blank" href="https://t.me/hanna_dynda">
            <Telegram className="fill-black hover:fill-green duration-300 mr-3" />
          </Link>
          <Viber className="fill-black mr-3" />
          <Link target="_blank" href="https://instagram.com/hanna_dynda?igshid=MTg0ZDhmNDA=">
            <Instagram className="fill-black hover:fill-green duration-300 mr-3" />
          </Link>
          <Link target="_blank" href="https://instagram.com/hanna_dynda?igshid=MTg0ZDhmNDA=">
            <Facebook className="fill-black hover:fill-green duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
