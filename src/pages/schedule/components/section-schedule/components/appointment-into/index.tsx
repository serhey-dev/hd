import { IAppointmentInfo } from '@/types';
import { getMessengerText } from '@/helpers/ui';
import { formatDateWithDots } from '@/helpers/date';

interface IAppointmentInfoProps {
  appointmentInfo?: IAppointmentInfo;
}

export default function AppointmentInfo(props: IAppointmentInfoProps) {
  if (!props.appointmentInfo) {
    return null;
  }

  return (
    <>
      <p className="text-md text-center font-sans text-black mb-2">
        Ім'я: {props.appointmentInfo.name}
      </p>
      <p className="text-md text-center font-sans text-black mb-2">
        Телефон: {props.appointmentInfo.phone}
      </p>
      {!!props.appointmentInfo.messenger && (
        <p className="text-md text-center font-sans text-black mb-2">
          {getMessengerText(props.appointmentInfo)}
        </p>
      )}
      <p className="text-md text-center font-sans text-black mb-2">
        Дата та час: {formatDateWithDots(props.appointmentInfo.date)} {props.appointmentInfo.time}
      </p>
      {!!props.appointmentInfo.request && (
        <p className="text-md text-center font-sans text-black mb-2">
          Запит: {props.appointmentInfo.request}
        </p>
      )}
    </>
  );
}
