import Link from 'next/link';
import { useRouter } from 'next/router';

interface IFooterLinkProps {
  href: string;
  text: string;
}

export default function FooterLink(props: IFooterLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === props.href;

  return (
    <Link
      href={props.href}
      className={`block text-xl mb-3 font-serif text-black hover:text-green duration-300 ${
        isActive ? 'text-green' : ''
      }`}
    >
      {props.text}
    </Link>
  );
}
