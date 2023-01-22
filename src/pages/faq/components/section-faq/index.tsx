import Link from 'next/link';

import AnimateOnScroll from '@/components/animate-on-scroll';
import QuestionItem from '@/pages/faq/components/section-faq/components/question-item';

export default function SectionFAQ() {
  return (
    <div className="relative min-h-screen">
      <div className="container py-16 md:pt-32">
        <h1 className="text-6xl text-center font-serif text-black mb-12">Питання та відповіді</h1>
        <div className="flex flex-col justify-between px-5 lg:flex-row xl:px-24">
          <div className="mb-8 lg:mr-8 lg:mb-0">
            <h2 className="text-4xl text-center font-serif text-black mb-3">Загальні питання</h2>
            <AnimateOnScroll
              className="duration-500 mb-2"
              notScrolledClassName="w-0"
              scrolledClassName="w-36 mx-auto"
            >
              <div className="h-0.5 w-full bg-black" />
            </AnimateOnScroll>
            <ul>
              <QuestionItem
                question="Чи ефективна онлайн робота з психологом (коучем)?"
                answer="Онлайн консультація ані трохи не поступається офлайн зустрічі. Іноді є випадки коли офлайн консультація необхідна. Але загалом онлайн консультація дозволяє клієнту знаходитись в комфортному для нього місці, не витрачаючи час на дорогу. Також онлайн консультація дає клієнту відчуття безпеки."
              />
              <QuestionItem
                question="Коли треба звертатись за допомогою до психолога?"
                answerContent={
                  <>
                    <p className="font-sans text-black text-lg">
                      Звертатися до спеціаліста необхідно у разі емоційних, поведінкових або
                      когнітивних проблем.
                    </p>
                    <p className="font-sans text-black text-lg my-4">
                      7 причин звернутись до психолога:
                    </p>
                    <ul className="list-disc ml-3">
                      <li>
                        <span className="font-sans text-black text-md">
                          Якщо у вас підвищена тривожність і ви за все хвилюєтесь
                        </span>
                      </li>
                      <li>
                        <span className="font-sans text-black text-md">
                          У вас з'явились панічні атаки або напади агресії
                        </span>
                      </li>
                      <li>
                        <span className="font-sans text-black text-md">
                          У вас є фобія, яка заважає вам будувати своє життя
                        </span>
                      </li>
                      <li>
                        <span className="font-sans text-black text-md">
                          Ви маєте труднощі у стосунках з оточуючими (партнер, батьки, дитина,
                          друзі, колеги, тощо)
                        </span>
                      </li>
                      <li>
                        <span className="font-sans text-black text-md">
                          Ви пережили психотравмуючу подію
                        </span>
                      </li>
                      <li>
                        <span className="font-sans text-black text-md">
                          Ви відчуваєте хронічну втому або у вас є ознаки депресивного стану
                        </span>
                      </li>
                      <li>
                        <span className="font-sans text-black text-md">
                          Ви відчуваєте себе нещасною людиною і не розумієте як з цим впоратись
                        </span>
                      </li>
                    </ul>
                  </>
                }
              />
              <QuestionItem
                question="Чи може психолог виписати мені ліки?"
                answer="За законодавством України будь-яка медикаментозна допомога (включаючи антидеприсанти та транквілізатори) має надаватись лише людьми з вищою медичною освітою. Я не маю медичної освіти та не є - лікарем-психіатром тому не маю жодного права на це. Окрім цього медикаментозне втручання назначається в крайніх та тяжких станах - коли психотерапії вже недостатньо."
              />
              <QuestionItem
                question="Скільки часу потрібно для вирішення мого запиту?"
                answer="Це питання задають найчастіше. Відразу скажу, що немає того точного числа консультацій, яке можна назвати одразу. Іноді необхідно 3–5 зустрічей, іноді значно більше. Є такі випадки, коли взаємини психолога і клієнта тривають більше декількох років. Зазвичай, вже на перших двох зустрічах в процесі роботи з’ясовується, скільки приблизно зустрічей буде потрібно надалі. Безумовно, клієнт, завжди має право відмовитися і вдатися до найбільш термінових методів, які зможуть адаптувати його в проблемі, допомогти йому впоратися з цим завданням, але особистісні зміни не зможуть відбутися так швидко. Дуже часто клієнт, сформулювавши свій запит на першій зустрічі з психологом, в процесі видозмінює або зовсім змінює його. Зазвичай це відбувається, коли захоплений спільною роботою, клієнт все більше занурюється в аналіз власних переживань і життєвих ситуацій."
              />
              <QuestionItem
                question="Коли треба звертатись до коуча?"
                answer="Якщо Ви хочете покращити якість свого життя. У вас вже є сформована мрія або ціль, відчуваєте у собі потенціал, але не розумієте з чого почати, які кроки робити, як досягти результату."
              />
            </ul>
          </div>
          <div>
            <h2 className="text-4xl text-center font-serif text-black mb-3">
              Стосовно консультацій
            </h2>
            <AnimateOnScroll
              className="duration-500 mb-2"
              notScrolledClassName="w-0"
              scrolledClassName="w-36 mx-auto"
              timeout={400}
            >
              <div className="h-0.5 w-full bg-black" />
            </AnimateOnScroll>
            <ul>
              <QuestionItem
                question="Що потрібно для початку роботи зі мною?"
                answerContent={
                  <p className="font-sans text-black text-lg">
                    Потрібно залишити заявку на запис або зворотній зв’язок, або написати мені у
                    будь-який месенджер (див.{' '}
                    <Link className="text-green" href="/contacts">
                      «Контакти»
                    </Link>{' '}
                    та{' '}
                    <Link className="text-green" href="/schedule">
                      «Запис»
                    </Link>
                    ). Після цього я зв'язуюсь з Вами і ми разом визначаємо формат проведення
                    консультації (онлайн/офлайн) та час. Далі в назначений час Ви приходите на
                    консультацію або підключаєтесь по відео зв'язку.
                  </p>
                }
              />
              <QuestionItem
                question="Як проходить консультація?"
                answer="У погоджений час Ви або приходите до кабінету, обо підключаєтесь онлайн. Бажано, щоб під час консультації Вас ніхто не турбував. Так як це може вплинути на процес. В процес роботи над запитом входить спільний аналіз ситуації у різноманітних її гранях, аналіз поведінки, ціннісних і мотиваційних підстав, логіки, виявлення страхів, залежностей, так званих «сліпих плям» (тобто зон, які людина зазвичай не помічає), розумових автоматизмів, а також стереотипів поведінки. Під час роботи психолог (коуч) може давати досить важливий зворотній зв’язок, подібно до дзеркала, в яке ми дивимося, для того, щоб отримати інформацію про нас самих. Фахівець, зацікавлений дати клієнту якомога більше відомостей і корисних навичок, отже, треба налаштовуватися на активну роботу і активну участь."
              />
              <QuestionItem
                question="Чи гарантуєте Ви анонімність?"
                answer="Безперечно! Конфіденційність є одним з найголовниших пунктів етичного кодексу психолії та коучингу. Також ми з Вами складаємо договір про нерозголошення. Під час коуч сесій Ви можете навіть не надавати свої реальні дані, а вигадати псевдонім."
              />
              <QuestionItem
                question="В які дні тижня Ви працюєте?"
                answer="Я працюю кожен день (окрім свят) з 10:00 до 19:00."
              />
              <QuestionItem
                question="Чи можна провести консультацію по телефону?"
                answer="Я можу проконсультувати по телефону лише з деяких незначних питань. Повноцінна консультація по телефону не можлива, тому що такий вид консультації не є ефективним."
              />
              <QuestionItem
                question="Де проходить онлайн консультація"
                answer="Онлайн консультація проходить зі зручного для Вас місця, де є достатньо стійке інтернет з'єднання. Програми які я використовую - Zomm, Google Meet, Telegram, Viber."
              />
              <QuestionItem
                question="Оплата консультації"
                answer="Оплатити консультацію можна в зручний для Вас спосіб: перерахувати на банківську карту або сплатити готівкою. Оплата відбувається після завершення консультації."
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
