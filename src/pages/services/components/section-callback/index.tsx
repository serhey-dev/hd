import React from 'react';

import { ICallbackInfo } from '@/types/callback-info';
import ParallaxBackground from '@/components/parallax-background';
import RequestCallbackForm from '@/pages/services/components/section-callback/components/request-callback-form';
import RequestResultInfoModal from '@/pages/schedule/components/section-schedule/components/request-result-info-modal';
import { requestCallback } from '@/services/request-appointment';

export default function SectionServices() {
  const [isResultModalOpen, setIsResultModalOpen] = React.useState(false);
  const [isRequestSuccess, setIsRequestSuccess] = React.useState(true);

  async function onSubmit(values: ICallbackInfo) {
    try {
      await requestCallback(values);
      setIsResultModalOpen(true);
      setIsRequestSuccess(true);
    } catch (error) {
      console.error('Failed to send bot message.');
      console.error(error);
      setIsResultModalOpen(true);
      setIsRequestSuccess(false);
    }
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
        <RequestCallbackForm onSubmit={onSubmit} />
      </div>
      <RequestResultInfoModal
        isOpen={isResultModalOpen}
        isSuccess={isRequestSuccess}
        onClose={onResultInfoModalClose}
      />
    </div>
  );
}
