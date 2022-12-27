import React from 'react';
import Circle from '@/components/icons/circle';
import AnimateOnScroll from '@/components/animate-on-scroll';
import { mergeClasses } from '@/helpers/layout';

interface IServiceItemProps {
  name: string;
  text: string;
  price: string;
  timeout?: number;
  className?: string;
  onClickDetails: () => void;
}

export default function ServiceItem(props: IServiceItemProps) {
  return (
    <li className={mergeClasses('mb-8 md:mb-12 w-full lg:w-1/2', props.className)}>
      <div className="mx-6 md:px-12">
        <h4 className="font-serif text-3xl text-black mb-4 text-center">{props.name}</h4>
        <AnimateOnScroll
          className="duration-500 mx-auto"
          notScrolledClassName="w-0"
          scrolledClassName="w-36"
          timeout={props.timeout}
          bottomOffsetToAnimate={200}
        >
          <div className="h-0.5 w-full bg-black" />
        </AnimateOnScroll>
        <p className="font-sans text-black text-lg pt-4 text-center mx-auto">
          {props.text}..
          <span tabIndex={0} onClick={props.onClickDetails} className="cursor-pointer text-green">
            {' '}
            читати далі
          </span>
        </p>
        <div className="relative w-48 mx-auto mt-4">
          <Circle className="fill-green" />
          <p className="absolute font-serif text-2xl text-green z-10 top-10 left-8">
            {props.price}
          </p>
        </div>
      </div>
    </li>
  );
}
