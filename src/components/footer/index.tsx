import Link from 'next/link';
import Image from 'next/image';

import FooterLink from '@/components/footer/components/footer-link';

import Instagram from '@/components/icons/instagram';
import Telegram from '@/components/icons/telegram';
import Facebook from '@/components/icons/facebook';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black">
      <div className="container flex flex-row items-center justify-center py-8">
        <Link
          className="font-serif text-black mr-20 hover:text-green duration-300"
          href="tel:+380990375009"
        >
          +38(099)-03-75-009
        </Link>
        <div className="flex flex-row items-center">
          <div>
            <FooterLink href="/services" text="Послуги" />
            <FooterLink href="/about" text="Про мене" />
          </div>
          <Link href="/" className="mx-20">
            <Image src="/images/logo.png" alt="logo" width={90} height={1} />
          </Link>
          <div>
            <FooterLink href="/faq" text="Питання" />
            <FooterLink href="/contacts" text="Контакти" />
          </div>
        </div>
        <div className="flex flex-row items-center ml-20">
          <Link target="_blank" href="https://instagram.com/hanna_dynda?igshid=MTg0ZDhmNDA=">
            <Instagram className="fill-black hover:fill-green duration-300 mr-3" />
          </Link>
          <Link target="_blank" href="https://t.me/hanna_dynda">
            <Telegram className="fill-black hover:fill-green duration-300 mr-3" />
          </Link>
          <Link target="_blank" href="https://instagram.com/hanna_dynda?igshid=MTg0ZDhmNDA=">
            <Facebook className="fill-black hover:fill-green duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
