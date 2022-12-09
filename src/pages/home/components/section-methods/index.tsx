import MethodItem from '@/pages/home/components/section-methods/components/method-item';

export default function SectionMethods() {
  return (
    <div className="relative overflow-hidden min-h-screen border-t border-black py-16">
      <div className="container">
        <h1 className="text-6xl mb-6 text-center font-serif text-black mb-12">Мої методики</h1>
        <ul className="flex flex-col items-center w-full">
          <MethodItem
            name="Методика 1"
            text="Ця методика класна бо, Ця методика класна бо, Ця методика класна бо, Ця методика класна бо.\nЦя методика класна бо, Ця методика класна бо, Ця методика класна бо, Ця методика класна бо. етодика класна бо, Ця методика класна бо.етодика класна бо, Ця методика класна бо.етодика класна бо, Ця методика класна бо.етодика класна бо, Ця методика класна бо.етодика класна бо, Ця методика класна бо.етодика класна бо, Ця методика класна бо."
            image="/images/2.jpeg"
          />
          <MethodItem
            name="Методика 2"
            text="Ця методика класна бо, Ця методика класна бо, Ц, Ця методика класна бо, Ця методика класна бо."
            image="/images/2.jpeg"
            className="flex-row-reverse"
          />
          <MethodItem
            name="Методика 3"
            text="Ця методика класна бо, Ця методика класна бо, Ця методика класна бо, Ця методика класна бо.\nЦя методика класна бо, Ця методика класна бо, Ця методика класна бо, Ця методика класна бо."
            image="/images/2.jpeg"
          />
          <MethodItem
            name="Методика 4"
            text="Ця методика клаа класна бо, Ця методика класна бо, Ця методика класна бо."
            image="/images/2.jpeg"
            className="flex-row-reverse"
          />
        </ul>
      </div>
    </div>
  );
}
