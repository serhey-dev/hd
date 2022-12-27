import Link from 'next/link';
import Image from 'next/image';

import HeaderLink from '@/components/layout/header/components/header-link';

export default function DesktopMenu() {
  return (
    <div className="w-full absolute z-50">
      <div className="flex flex-row items-center container p-6">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={120} height={1} />
        </Link>
        <div className="flex flex-row items-center">
          <HeaderLink href="/services" text="Послуги" />
          <HeaderLink href="/about" text="Про мене" />
          <HeaderLink href="/contacts" text="Контакти" />
          <HeaderLink href="/faq" text="Питання" />
          <HeaderLink href="/schedule" text="Запис" />
        </div>
      </div>
    </div>
  );
}
