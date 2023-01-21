import Image from 'next/image';

import { mergeClasses } from '@/helpers/ui';
import AnimateOnScroll from '@/components/animate-on-scroll';

interface IMethodItemProps {
  name: string;
  content?: React.ReactNode;
  image: React.ReactNode;
  className?: string;
}

export default function MethodItem(props: IMethodItemProps) {
  return (
    <li
      className={mergeClasses(
        'flex flex-col items-center mb-10 px-5 xl:w-2/3 md:p:0',
        props.className,
      )}
    >
      {props.image}
      <div className="mx-0 mt-6 md:mx-6 md:mt-0">
        <h3 className="text-4xl font-serif text-black mb-4">{props.name}</h3>
        <AnimateOnScroll
          className="duration-500 mb-4"
          notScrolledClassName="w-0"
          scrolledClassName="w-36"
          bottomOffsetToAnimate={200}
        >
          <div className="h-0.5 w-full bg-black" />
        </AnimateOnScroll>
        {props.content}
      </div>
    </li>
  );
}
