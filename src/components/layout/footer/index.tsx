import Link from 'next/link';
import Image from 'next/image';

import FooterLink from '@/components/layout/footer/components/footer-link';

import Instagram from '@/components/icons/instagram';
import Telegram from '@/components/icons/telegram';
import Facebook from '@/components/icons/facebook';
import Viber from '@/components/icons/viber';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black">
      <div className="container flex flex-wrap flex-row items-center justify-center py-8">
        <Link
          className="font-serif text-lg text-black hover:text-green whitespace-nowrap duration-300 md:mr-0 mr-8 order-2 md:order-1"
          href="tel:+380990375009"
        >
          +38(099)-03-75-009
        </Link>
        <div className="flex flex-row items-center justify-center flex-wrap lg:mx-20 mx-10 order-1 md:order-2 min-w-full md:min-w-fit mb-8 md:mb-0">
          <div>
            <FooterLink href="/services" text="Послуги" className="mb-3" />
            <FooterLink href="/about" text="Про мене" />
          </div>
          <Link href="/" className="lg:mx-20 mx-8">
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
