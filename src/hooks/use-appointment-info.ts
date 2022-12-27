import React from 'react';

import { IAppointmentInfo } from '@/types';

const APPOINTMENT_INFO_KEY = 'APPOINTMENT_INFO';

export function useAppointmentInfoContoller() {
  const [appointmentInfo, setAppointmentInfo] = React.useState<IAppointmentInfo | undefined>(
    undefined,
  );

  async function refetchInfo() {
    const data = await localStorage.getItem(APPOINTMENT_INFO_KEY);
    if (data) {
      const appointmentInfo: IAppointmentInfo = JSON.parse(data);
      if (new Date(appointmentInfo.time).getTime() < new Date().getTime()) {
        await localStorage.removeItem(APPOINTMENT_INFO_KEY);
      }
      setAppointmentInfo(appointmentInfo);
    }
  }

  function saveAppointmentInfo(appointmentInfo: IAppointmentInfo) {
    return localStorage.setItem(APPOINTMENT_INFO_KEY, JSON.stringify(appointmentInfo));
  }

  function initialFetch() {
    refetchInfo();
  }

  React.useEffect(initialFetch, []);

  // React.useEffect(() => {
  //   localStorage.removeItem(APPOINTMENT_INFO_KEY);
  // }, []);

  return {
    refetchInfo,
    saveAppointmentInfo,
    appointmentInfo,
  };
}
