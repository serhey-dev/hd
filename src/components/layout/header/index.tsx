import { MD_BREAKPOINT } from '@/helpers/layout';
import useWindowDimensions from '@/hooks/use-window-dimensions';
import MobileMenu from '@/components/layout/header/components/mobile-menu';
import DesktopMenu from '@/components/layout/header/components/desktop-menu';

export default function Header() {
  const windowDimensions = useWindowDimensions();

  return !windowDimensions.isLoaded || windowDimensions.width > MD_BREAKPOINT ? (
    <DesktopMenu />
  ) : (
    <MobileMenu />
  );
}
