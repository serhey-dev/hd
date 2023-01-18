import Image from 'next/image';

import ButtonLink from '@/components/buttons/button-link';
import AnimateOnScroll from '@/components/animate-on-scroll';

export default function SectionReasons() {
  return (
    <div className="min-h-screen border-t border-black flex items-center justify-center pt-16 pb-20">
      <div className="container">
        <h1 className="text-6xl text-center font-serif text-black mb-10 lg:mb-16">
          Коли звертатись до психолога?
        </h1>
        <div className="flex flex-col items-center justify-center px-5 lg:flex-row md:px-0">
          <Image src="/images/photos/home-d.jpg" alt="Reasons" width={400} height={1} />
          <div className="w-full mt-8 xl:w-1/3 lg:w-1/2 lg:ml-16 lg:mt-0">
            <p className="font-sans italic text-black text-md">
              Звертатися до спеціаліста необхідно у разі емоційних, поведінкових або когнітивних
              проблем.
            </p>
            <p className="text-3xl font-serif text-black mt-4 mb-6 lg:mb-6">
              7 причин звернутись до психолога:
            </p>
            <ul className="list-disc">
              <li>
                <p className="font-sans italic text-black text-md">
                  Якщо у вас підвищена тревожність і ви за все хвилюєтесь
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  У вас з'явились панічні атаки або напади агресії
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  У вас є фобія, яка заважає вам будувати своє життя
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  Ви маєте труднощі у стосунках з оточуючими (партнер, батьки, дитина, друзі,
                  колеги, тощо)
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  Ви пережили психотравмуючу подію
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  Ви відчуваєте хронічну втому або у вас є ознаки депресивного стану
                </p>
              </li>
              <li>
                <p className="font-sans italic text-black text-md">
                  Ви відчуваєте себе нещасною людиною і не розумієте як з цим впоратись
                </p>
              </li>
            </ul>
            <AnimateOnScroll
              className="duration-500 my-8"
              notScrolledClassName="w-0"
              scrolledClassName="w-36"
            >
              <div className="h-0.5 w-full bg-black" />
            </AnimateOnScroll>
            <ButtonLink href="/schedule" text="Записатись" />
          </div>
        </div>
      </div>
    </div>
  );
}
