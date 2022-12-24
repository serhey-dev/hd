import React from 'react';

export default function useWindowDimensions() {
  function getWindowDimensions() {
    if (typeof window !== 'undefined') {
      return {
        isLoaded: true,
        height: window.innerHeight,
        width: window.innerWidth,
      };
    }

    return {
      isLoaded: false,
      width: 0,
      height: 0,
    };
  }

  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
