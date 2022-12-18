import AnimateOnScroll from '@/components/animate-on-scroll';
import ParallaxBackground from '@/components/parallax-background';

export default function SectionGeneral() {
  return (
    <div className="min-h-screen">
      {/* <ParallaxBackground
        style={{
          backgroundPosition: 'right 1px bottom -530px',
        }}
        className="bg-cover opacity-20"
        backgroundImage="/images/photos/77.png"
      /> */}

      {/* <ParallaxBackground
        style={{
          backgroundPosition: 'left 5% bottom -90px;',
        }}
        backgroundImage="/images/photos/44.png"
        className="bg-contain opacity-50"
      /> */}
      <div className="flex flex-row container items-center min-h-screen p-18 pb-28 pt-36">
        <div className="w-1/2 ml-12 text-center">
          <h3 className="text-6xl font-serif text-black mb-8">Про мене</h3>
          <p className="font-sans italic text-black text-lg">
            Шановні, мене звуть Ганна Динда. Я - практикуючий психолог та коуч. Я сприймаю кожного
            клієнта як новий, унікальний, цікавий світ.
          </p>
          <p className="font-sans italic text-black text-lg mt-3">
            Працювати в цій сфері - моє покликання! Я з великим задоволенням ділюся своїми знаннями
            та досвідом на наших консультаціях.
          </p>
          <AnimateOnScroll
            className="duration-500 mx-auto"
            notScrolledClassName="w-0"
            scrolledClassName="w-36"
          >
            <div className="h-0.5 bg-black w-full my-6" />
          </AnimateOnScroll>
          <p className="font-sans italic text-black text-lg mt-3">
            Все це для того - щоб Ти, мій шановний клієнт обов’язково досяг своєї мети. А я буду
            поруч з тобою на цьому шляху - для того, щоб підсвітити все те що пролітає повз наше
            сприйняття.
          </p>
        </div>
      </div>
    </div>
  );
}
