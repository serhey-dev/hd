import React from 'react';

import { mergeClasses } from '@/helpers/ui';
import Arrow from '@/components/slider/components/arrow';

interface ISliderProps {
  keyName: string;
  hidePrevSlide?: boolean;
  slides: React.ReactNode[];
  className?: string;
  withArrowsBackground?: boolean;
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

  function onSliderTransitionEnd(event: React.TransitionEvent) {
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

  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  function onTouchStart(event: React.TouchEvent) {
    setTouchStart(event.targetTouches[0].clientX);
  }

  function onTouchMove(event: React.TouchEvent) {
    setTouchEnd(event.targetTouches[0].clientX);
  }

  function onTouchEnd() {
    if (touchStart - touchEnd > 80) {
      onNextSlideClick();
    }
    if (touchStart - touchEnd < -80) {
      onPreviousSlideClick();
    }
  }

  return (
    <>
      <div className={mergeClasses('w-full h-full relative', props.className)}>
        <div
          className="h-full relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
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
        <Arrow
          withBackground={props.withArrowsBackground}
          onClick={onPreviousSlideClick}
          className="xl:-left-64 lg:-left-52 left-0"
          iconClassName="-rotate-180"
        />
        <Arrow
          withBackground={props.withArrowsBackground}
          onClick={onNextSlideClick}
          className="xl:-right-64 lg:-right-52 right-0"
        />
      </div>
      <div className="flex flex-row items-center justify-center mt-4 lg:mt-8">
        {props.slides.map((slide, index) => (
          <div
            key={`slide-indicator-${props.keyName}-${index}`}
            className={mergeClasses(
              'w-3 h-3 mx-1  rounded-full flex-none duration-300 md:w-4 md:h-4 md:mx-2',
              activeSlide - 1 === index ? 'bg-green' : 'bg-green-light',
            )}
          />
        ))}
      </div>
    </>
  );
}
