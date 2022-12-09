import Image from 'next/image';

interface IMethodItemProps {
  name: string;
  content?: React.ReactNode;
  image: string;
  className?: string;
}

export default function MethodItem(props: IMethodItemProps) {
  return (
    <li className={`flex flex-row items-center w-2/3 mb-10 ${props.className}`}>
      <Image src={props.image} alt="logo" width={300} height={300} />
      <div className="p-6">
        <h4 className="text-4xl font-serif text-black mb-4">{props.name}</h4>
        {props.content}
      </div>
    </li>
  );
}
