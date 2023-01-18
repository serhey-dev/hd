import { mergeClasses, isAndroid, isIPhone } from '@/helpers/ui';

interface IInputDateProps {
  name: string;
  value: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
  max?: string;
  min?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputDate(props: IInputDateProps) {
  return (
    <input
      max={props.max}
      min={props.min}
      name={props.name}
      placeholder={props.placeholder}
      type="date"
      value={props.value}
      onChange={props.onChange}
      className={mergeClasses(
        'font-sans h-14 bg-white leading-[3.25rem] px-4 block border border-black rounded outline-black flex-1',
        props.error ? 'text-red border-red outline-red' : '',
        isAndroid() ? 'pt-[18px]' : '',
        isIPhone() ? 'leading-[3.6rem]' : '',
        props.className,
      )}
    />
  );
}
