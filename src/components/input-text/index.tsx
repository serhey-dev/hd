import { ChangeEvent } from 'react';
import InputMask from 'react-input-mask';

interface IInputTextProps {
  name: string;
  mask?: string;
  value: string;
  placeholder?: string;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText(props: IInputTextProps) {
  function getStyles() {
    let styles =
      'font-sans h-14 px-4 block w-full border border-black rounded outline-black bg-white';

    if (props.error) {
      styles += ' text-red border-red outline-red';
    }

    return styles;
  }

  return props.mask ? (
    <InputMask
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      mask={props.mask}
      maskChar=" "
      className={getStyles()}
    />
  ) : (
    <input
      type="text"
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className={getStyles()}
    />
  );
}
