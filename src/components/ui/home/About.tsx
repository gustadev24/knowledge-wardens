import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="bg-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">
          Sobre el Proyecto
        </h2>
        {/* Card unificado un poco más pequeño */}
        <div className="bg-gray-700 rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
          {/* Imagen sin borde excesivo */}
          <div className="md:w-1/2">
            <Image
              src="/images/about.png"
              alt="Sobre el proyecto"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Contenido */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
              El poderoso hechicero ha poseído a tu amo y solo hay una manera de derrotarlo.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Debes superar su antiguo conocimiento. Una leyenda es tu esperanza; busca a los guardianes del conocimiento y alcanza la victoria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
