import React from 'react';
import InputMask from 'react-input-mask';

import { mergeClasses } from '@/helpers/ui';

interface IInputTextProps {
  id?: string;
  name: string;
  mask?: string;
  value: string;
  placeholder?: string;
  error?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText(props: IInputTextProps) {
  return props.mask ? (
    <InputMask
      id={props.id || props.name}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      mask={props.mask}
      maskChar=" "
      className={mergeClasses(
        'font-sans h-14 px-4 block w-full border border-black rounded outline-black bg-white',
        props.error ? 'text-red border-red outline-red' : '',
      )}
    />
  ) : (
    <input
      id={props.id || props.name}
      type="text"
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className={mergeClasses(
        'font-sans h-14 px-4 block w-full border border-black rounded outline-black bg-white',
        props.error ? 'text-red border-red outline-red' : '',
      )}
    />
  );
}
