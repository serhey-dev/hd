import React from 'react';
import Circle from '@/components/icons/circle';
import AnimateOnScroll from '@/components/animate-on-scroll';

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
    <li className={`mb-12 w-1/2 ${props.className}`}>
      <div className="mx-6 px-12">
        <h4 className="font-serif text-3xl text-black mb-4 text-center py-2 pb-0">{props.name}</h4>
        <AnimateOnScroll
          className="duration-500 mx-auto"
          notScrolledClassName="w-0"
          scrolledClassName="w-36"
          timeout={props.timeout}
        >
          <div className="h-0.5 w-full bg-black mx-auto" />
        </AnimateOnScroll>
        <p className="font-sans text-black text-lg pt-4 text-center mx-auto">
          {props.text}..
          <span onClick={props.onClickDetails} className="cursor-pointer text-green">
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

// export default function ServiceItem(props: IServiceItemProps) {
//   return (
//     <li className={`mb-12 mx-8 w-1/2 ${props.className}`}>
//       <div className="h-full mx-6 px-12 flex flex-col justify-between">
//         <div className="flex flex-1 flex-col">
//           <div className="flex-0">
//             <h4 className="font-serif text-3xl text-black mb-4 text-center py-2 pb-0">
//               {props.name}
//             </h4>
//             <AnimateOnScroll
//               className="duration-500 mx-auto"
//               notScrolledClassName="w-0"
//               scrolledClassName="w-36"
//               timeout={props.timeout}
//             >
//               <div className="h-0.5 w-full bg-black mx-auto" />
//             </AnimateOnScroll>
//           </div>

//           <div className="flex flex-col justify-center flex-1">
//             <p className="font-sans text-black text-lg text-center py-4 mx-auto">{props.text}</p>
//           </div>
//         </div>

//         <div className="relative w-48 mx-auto">
//           <Circle className="fill-green" />
//           <p className="absolute font-serif text-2xl text-green z-10 top-10 left-8">
//             {props.price}
//           </p>
//         </div>
//       </div>
//     </li>
//   );
// }
