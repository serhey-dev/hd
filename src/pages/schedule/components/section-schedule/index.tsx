import React from 'react';

import AppointmentInfo from '@/pages/schedule/components/section-schedule/components/appointment-into';
import RequestAppointmentForm from '@/pages/schedule/components/section-schedule/components/request-appointment-form';
import RequestResultInfoModal from '@/pages/schedule/components/section-schedule/components/request-result-info-modal';
import RequestAppointmentConfirmModal from '@/pages/schedule/components/section-schedule/components/request-appointment-confirm-modal';

import { formatDateWithDots } from '@/helpers/date';
import { IAppointmentInfo } from '@/types/appointment-info';
import { requestAppointment } from '@/services/request-appointment';
import { useAppointmentInfoContoller } from '@/hooks/use-appointment-info';
import ParallaxBackground from '@/components/parallax-background';

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

  async function onConfirmModalSubmit() {
    if (appointmentInfo) {
      setIsConfirmModalOpen(false);
      try {
        await requestAppointment({
          ...appointmentInfo,
          date: formatDateWithDots(appointmentInfo.date),
        });
        await appointmentInfoController.saveAppointmentInfo(appointmentInfo);
        await appointmentInfoController.refetchInfo();
        setIsResultModalOpen(true);
        setIsRequestSuccess(true);
      } catch (error) {
        console.error('Failed to send bot message.');
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

  function onResultInfoModalClose() {
    setIsResultModalOpen(false);
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      {!!appointmentInfo && (
        <RequestAppointmentConfirmModal
          isOpen={isConfirmModalOpen}
          onClose={onConfirmModalClose}
          onConfirm={onConfirmModalSubmit}
          appointmentInfo={appointmentInfo}
        />
      )}
      <RequestResultInfoModal
        isOpen={isResultModalOpen}
        onClose={onResultInfoModalClose}
        isSuccess={isRequestSuccess}
      />
      <div className="container w-1/2 my-36">
        <h1 className="text-6xl text-center mb-3 font-serif text-black">Тут запис</h1>
        {appointmentInfoController.appointmentInfo ? (
          <>
            <h2 className="text-xl text-center font-sans text-black mb-2">Ви вже записались!</h2>
            <p className="text-xl text-center font-sans text-black mb-6">
              Буду з нетерпінням чекати нашої зустрічі
            </p>
            <AppointmentInfo appointmentInfo={appointmentInfoController.appointmentInfo} />
          </>
        ) : (
          <>
            <h2 className="text-xl text-center font-sans text-black mb-6">
              Записуйся на консультацію!
            </h2>
            <RequestAppointmentForm onSubmit={onFormSubmit} />
          </>
        )}
      </div>
    </div>
  );
}
