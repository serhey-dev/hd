import Link from 'next/link';
import { useRouter } from 'next/router';

import { mergeClasses } from '@/helpers/layout';

interface IHeaderLinkProps {
  href: string;
  text: string;
  className?: string;
}

export default function HeaderLink(props: IHeaderLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === props.href;

  return (
    <Link
      href={props.href}
      className={mergeClasses(
        'font-serif whitespace-nowrap text-3xl text-black hover:text-green duration-300 link-underline ml-12 mt-1',
        isActive ? 'text-green link-underline-finished' : 'link-underline-hover',
        props.className,
      )}
    >
      {props.text}
    </Link>
  );
}
