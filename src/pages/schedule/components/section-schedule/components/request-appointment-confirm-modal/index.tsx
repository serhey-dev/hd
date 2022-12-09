import ReactModal from 'react-modal';

import Button from '@/components/button';
import { IAppointmentInfo } from '@/types/appointment-info';
import AppointmentInfo from '@/pages/schedule/components/section-schedule/components/appointment-into';

interface IRequestAppointmentConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  appointmentInfo: IAppointmentInfo;
}

export default function RequestAppointmentConfirmModal(
  props: IRequestAppointmentConfirmModalProps,
) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={props.onClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
        overlay: {
          zIndex: 50,
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      }}
    >
      <div className="bg-white p-4 rounded">
        <p className="text-4xl text-center mb-3 font-serif text-black">
          Будь-ласка перевірте ваші дані!
        </p>
        <p className="text-md text-center font-sans text-black mb-6">
          Ви не зможете відмінити запит на сесію.
        </p>
        <AppointmentInfo appointmentInfo={props.appointmentInfo} />
        <div className="flex flex-row mt-8">
          <Button
            onClick={props.onConfirm}
            text="Так, все вірно."
            className="mx-auto border-0 bg-green-light"
          />
          <Button
            onClick={props.onClose}
            text="Ні, дані не вірні."
            className="mx-auto ml-12 border-0 hover:bg-red bg-red-light outline-red"
          />
        </div>
      </div>
    </ReactModal>
  );
}
