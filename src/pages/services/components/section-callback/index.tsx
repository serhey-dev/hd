import React from 'react';
import { FormikProps } from 'formik';

import ResultModal from '@/components/modals/result-modal';
import ConfirmModal from '@/components/modals/confirm-modal';
import ParallaxBackground from '@/components/parallax-background';

import { ICallbackInfo } from '@/types/callback-info';
import { requestCallback } from '@/services/request-appointment';
import RequestCallbackForm from '@/pages/services/components/section-callback/components/request-callback-form';

export default function SectionServices() {
  const formRef = React.useRef<FormikProps<ICallbackInfo>>(null);

  const [isConfirmModalOpen, setIsConfirmModalOpen] = React.useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = React.useState(false);
  const [isRequestSuccess, setIsRequestSuccess] = React.useState(true);
  const [callbackInfo, setCallbackInfo] = React.useState<ICallbackInfo | undefined>();

  function onFormSubmit(values: ICallbackInfo) {
    setIsConfirmModalOpen(true);
    setCallbackInfo(values);
  }

  async function onConfirmModalSubmit() {
    if (callbackInfo && formRef.current) {
      setIsConfirmModalOpen(false);
      try {
        await requestCallback(callbackInfo);
        setIsResultModalOpen(true);
        setIsRequestSuccess(true);
        formRef.current.resetForm();
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
    setCallbackInfo(undefined);
  }

  function onResultInfoModalClose() {
    setIsResultModalOpen(false);
  }

  return (
    <div className="min-h-screen border-t border-black flex items-center justify-center relative">
      <ParallaxBackground
        backgroundImage="/images/photos/5.jpg"
        className="bg-center opacity-20 bg-cover"
      />
      <div className="container w-1/3 my-36 z-50">
        <h1 className="text-6xl mb-4 text-center font-serif text-black">Зворотній дзвінок</h1>
        <p className="text-lg mb-8 text-center font-sans text-black">
          Позвоніть мені і все буде добре. Позвоніть мені і все буде добре. Позвоніть мені і все
          буде добре.
        </p>
        <RequestCallbackForm ref={formRef} onSubmit={onFormSubmit} />
      </div>
      <ResultModal
        isOpen={isResultModalOpen}
        isSuccess={isRequestSuccess}
        onClose={onResultInfoModalClose}
      />
      {!!callbackInfo && (
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          onClose={onConfirmModalClose}
          onConfirm={onConfirmModalSubmit}
        >
          <>
            <p className="text-md text-center font-sans text-black mb-2">
              Ім'я: {callbackInfo.name}
            </p>
            <p className="text-md text-center font-sans text-black mb-2">
              Телефон: {callbackInfo.phone}
            </p>
          </>
        </ConfirmModal>
      )}
    </div>
  );
}
