import { mergeClasses } from '@/helpers/ui';

interface IFeedbackItemProps {
  className?: string;
  name: string;
  text: string;
  image: React.ReactNode;
}

export default function FeedbackItem(props: IFeedbackItemProps) {
  return (
    <li
      className={mergeClasses(
        'flex flex-col items-center justify-center rounded-lg lg:p-0 sm:p-24 p-12',
        props.className,
      )}
    >
      {props.image}
      <div className="w-full px-3 md:px-8">
        <h3 className="text-3xl font-serif text-green mb-2 text-center mt-8 lg:text-4xl">
          {props.name}
        </h3>
        <p className="font-sans italic text-black text-center sm:text-md lg:text-lg">
          {props.text}
        </p>
      </div>
    </li>
  );
}
