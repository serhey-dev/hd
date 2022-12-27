import React from 'react';

import { mergeClasses } from '@/helpers/ui';

interface IRadioOption {
  value?: string;
  content: React.ReactNode;
}

interface IInputRadioProps {
  className?: string;
  value?: string;
  onChange: (value?: string) => void;
  options: IRadioOption[];
}

export default function InputRadio(props: IInputRadioProps) {
  function onSelect(option: IRadioOption) {
    props.onChange(option.value);
  }

  return (
    <div className={mergeClasses('flex flex-col sm:items-center sm:flex-row', props.className)}>
      {props.options.map((option) => (
        <div key={option.value || 'empty'} className="flex flex-row items-center mr-6">
          <div
            tabIndex={0}
            role="button"
            onClick={() => onSelect(option)}
            onKeyDown={() => onSelect(option)}
            className="pr-4 py-1 duration-500 flex flex-row items-center"
          >
            <div
              className={mergeClasses(
                'w-8 h-8 border rounded-full duration-200 flex items-center justify-center',
                props.value ? 'bg-white' : 'bg-white',
              )}
            >
              <div
                className={mergeClasses(
                  'w-5 h-5 bg-green rounded-full duration-200',
                  props.value === option.value ? 'opacity-100' : 'opacity-0',
                )}
              />
            </div>
            <div>{option.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
