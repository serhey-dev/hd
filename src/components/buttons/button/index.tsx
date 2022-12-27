import { MouseEvent } from 'react';

import { mergeClasses } from '@/helpers/ui';

interface IButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button(props: IButtonProps) {
  function onClick(event: MouseEvent) {
    event.preventDefault();
    props.onClick();
  }

  return (
    <button
      type={props.type || 'button'}
      className={mergeClasses(
        'block px-8 py-2 font-serif text-black border-black text-3xl border-2 rounded-md duration-300 hover:bg-green hover:border-green hover:text-white outline-green',
        props.className,
      )}
      onClick={onClick}
    >
      {props.text}
    </button>
  );
}
