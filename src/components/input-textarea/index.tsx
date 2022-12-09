import { ChangeEvent } from 'react';

interface IInputTextAreaProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function InputTextArea(props: IInputTextAreaProps) {
  return (
    <textarea
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      rows={7}
      className="font-sans w-full block border border-black rounded resize-none outline-black p-4"
    />
  );
}
