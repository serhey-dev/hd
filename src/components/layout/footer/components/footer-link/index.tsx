import Link from 'next/link';
import { useRouter } from 'next/router';
import { mergeClasses } from '@/helpers/layout';

interface IFooterLinkProps {
  href: string;
  text: string;
  className?: string;
}

export default function FooterLink(props: IFooterLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === props.href;

  return (
    <Link
      href={props.href}
      className={mergeClasses(
        'block whitespace-nowrap text-2xl font-serif text-black hover:text-green duration-300',
        isActive ? 'text-green' : '',
        props.className,
      )}
    >
      {props.text}
    </Link>
  );
}
