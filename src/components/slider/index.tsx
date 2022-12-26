import React, { TransitionEvent } from 'react';
import Chevron from '@/components/icons/chevron';
import { mergeClasses } from '@/helpers/layout';

interface ISliderProps {
  keyName: string;
  hidePrevSlide?: boolean;
  slides: React.ReactNode[];
  className?: string;
}

export default function Slider(props: ISliderProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = React.useState(1);
  const [isMoving, setIsMoving] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [slides, setSlides] = React.useState<React.ReactNode[]>([]);
  const [slideToHide, setSlideToHide] = React.useState(0);

  function onNextSlideClick() {
    if (!isMoving && !isAnimating) {
      setIsAnimating(true);
      setSlideToHide(activeSlide);
      setActiveSlide(activeSlide + 1);
    }
  }

  function onPreviousSlideClick() {
    if (!isMoving && !isAnimating) {
      setIsAnimating(true);
      setSlideToHide(activeSlide);
      setActiveSlide(activeSlide - 1);
    }
  }

  function onSliderTransitionEnd(event: TransitionEvent) {
    if (event.propertyName === 'transform') {
      if (activeSlide === slides.length - 1) {
        setIsMoving(true);
        setActiveSlide(1);
      }
      if (activeSlide === 0) {
        setIsMoving(true);
        setActiveSlide(slides.length - 2);
      }
      setIsAnimating(false);
    }
  }

  function cloneSlides() {
    setSlides([props.slides[props.slides.length - 1], ...props.slides, props.slides[0]]);
  }

  function cancelJumping() {
    if (activeSlide === 1) {
      setIsMoving(false);
    }
    if (activeSlide === slides.length - 2) {
      setIsMoving(false);
    }
  }

  React.useEffect(cloneSlides, [props.slides]);
  React.useEffect(cancelJumping, [activeSlide, slides.length]);

  return (
    <div className={mergeClasses('h-full relative', props.className)}>
      <div className="h-full relative overflow-hidden">
        <div
          ref={containerRef}
          onTransitionEnd={onSliderTransitionEnd}
          className={mergeClasses('h-full flex items-center', !isMoving ? 'duration-1000' : '')}
          style={{
            transform: `translateX(-${activeSlide * (containerRef.current?.clientWidth || 0)}px)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={`slide-${props.keyName}-${index}`}
              className={mergeClasses(
                'min-w-full h-full relative flex justify-center duration-500',
                props.hidePrevSlide && slideToHide === index ? 'opacity-0' : 'opacity-100',
              )}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div
        tabIndex={0}
        role="button"
        onClick={onPreviousSlideClick}
        onKeyDown={onPreviousSlideClick}
        className="p-8 w-fit fill-green opacity-30 hover:opacity-100 duration-300 absolute -left-64 top-1/2 -translate-y-1/2"
      >
        <Chevron className="-rotate-90 w-40 h-40" />
      </div>
      <div
        tabIndex={0}
        role="button"
        onClick={onNextSlideClick}
        onKeyDown={onNextSlideClick}
        className="p-8 w-fit fill-green opacity-30 hover:opacity-100 duration-300 absolute -right-64 top-1/2 -translate-y-1/2"
      >
        <Chevron className="rotate-90 w-40 h-40" />
      </div>
    </div>
  );
}
