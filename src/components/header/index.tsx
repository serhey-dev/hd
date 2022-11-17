import Link from 'next/link';

export default function Header() {
  return (
    <div className="container">
      <div className="flex flex-row items-center">
        <Link href={'/'}>
          Home
        </Link>
        <Link href={'/about'}>
          About
        </Link>
      </div>
    </div>
  );
}
