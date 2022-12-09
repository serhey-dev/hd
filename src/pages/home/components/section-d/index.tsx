import Image from 'next/image';

import ButtonLink from '@/components/button-link';

export default function SectionD() {
  return (
    <div className="min-h-screen border-t border-black h-full flex justify-center">
      <div className="flex container flex-row items-center justify-center">
        <Image src="/images/1.jpeg" alt="logo" width={450} height={1} />
        <div className="w-1/3 ml-36">
          <h3 className="text-3xl font-serif text-black mb-6">Записуйся на консультацію!</h3>
          <p className="font-sans italic text-black text-lg">
            консультацію! Записуйся на консультаціюа консультацію! Записуйся на консультацію!
            Записуйся на консультацію!Записуйся на консультацію! Записуйся на консультацію!
            Записуйся
          </p>
          <p className="font-sans italic text-black text-lg">
            Записуйся на консультацію! консультацію! Записуйся на консультацію! Записуйся на
            консультацію!
          </p>
          <p className="font-sans italic text-black text-lg mb-6">
            Записуйся на консуонсультаці на консультацію! Записуйся на консультацію! Записуйся на
            консультацію!
          </p>
          <ButtonLink href="/schedule" text="Записатись" />
        </div>
      </div>
    </div>
  );
}
