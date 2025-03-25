import Image from 'next/image';

export function About() {
  return (
    <section className="bg-btn-bg" id="about">
      <section className="bg-accent bg-cover bg-center
    min-h-[100vh] md:h-[100vh] w-full container
    flex flex-col justify-evenly items-center gap-4
    p-[4%] text-black"
      >
        <h1 className="text-3xl md:text-5xl font-title font-bold text-center">Sobre el proyecto</h1>

        <div className=" md:p-10 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 place-content-center">

          <div className="bg-btn-bg border-yellow-500 border-8 md:p-4">
            <p className="text-2xl font-text text-white">
              El poderoso hechicero ha poseído a tu amo y solo hay una manera de derrotarlo. Debes superar su antiguo conocimiento. Una leyenda es tu esperanza; busca a los guardianes del conocimiento y alcanza la victoria.
            </p>
          </div>

          <div className="grid place-content-center">
            <Image
              src="/images/about.png"
              alt="About"
              width={350}
              height={100}
              className="w-200 md:w-[350]"
            />

          </div>
        </div>

      </section>
    </section>

  );
}
