import React from 'react';

interface IInputTextAreaProps {
  id?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function InputTextArea(props: IInputTextAreaProps) {
  return (
    <textarea
      id={props.id || props.name}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      rows={7}
      className="font-sans w-full block border border-black rounded resize-none outline-black p-4"
    />
  );
}
