import ServiceItem from '@/pages/services/components/section-sevices/components/service-item';

export default function SectionServices() {
  return (
    <div className="min-h-screen relative">
      <div className="container pb-12 p-16 px-6">
        <ul className="mt-24">
          <div className="flex flex-row items-center justify-center">
            <ServiceItem
              name="Сімейна консультація"
              price="1000 грн. / год."
              text="Ніяк особо не зробиш робиш,е зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
            />
            <ServiceItem
              name="Індивідуальна консультація"
              price="1000 грн. / год."
              text="Ніяк особо не зробиш робиш,е зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              timeout={300}
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <ServiceItem
              name="Групова терапія"
              price="1000 грн. / год."
              text="Ніяк особо не зробиш робиш,е зробиш,Ніяк особо не зробиш,Ніяк особо не зробиш."
              timeout={600}
            />
            <ServiceItem
              name="Коучинг сесія"
              price="1000 грн. / год."
              text="Ніяк особо не зробиш робиш,е зробиш,Ніяк  asd asd asd asd asd asd asd asd asd."
              timeout={900}
            />
          </div>
        </ul>
      </div>
    </div>
  );
}
