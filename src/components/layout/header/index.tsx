import Link from 'next/link';
import Image from 'next/image';

import HeaderLink from '@/components/layout/header/components/header-link';
import MobileMenu from '@/components/layout/header/components/mobile-menu';
import useWindowDimensions from '@/hooks/use-window-dimensions';
import { MD_BREAKPOINT } from '@/helpers/layout';

export default function Header() {
  const windowDimensions = useWindowDimensions();

  return windowDimensions.width > MD_BREAKPOINT ? (
    <div className="w-full absolute z-20">
      <div className="flex flex-row items-center container pb-4 pt-6">
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
  ) : (
    <MobileMenu />
  );
}
