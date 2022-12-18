import Image from 'next/image';
import AnimateOnScroll from '@/components/animate-on-scroll';

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
        <AnimateOnScroll
          className="duration-500"
          notScrolledClassName="w-0"
          scrolledClassName="w-36"
          bottomOffsetToAnimate={200}
        >
          <div className="h-0.5 w-full bg-black mb-4" />
        </AnimateOnScroll>
        {props.content}
      </div>
    </li>
  );
}
