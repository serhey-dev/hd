import React from 'react';
import Chevron from '@/components/icons/chevron';

interface IQuestionItemProps {
  question: string;
  answer: string;
}

export default function QuestionItem(props: IQuestionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  function onClick() {
    setIsOpen(!isOpen);
  }

  return (
    <li>
      <div
        tabIndex={0}
        role="button"
        onClick={onClick}
        onKeyDown={onClick}
        className={`py-2 flex items-center cursor-pointer text-black duration-300 ${
          isOpen ? 'text-green fill-green' : 'hover:text-green hover:fill-green'
        }`}
      >
        <div className="w-2 h-2 rounded-full bg-green mr-3" />
        <span className="font-sans text-xl mr-1 select-none">{props.question}</span>
        <Chevron className={`${isOpen ? 'rotate-0' : 'rotate-180'} duration-500 w-8 h-8`} />
      </div>
      <div
        className={`ease-in duration-500 overflow-hidden opacity-0 max-h-0 ${
          isOpen ? 'opacity-100 max-h-64' : ''
        }`}
      >
        <p className="font-sans text-black text-lg mt-2 mb-4 pl-5">{props.answer}</p>
      </div>
      {/* <div className='h-px bg-black w-48'></div> */}
    </li>
  );
}
