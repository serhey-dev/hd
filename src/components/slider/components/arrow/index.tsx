import React from 'react';

import { mergeClasses } from '@/helpers/ui';
import Chevron from '@/components/icons/chevron';

interface IArrowProps {
  onClick: () => void;
  className?: string;
  iconClassName?: string;
  withBackground?: boolean;
  isNext: boolean;
}

export default function Arrow(props: IArrowProps) {
  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={props.isNext ? 'Наступний слайд' : 'Попередній слайд'}
      onClick={props.onClick}
      onKeyDown={props.onClick}
      className={mergeClasses(
        'fill-green-middle hover:fill-green duration-300 absolute top-0 h-full flex flex-col justify-center',
        props.className,
      )}
    >
      {props.withBackground && (
        <div className="absolute bg-black opacity-10 h-full w-full z-30 lg:hidden" />
      )}
      <Chevron
        className={mergeClasses('w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24', props.iconClassName)}
      />
    </div>
  );
}
