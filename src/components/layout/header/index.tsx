import MobileMenu from '@/components/layout/header/components/mobile-menu';
import DesktopMenu from '@/components/layout/header/components/desktop-menu';

export default function Header() {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
}
