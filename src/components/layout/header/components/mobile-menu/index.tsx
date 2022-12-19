import React from 'react';
import ReactModal from 'react-modal';

import Link from 'next/link';
import Image from 'next/image';
import HeaderLink from '@/components/layout/header/components/header-link';
import { useRouter } from 'next/router';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  React.useEffect(() => {
    onClose();
  }, [router.pathname]);

  return (
    <>
      <div
        onClick={onOpen}
        className="cursor-pointer z-20 fixed right-8 top-8 p-4 flex-col justify-center items-center"
      >
        <div className="h-1 w-8 mb-1 bg-black rounded-full" />
        <div className="h-1 w-8 mb-1 bg-black rounded-full" />
        <div className="h-1 w-8 bg-black rounded-full" />
      </div>
      <ReactModal
        closeTimeoutMS={200}
        isOpen={isOpen}
        ariaHideApp={false}
        style={{
          content: {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            padding: 0,
            borderRadius: 0,
            border: 'none',
          },
          overlay: {
            zIndex: 50,
          },
        }}
      >
        <div className="bg-white p-4 h-full relative">
          <div
            onClick={onClose}
            className="absolute cursor-pointer z-20 right-8 top-9 p-4 flex-col justify-center items-center"
          >
            <div className="h-1 translate-y-1 w-8 rotate-45 bg-black rounded-full" />
            <div className="h-1 w-8 -rotate-45 bg-black rounded-full" />
          </div>
          <div className="flex flex-col items-center mt-12">
            <Link href="/">
              <Image src="/images/logo.png" alt="logo" width={120} height={120} />
            </Link>
            <HeaderLink className="ml-0 pt-6" href="/services" text="Послуги" />
            <HeaderLink className="ml-0 pt-6" href="/about" text="Про мене" />
            <HeaderLink className="ml-0 pt-6" href="/contacts" text="Контакти" />
            <HeaderLink className="ml-0 pt-6" href="/faq" text="Питання" />
            <HeaderLink className="ml-0 pt-6" href="/schedule" text="Запис" />
          </div>
        </div>
      </ReactModal>
    </>
  );
}
