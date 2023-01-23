import React from 'react';

import { mergeClasses } from '@/helpers/ui';

interface IQuestionItemProps {
  question: string;
  answer?: string;
  answerContent?: React.ReactNode;
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
        className={mergeClasses(
          'flex flex-row items-center cursor-pointer text-black duration-300 py-2',
          isOpen ? 'text-green fill-green' : 'hover:text-green hover:fill-green',
        )}
      >
        <div className="w-2 h-2 flex-none rounded-full bg-green mr-3" />
        <span className="font-sans text-xl mr-1 select-none">{props.question}</span>
      </div>
      <div
        className={mergeClasses(
          'ease-in duration-500 overflow-hidden opacity-0 max-h-0',
          isOpen ? 'opacity-100 sm:max-h-[600px] max-h-[1100px]' : '',
        )}
      >
        <div className="mt-2 mb-4 pl-5">
          {props.answerContent || <p className="font-sans text-black text-lg">{props.answer}</p>}
        </div>
      </div>
    </li>
  );
}
