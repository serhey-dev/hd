import React from 'react';

import ServiceItem from '@/routes/services/components/section-services/components/service-item';
import ServiceDetailsModal from '@/routes/services/components/section-services/components/service-details-modal';

interface IServiceItem {
  name: string;
  price: string;
  text: string;
  details: string;
  timeout?: number;
}

const items: IServiceItem[] = [
  {
    name: 'Індивідуальна консультація',
    price: '650 грн. / год.',
    text: 'Я допоможу дослідити вашу життєву ситуацію, а також активувати додатковий ресурс, щоб знайти вихід зі складних обставин. Ви можете звернутись з будь-чим, що турбує особисто вас.',
    details:
      'Я допоможу дослідити вашу життєву ситуацію, а також активувати додатковий ресурс, щоб знайти вихід зі складних обставин. Ви можете звернутись з будь-чим, що турбує особисто вас.',
  },
  {
    name: 'Парна консультація',
    price: '900 грн. / год.',
    text: 'Допомагає двом людям зрозуміти їх стосунки, вирішити конфлікт або вивести стосунки на інший рівень. Увага зосереджена насамперед на самих стосунках, а не на окремій людині.',
    details:
      'Допомагає двом людям зрозуміти їх стосунки, вирішити конфлікт або вивести стосунки на інший рівень. Увага зосереджена насамперед на самих стосунках, а не на окремій людині.',
    timeout: 300,
  },
  {
    name: 'Коучинг сесія',
    price: '750 грн. / год.',
    text: 'Інструмент для досягання вашої мети. Працюємо з майбутнім. Сесія проходить в партнерстві між Коучем та клієнтом. Тут не про вирішення проблеми - тут про досягнення мрії.',
    details:
      'Інструмент для досягання вашої мети. Працюємо з майбутнім. Сесія проходить в партнерстві між Коучем та клієнтом. Тут не про вирішення проблеми - тут про досягнення мрії.',
    timeout: 600,
  },
  {
    name: 'Тренінг',
    price: '400 грн. / год.',
    text: 'Інструмент, формою якого є інтерактивне навчання для розвитку міжособистісного та професійного спілкування. Також може бути направлений на розвиток певних знань, умінь або навичок.',
    details:
      'Інструмент, формою якого є інтерактивне навчання для розвитку міжособистісного та професійного спілкування. Також може бути направлений на розвиток певних умінь або навичок.',
    timeout: 900,
  },
];

export default function SectionServices() {
  const [isServiceDetailsModalOpen, setIsServiceDetailsModalOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<IServiceItem | undefined>();

  function onSelect(item: IServiceItem) {
    setIsServiceDetailsModalOpen(true);
    setSelectedService(item);
  }

  function onDetailsModalClose() {
    setIsServiceDetailsModalOpen(false);
    setSelectedService(undefined);
  }

  return (
    <div className="min-h-screen relative">
      {!!selectedService && (
        <ServiceDetailsModal
          isOpen={isServiceDetailsModalOpen}
          onClose={onDetailsModalClose}
          name={selectedService.name}
          details={selectedService.details}
        />
      )}
      <div className="container pt-16 pb-12 md:pt-32">
        <h1 className="text-6xl text-center font-serif text-black mb-10">Послуги</h1>
        <ul>
          <li className="flex flex-row flex-wrap items-center justify-center">
            {items.map((item) => (
              <ServiceItem
                onClickDetails={() => onSelect(item)}
                key={item.name}
                name={item.name}
                price={item.price}
                text={item.text}
                timeout={item.timeout}
              />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
