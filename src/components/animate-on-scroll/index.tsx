import React from 'react';
import { mergeClasses } from '@/helpers/layout';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  notScrolledClassName?: string;
  scrolledClassName?: string;
  bottomOffsetToAnimate?: number;
  timeout?: number;
}

export default function AnimateOnScroll(props: IButtonProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isScrolledTo, setIsScrolledTo] = React.useState(false);

  function scrollListener() {
    if (ref.current) {
      setIsScrolledTo(
        ref.current.getBoundingClientRect().top <
          window.innerHeight - (props.bottomOffsetToAnimate || 0),
      );
    }
  }

  React.useEffect(() => {
    if (props.timeout) {
      setTimeout(scrollListener, props.timeout);
    } else {
      scrollListener();
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={mergeClasses(
        isScrolledTo ? props.scrolledClassName : props.notScrolledClassName,
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
