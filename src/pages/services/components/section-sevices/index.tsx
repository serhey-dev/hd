import ServiceItem from '@/pages/services/components/section-sevices/components/service-item';

export default function SectionServices() {
  return (
    <div className="min-h-screen container pb-12 p-16 px-6">
      <h1 className="text-6xl mb-6 text-center font-serif text-black mb-12 mt-16">Послуги</h1>
      <ul className="flex flex-wrap justify-center">
        <ServiceItem
          name="Сімейна консультація"
          price="1000 грн. / год."
          text="Ніяк особо не зробиш робиш,е зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
          // className='border-r border-b'
        />
        <ServiceItem
          name="Індивідуальна консультація"
          price="1000 грн. / год."
          text="Ніяк особо не зробиш робиш,е зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
          // className='border-b'
        />
        <ServiceItem
          name="Групова терапія"
          price="1000 грн. / год."
          text="Ніяк особо не зробиш робиш,е зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
          // className='border-r'
        />
        <ServiceItem
          name="Коучинг сесія"
          price="1000 грн. / год."
          text="Ніяк особо не зробиш робиш,е зробиш,Ніяк  asd asd asd asd asd asd asd asd asd asd asd das dasdasd asd asd asd asd asd asd asd asd asd asd as dasd особо не зробиш,Ніяк особо не зробиш."
          className="w-2/3"
        />
      </ul>
    </div>
  );
}
