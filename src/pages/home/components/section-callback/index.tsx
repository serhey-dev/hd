import React from 'react';
import { FormikProps } from 'formik';

import { ICallbackInfo } from '@/types';
import { getMessengerText } from '@/helpers/ui';
import * as Telegram from '@/services/telegram';

import ResultModal from '@/components/modals/result-modal';
import ConfirmModal from '@/components/modals/confirm-modal';
import ParallaxBackground from '@/components/parallax-background';
import RequestCallbackForm from '@/pages/home/components/section-callback/components/request-callback-form';

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

  function requestCallback(payload: ICallbackInfo) {
    // DEV
    // return Telegram.sendMessage(
    //   `Новий запит на дзвінок! Ім'я: ${payload.name}. Телефон: ${payload.phone}. ${getMessengerText(
    //     payload,
    //   )}`,
    // );
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
    <div className="relative min-h-screen border-t border-black flex items-center justify-center">
      <ParallaxBackground
        backgroundImage="/images/photos/home-callback.jpg"
        className="bg-center opacity-20 bg-cover"
      />
      <div className="container z-20 py-16">
        <h1 className="text-6xl text-center font-serif text-black mb-7">Зворотній звʼязок</h1>
        <p className="text-lg font-sans text-black text-center mb-8 xl:px-72">
          Заповніть форму і я обовʼязково з вами звʼяжусь. Якщо вам зручніше спілкування у
          месенджері - оберіть відповідну опцію.
        </p>
        <div className="mx-auto px-5 sm:px-0 xl:w-[40%] md:w-2/3">
          <RequestCallbackForm ref={formRef} onSubmit={onFormSubmit} />
        </div>
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
            {!!callbackInfo.messenger && (
              <p className="text-md text-center font-sans text-black mb-2">
                {getMessengerText(callbackInfo)}
              </p>
            )}
          </>
        </ConfirmModal>
      )}
    </div>
  );
}
