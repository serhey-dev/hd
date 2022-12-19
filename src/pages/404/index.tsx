import ButtonLink from '@/components/button-link';
import Head from '@/components/layout/head';

export default function Page404() {
  return (
    <main>
      <Head title="Page404" description="Page404" />
      <div className="h-screen">
        <div className="container h-full flex justify-center items-center">
          <div>
            <h1 className="text-6xl mb-6 text-center font-serif text-black mb-6">
              Нажаль такої сторінки не існує :(
            </h1>
            <ButtonLink href="/" text="Повернутись на головну" className="mx-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}
