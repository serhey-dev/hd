import Link from 'next/link';
import Image from 'next/image';

import Config from '@/config';
import { formatPhoneNumber } from '@/helpers/ui';

import Viber from '@/components/icons/viber';
import Telegram from '@/components/icons/telegram';
import Facebook from '@/components/icons/facebook';
import Instagram from '@/components/icons/instagram';
import FooterLink from '@/components/layout/footer/components/footer-link';

import LogoImage from '@/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black">
      <div className="container flex flex-wrap flex-row items-center justify-center py-8">
        <Link
          className="font-serif text-lg text-black hover:text-green whitespace-nowrap duration-300 mr-8 order-2 md:mr-0  md:order-1"
          href={`tel:${Config.CONTACT_PHONE_NUMBER}`}
        >
          {formatPhoneNumber(Config.CONTACT_PHONE_NUMBER)}
        </Link>
        <div className="flex flex-row items-center justify-center flex-wrap order-1 mb-8 mx-10 min-w-full lg:mx-20 md:order-2 md:min-w-fit md:mb-0">
          <div>
            <FooterLink href="/services" text="Послуги" className="mb-3" />
            <FooterLink href="/about" text="Про мене" />
          </div>
          <Link href="/" className="mx-8 lg:mx-20">
            <Image src={LogoImage} alt="Ганна Динда Психолог" width={90} />
          </Link>
          <div>
            <FooterLink href="/faq" text="Питання" className="mb-3" />
            <FooterLink href="/contacts" text="Контакти" />
          </div>
        </div>
        <div className="flex flex-row items-center order-3">
          <Link target="_blank" href={Config.LINK_TELEGRAM}>
            <Telegram className="fill-black hover:fill-green duration-300 mr-3" />
          </Link>
          <Viber className="fill-black mr-3" />
          <Link target="_blank" href={Config.LINK_ISNTAGRAM}>
            <Instagram className="fill-black hover:fill-green duration-300 mr-3" />
          </Link>
          <Link target="_blank" href={Config.LINK_FACEBOOK}>
            <Facebook className="fill-black hover:fill-green duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
