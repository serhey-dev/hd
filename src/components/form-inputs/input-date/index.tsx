import React, { ChangeEvent } from 'react';
import { mergeClasses } from '@/helpers/layout';
import { formatDateWithDots } from '@/helpers/date';

interface IInputDateProps {
  name: string;
  value: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
  max?: string;
  min?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputDate(props: IInputDateProps) {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <input
      max={props.max}
      min={props.min}
      name={props.name}
      placeholder={props.placeholder}
      type={isFocused ? 'date' : 'text'}
      value={isFocused ? props.value : formatDateWithDots(props.value)}
      onChange={props.onChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={mergeClasses(
        'font-sans h-14 px-4 block w-full border border-black rounded outline-black',
        props.error ? 'text-red border-red outline-red' : '',
        props.className,
      )}
    />
  );
}
