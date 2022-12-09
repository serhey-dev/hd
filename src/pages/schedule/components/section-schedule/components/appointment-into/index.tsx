import { formatDateWithDots } from '@/helpers/date';
import { IAppointmentInfo } from '@/types/appointment-info';

interface IAppointmentInfoProps {
  appointmentInfo: IAppointmentInfo;
}

export default function AppointmentInfo(props: IAppointmentInfoProps) {
  return (
    <>
      <p className="text-md text-center font-sans text-black mb-2">
        Ім'я: {props.appointmentInfo.name}
      </p>
      <p className="text-md text-center font-sans text-black mb-2">
        Телефон: {props.appointmentInfo.phone}
      </p>
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
