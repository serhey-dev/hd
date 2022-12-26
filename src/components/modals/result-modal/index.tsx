import ReactModal from 'react-modal';

import Button from '@/components/buttons/button';

interface IResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
}

export default function ResultModal(props: IResultModalProps) {
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
          width: '50%',
        },
        overlay: {
          zIndex: 50,
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      }}
    >
      <div className="bg-white p-4 rounded">
        {props.isSuccess ? (
          <>
            <p className="text-4xl text-center mb-3 font-serif text-black">Дякую за довіру!</p>
            <p className="text-md text-center font-sans text-black mb-6">
              Я обов'язково зв'яжусь з вами найближчим часом.
            </p>
          </>
        ) : (
          <>
            <p className="text-4xl text-center mb-3 font-serif text-black">Щось пішло не так :(</p>
            <p className="text-md text-center font-sans text-black mb-6">
              Прошу вибачення за незручності. Будь-ласка сбробуйте пізніше або зв'яжіться зі мною
              будь-яким зручним для вас способом.
            </p>
          </>
        )}
        <Button
          onClick={props.onClose}
          text="Ок"
          className="mx-auto w-48 border-0 bg-green-light"
        />
      </div>
    </ReactModal>
  );
}
