import React from 'react';

import { IAppointmentInfo } from '@/types';
import * as Telegram from '@/services/telegram';
import { getMessengerText } from '@/helpers/ui';
import { formatDateWithDots } from '@/helpers/date';
import { useAppointmentInfoContoller } from '@/hooks/use-appointment-info';

import ResultModal from '@/components/modals/result-modal';
import ConfirmModal from '@/components/modals/confirm-modal';
import AnimateOnScroll from '@/components/animate-on-scroll';
import ParallaxBackground from '@/components/parallax-background';
import AppointmentInfo from '@/routes/schedule/components/section-schedule/components/appointment-into';
import RequestAppointmentForm from '@/routes/schedule/components/section-schedule/components/request-appointment-form';

export default function SectionSchedule() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = React.useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = React.useState(false);
  const [isRequestSuccess, setIsRequestSuccess] = React.useState(true);
  const [appointmentInfo, setAppointmentInfo] = React.useState<IAppointmentInfo | undefined>();

  const appointmentInfoController = useAppointmentInfoContoller();

  function onFormSubmit(values: IAppointmentInfo) {
    setIsConfirmModalOpen(true);
    setAppointmentInfo(values);
  }

  function requestAppointment(payload: IAppointmentInfo) {
    // DEV
    // return { status: 200 };
    return Telegram.sendMessage(
      `Новий запис на зустріч! Ім'я: ${payload.name}. Телефон: ${payload.phone}. ${getMessengerText(
        payload,
      )} Дата: ${payload.date}. Час: ${payload.time}. Запит: ${
        payload.request || 'Не заповнений'
      }.`,
    );
  }

  async function onConfirmModalSubmit() {
    if (appointmentInfo) {
      setIsConfirmModalOpen(false);
      try {
        const response = await requestAppointment({
          ...appointmentInfo,
          date: formatDateWithDots(appointmentInfo.date),
        });
        if (response.status !== 200) {
          throw new Error(`Failed to send a message to bot. Status - ${response.status}`);
        }
        await appointmentInfoController.saveAppointmentInfo(appointmentInfo);
        await appointmentInfoController.refetchInfo();
        setIsResultModalOpen(true);
        setIsRequestSuccess(true);
      } catch (error) {
        console.error(error);
        setIsResultModalOpen(true);
        setIsRequestSuccess(false);
      }
    }
  }

  function onConfirmModalClose() {
    setIsConfirmModalOpen(false);
    setAppointmentInfo(undefined);
  }

  function onResultModalClose() {
    setIsResultModalOpen(false);
  }

  return (
    <div className="min-h-screen relative">
      <ParallaxBackground
        className="bg-cover opacity-20 bg-right"
        backgroundImage="/images/photos/schedule-hero.jpg"
      />
      {!!appointmentInfo && (
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          onClose={onConfirmModalClose}
          onConfirm={onConfirmModalSubmit}
          subtitle="Ви не зможете змінити дані запису пізніше."
        >
          <AppointmentInfo appointmentInfo={appointmentInfo} />
        </ConfirmModal>
      )}
      <ResultModal
        isOpen={isResultModalOpen}
        onClose={onResultModalClose}
        isSuccess={isRequestSuccess}
      />
      <div className="container min-h-screen relative z-20 flex flex-col justify-center items-center py-16 md:pt-32">
        <div className="px-5 w-full lg:w-1/2 md:w-2/3">
          {!!appointmentInfoController.appointmentInfo ? (
            <div>
              <h2 className="text-xl text-center font-sans text-black mb-2">Ви вже записались!</h2>
              <p className="text-xl text-center font-sans text-black mb-6">
                Найближчим часом я обовʼязково з вами звʼяжусь.
              </p>
              <p className="text-xl text-center font-sans text-black mb-6">Дякую за довіру!</p>
              <AnimateOnScroll
                className="duration-500 mx-auto mb-5"
                notScrolledClassName="w-0"
                scrolledClassName="w-36"
              >
                <div className="h-0.5 w-full bg-black" />
              </AnimateOnScroll>
              <AppointmentInfo appointmentInfo={appointmentInfoController.appointmentInfo} />
            </div>
          ) : (
            <>
              <h1 className="text-6xl text-center font-serif text-black mb-8">
                Записатись на консультацію
              </h1>
              <p className="text-lg mb-2 text-center font-sans text-black">
                Після відправки форми я обовʼязково з вами звʼяжусь, уточню деталі та підтверджу
                запис. Якщо вам зручніше спілкування у месенджері - оберіть відповідну опцію.
              </p>
              <AnimateOnScroll
                className="duration-500 mx-auto my-3"
                notScrolledClassName="w-0"
                scrolledClassName="w-36"
              >
                <div className="h-0.5 w-full bg-black" />
              </AnimateOnScroll>
              <p className="text-lg mb-4 text-center font-sans text-black">
                У місті Дніпро є можливість для проведення офлайн консультації.
              </p>
              <RequestAppointmentForm onSubmit={onFormSubmit} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
