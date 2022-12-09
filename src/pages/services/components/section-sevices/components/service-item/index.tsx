import React from 'react';
import Circle from '@/components/icons/circle';
import Button from '@/components/button';

interface IServiceItemProps {
  name: string;
  text: string;
  price: string;
  className?: string;
}

export default function ServiceItem(props: IServiceItemProps) {
  // <li className="w-1/2 flex flex-wrap mb-6">
  // <div className={`p-6 ${props.className}`}>
  return (
    <li className={`w-1/3 flex justify-center mb-12 ${props.className}`}>
      <div className="px-6">
        <h4 className="font-serif text-3xl text-black mb-4 text-center">{props.name}</h4>
        <div className="h-px w-36 bg-black mx-auto" />
        <p className="font-sans text-black text-lg pt-4 text-center">{props.text}</p>
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
