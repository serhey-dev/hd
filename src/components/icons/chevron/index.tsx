interface IChevronProps {
  className?: string;
}

export default function Chevron(props: IChevronProps) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fillRule="evenodd"
    >
      <path d="M18.78 15.28a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 101.06 1.06L12 9.56l5.72 5.72a.75.75 0 001.06 0z" />
    </svg>
  );
}
