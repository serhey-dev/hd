import ReactModal from 'react-modal';

import Button from '@/components/buttons/button';

interface IServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  details: string;
}

export default function ServiceDetails(props: IServiceDetailsProps) {
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
          maxWidth: '90%',
        },
        overlay: {
          zIndex: 50,
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      }}
    >
      <div className="bg-white p-4 rounded max-w-[800px] mx-6">
        <p className="text-4xl text-center mb-3 font-serif text-black">{props.name}</p>
        <p className="text-md text-center font-sans text-black mb-6">{props.details}</p>
        <Button
          onClick={props.onClose}
          text="Ок"
          className="mx-auto w-48 border-0 bg-green-light"
        />
      </div>
    </ReactModal>
  );
}
