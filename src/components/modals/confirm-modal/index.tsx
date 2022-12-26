import ReactModal from 'react-modal';

import Button from '@/components/buttons/button';

interface IConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ConfirmModal(props: IConfirmModalProps) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      ariaHideApp={false}
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
        <p className="text-4xl text-center mb-4 font-serif text-black">
          {props.title || 'Будь-ласка перевірте ваші дані!'}
        </p>
        {!!props.subtitle && (
          <p className="text-md text-center font-sans text-black mb-5">{props.subtitle}</p>
        )}
        <div className="mt-4">{props.children}</div>
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
