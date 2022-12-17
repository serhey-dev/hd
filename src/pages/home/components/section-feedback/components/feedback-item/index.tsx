import Image from 'next/image';

interface IFeedbackItemProps {
  className?: string;
  name: string;
  text: string;
  photo: string;
}

export default function FeedbackItem(props: IFeedbackItemProps) {
  return (
    <li className={`flex flex-col items-center justify-center rounded-lg py-4 ${props.className}`}>
      <Image
        className="rounded-full border-black border"
        src={props.photo}
        alt="logo"
        width={100}
        height={100}
      />
      <div className="w-full px-8">
        <h3 className="text-3xl font-serif text-green mb-2 text-center mt-8">{props.name}</h3>
        <p className="font-sans italic text-black text-md text-center">{props.text}</p>
      </div>
    </li>
  );
}
