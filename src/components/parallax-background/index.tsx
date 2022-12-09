interface IParallaxBackgroundProps {
  className?: string;
  style?: any;
  backgroundImage: string;
}

export default function ParallaxBackground(props: IParallaxBackgroundProps) {
  return (
    <div
      className={`absolute w-full h-full opacity-30 bg-fixed bg-no-repeat bg-right-bottom bg-contain ${props.className}`}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        ...(props.style || {}),
      }}
    />
  );
}
