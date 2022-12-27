import React from 'react';
import { mergeClasses } from '@/helpers/ui';

interface IInputDateProps {
  name: string;
  value: string;
  placeholder?: string;
  className?: string;
  timeListName: string;
  error?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputDate(props: IInputDateProps) {
  return (
    <>
      <input
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        list={props.timeListName}
        min="10:00"
        max="19:00"
        type="time"
        className={mergeClasses(
          'font-sans h-14 px-4 block w-full border border-black rounded outline-black',
          props.error ? 'text-red border-red outline-red' : '',
          props.className,
        )}
      />
      <datalist id={props.timeListName}>
        <option value="10:00" />
        <option value="11:00" />
        <option value="12:00" />
        <option value="13:00" />
        <option value="14:00" />
        <option value="15:00" />
        <option value="16:00" />
        <option value="17:00" />
        <option value="18:00" />
        <option value="19:00" />
      </datalist>
    </>
  );
}
