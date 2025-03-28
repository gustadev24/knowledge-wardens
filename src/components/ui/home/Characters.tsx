'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const characters = [
  {
    color: '#ABA6E1',
    name: 'La Hechicera - Guardiana de los Secretos Perdidos',
    description: 'En los confines del fortín, la Hechicera protege los textos más antiguos jamás escritos. Su magia fluye desde el conocimiento ancestral y no del combate, y su misión es enseñar al discípulo a romper los sellos del poder arcano que mantienen cautiva la mente de su maestro.',
    image: '/images/characters/witch.webp',
  },
  {
    color: '#546671',
    name: 'El Arquero Bestial - Guardián del Instinto y la Precisión',
    description: 'Nacido de la unión de lo salvaje y lo humano, este arquero, mitad bestia, enseña la importancia del equilibrio entre mente y cuerpo. Con su ojo agudo y sentidos inigualables, instruye al discípulo en la percepción y velocidad necesarias para enfrentar al mago poseído.',
    image: '/images/characters/arquero.webp',
  },
  {
    color: '#DAAB7D',
    name: 'El Changuito Travieso - Guardián de la Astucia',
    description: 'Representa el ingenio y la improvisación. Con un estilo poco convencional, el Changuito Travieso obliga a su aprendiz a pensar fuera de lo común, demostrando que en ocasiones, la astucia es la clave para superar a un enemigo que conoce todas las reglas.',
    image: '/images/characters/changuito.webp',
  },
  {
    color: '#A07866',
    name: 'El Príncipe Errante - Guardián de la Voluntad',
    description: 'Habiendo dejado su trono para comprender que la verdadera grandeza reside en la determinación, este príncipe errante fortalece la voluntad del discípulo. Su enseñanza es crucial, pues la batalla contra el mago poseído exige un espíritu inquebrantable, tanto física como mentalmente.',
    image: '/images/characters/prince.webp',
  },
  {
    color: '#9F96A3',
    name: 'El Guardián Ancestral - Guardián del Tiempo y la Paciencia',
    description: 'Forjado en la era de los titanes, el Guardián Ancestral ha visto a incontables discípulos venir y fallar. Su lección más dura es la paciencia, demostrando que actuar en el momento preciso es esencial para derrotar al mago poseído.',
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
    carouselContainer.current?.scrollTo({
      left: carouselContainer.current.offsetWidth * currentCharacter,
      behavior: 'smooth',
    });
  }, [currentCharacter, carouselContainer]);

  const character = characters[currentCharacter];

  return (
    <section className="bg-btn-bg" id="characters">
      <section
        className="bg-cover bg-center w-full
      flex flex-col justify-evenly items-center md:gap-4
      md:p-[4%] text-black transition-colors duration-500"
        style={{ backgroundColor: character.color }}
      >
        <h1 className="text-3xl md:text-5xl font-title font-bold">Personajes</h1>

        <div className="flex items-center justify-between w-full
        md:gap-10 min-h-96"
        >

          <button
            type="button"
            onClick={handlePrevious}
            className="text-xl md:text-4xl font-text text-bold text-center p-2 pulse grow-0 basis-10"
          >
            {'< '}
          </button>

          <div
            ref={carouselContainer}
            className="overflow-x-scroll items-center no-scrollbar snap-mandatory snap-x grow basis-full flex"
          >
            {characters.map((character, index) => (
              <div
                key={index}
                className="flex flex-col xl:flex-row snap-center items-center size-full shrink-0 px-6 gap-x-16 gap-y-6 space-between"
              >
                <div className="md:p-4 bg-transparent flex flex-col gap-6">
                  <h2 className="text-2xl font-bold">
                    {character.name}
                  </h2>
                  <p className="md:text-xl font-text text-pretty text-black ">
                    {character.description}
                  </p>
                </div>
                <Image
                  src={character.image}
                  alt={character.name}
                  width={150}
                  height={100}
                  className="xl:grow shrink-0 xl:basis-56"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="text-4xl font-text text-bold text-center p-2
            pulse grow-0"
          >
            {'>'}
          </button>
        </div>
      </section>
    </section>
  );
}
