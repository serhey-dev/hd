import AnimateOnScroll from '@/components/animate-on-scroll';
import ParallaxBackground from '@/components/parallax-background';

export default function SectionHero() {
  return (
    <div className="min-h-screen relative">
      <ParallaxBackground
        className="bg-cover bg-right opacity-30 hidden md:block"
        backgroundImage="/images/photos/about-hero.jpg"
      />
      <ParallaxBackground
        className="bg-cover bg-center opacity-30 md:hidden"
        backgroundImage="/images/photos/about-hero-mobile.jpg"
      />
      <div className="container z-20 relative py-16 flex flex-row items-center min-h-screen">
        <div className="xl:w-1/2 lg:w-2/3 w-full px-2">
          <div className="xl:ml-12 text-center px-5 md:px-0">
            <h3 className="text-6xl font-serif text-black mb-8">Про мене</h3>
            <p className="font-sans italic text-black text-lg mb-3">
              Шановні, мене звуть Ганна Динда. Я - практикуючий психолог та коуч. Я сприймаю кожного
              клієнта як новий, унікальний, цікавий світ.
            </p>
            <p className="font-sans italic text-black text-lg">
              Працювати в цій сфері - моє покликання! Я з великим задоволенням ділюся своїми
              знаннями та досвідом на наших консультаціях.
            </p>
            <AnimateOnScroll
              className="duration-500 mx-auto my-6"
              notScrolledClassName="w-0"
              scrolledClassName="w-36"
            >
              <div className="h-0.5 bg-black w-full" />
            </AnimateOnScroll>
            <p className="font-sans italic text-black text-lg">
              Все це для того - щоб Ви, мій шановний клієнт обов’язково досягли своєї мети. А я буду
              поруч з Вами на цьому шляху - для того, щоб підсвітити все те що пролітає повз наше
              сприйняття.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
