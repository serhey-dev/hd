import React from 'react';
import ReactModal from 'react-modal';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import HeaderLink from '@/components/layout/header/components/header-link';

import LogoImage from '@/images/logo.png';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  React.useEffect(onClose, [router.pathname]);

  return (
    <>
      <div
        onClick={onOpen}
        className="cursor-pointer z-30 fixed right-8 top-8 flex justify-center items-center rounded-full w-12 h-12 bg-green-light shadow md:hidden"
      >
        <div>
          <div className="h-1 w-7 mb-1 bg-black rounded-full" />
          <div className="h-1 w-7 mb-1 bg-black rounded-full" />
          <div className="h-1 w-7 bg-black rounded-full" />
        </div>
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
            className="absolute cursor-pointer z-50 right-8 top-8 w-12 h-12 flex justify-center items-center"
          >
            <div>
              <div className="h-1 translate-y-1 w-7 rotate-45 bg-black rounded-full" />
              <div className="h-1 w-7 -rotate-45 bg-black rounded-full" />
            </div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <Link href="/">
              <Image src={LogoImage} alt="Ганна Динда Психолог" width={120} />
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
