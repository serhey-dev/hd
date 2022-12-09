import ParallaxBackground from '@/components/parallax-background';

export default function SectionGeneral() {
  return (
    <div className="min-h-screen">
      <ParallaxBackground
        style={{
          backgroundPosition: 'right 5% bottom -90px;',
        }}
        backgroundImage="/images/photos/44.png"
        className="bg-contain opacity-50"
      />
      <div className="flex flex-row items-center min-h-screen p-24 pt-36">
        <div className="w-1/2 ml-24 text-center">
          <h3 className="text-5xl font-serif text-black mb-8">Мене звати Аня!</h3>
          <p className="font-sans italic text-black text-lg">
            Я люблю кота орфея и Серегу и Орфея и Серегу. Я люблю кота орфея и Серегу и Орфея и
            Серегу. Я люблю кота орфея и Серегу и Орфея и Серегу. Я люблю кота орфея и Серегу и
            Орфея и Серегу.
          </p>
          <p className="font-sans italic text-black text-lg mt-2">
            Записуйся на консультацію! консультацію! Записуйся на консультацію! Записуйся на
            консультацію!
          </p>
          <p className="font-sans italic text-black text-lg mb-6 mt-2">
            Записуйся на консуонсультаці на консультацію! Записуйся на консультацію! Записуйся на
            консультацію!
          </p>
          <p className="font-sans italic text-black text-lg mt-2">
            Записуйся на консультацію! консультацію! Записуйся на консультацію! Записуйся на
            консультацію!
          </p>
          <p className="font-sans italic text-black text-lg mt-2">
            Записуйся на консультацію! консультацію! Записуйся на консультацію! Записуйся на
            консультацію!
          </p>
          <div className="h-px bg-black mx-auto w-2/3 mt-12" />
        </div>
      </div>
    </div>
  );
}
