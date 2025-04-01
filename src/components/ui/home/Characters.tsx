'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const characters = [
  {
    color: '#485067',
    name: 'La Hechicera - Guardiana de los Secretos Perdidos',
    description:
      'En los confines del fortín, la Hechicera protege los textos más antiguos jamás escritos. Su magia fluye desde el conocimiento ancestral y no del combate, y su misión es enseñar al discípulo a romper los sellos del poder arcano que mantienen cautiva la mente de su maestro.',
    image: '/images/characters/witch.webp',
  },
  {
    color: '#66576f',
    name: 'El Arquero Bestial - Guardián del Instinto y la Precisión',
    description:
      'Nacido de la unión de lo salvaje y lo humano, este arquero, mitad bestia, enseña la importancia del equilibrio entre mente y cuerpo. Con su ojo agudo y sentidos inigualables, instruye al discípulo en la percepción y velocidad necesarias para enfrentar al mago poseído.',
    image: '/images/characters/arquero.webp',
  },
  {
    color: '#815e70',
    name: 'El Changuito Travieso - Guardián de la Astucia',
    description:
      'Representa el ingenio y la improvisación. Con un estilo poco convencional, el Changuito Travieso obliga a su aprendiz a pensar fuera de lo común, demostrando que en ocasiones, la astucia es la clave para superar a un enemigo que conoce todas las reglas.',
    image: '/images/characters/changuito.webp',
  },
  {
    color: '#96696b',
    name: 'El Príncipe Errante - Guardián de la Voluntad',
    description:
      'Habiendo dejado su trono para comprender que la verdadera grandeza reside en la determinación, este príncipe errante fortalece la voluntad del discípulo. Su enseñanza es crucial, pues la batalla contra el mago poseído exige un espíritu inquebrantable, tanto física como mentalmente.',
    image: '/images/characters/prince.webp',
  },
  {
    color: '#a07866',
    name: 'El Guardián Ancestral - Guardián del Tiempo y la Paciencia',
    description:
      'Forjado en la era de los titanes, el Guardián Ancestral ha visto a incontables discípulos venir y fallar. Su lección más dura es la paciencia, demostrando que actuar en el momento preciso es esencial para derrotar al mago poseído.',
    image: '/images/characters/guardian.webp',
  },
];

export function Characters() {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const carouselContainer = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentCharacter((prev) => (prev === 0 ? characters.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentCharacter((prev) => (prev === characters.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (carouselContainer.current) {
      carouselContainer.current.scrollTo({
        left: carouselContainer.current.offsetWidth * currentCharacter,
        behavior: 'smooth',
      });
    }
  }, [currentCharacter]);

  return (
    <section id="characters" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">
          Personajes
        </h1>

        <div className="relative flex items-center">
          <button
            type="button"
            onClick={handlePrevious}
            className="absolute left-0 z-10 text-white text-3xl font-bold 
                       bg-gray-700 rounded-full h-12 w-12 flex items-center justify-center
                       hover:bg-gray-600 transition-all"
            aria-label="Anterior"
          >
            &lt;
          </button>

          <div
            ref={carouselContainer}
            className="overflow-x-scroll no-scrollbar snap-x snap-mandatory w-full flex"
          >
            {characters.map((character, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-full flex items-center justify-center"
              >
                <div
                  className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden 
                             w-11/12 md:w-10/12 border-l-8"
                  style={{ borderColor: character.color }}
                >
                  <div className="md:w-3/5 p-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                      {character.name}
                    </h2>
                    <p className="pr-8 text-base md:text-lg text-gray-700 leading-relaxed">
                      {character.description}
                    </p>
                  </div>

                  <div className="md:w-2/5 flex items-center justify-center p-4">
                    <Image
                      src={character.image}
                      alt={character.name}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-0 z-10 text-white text-3xl font-bold 
                       bg-gray-700 rounded-full h-12 w-12 flex items-center justify-center
                       hover:bg-gray-600 transition-all"
            aria-label="Siguiente"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
