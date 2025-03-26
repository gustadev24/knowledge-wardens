'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const characters = [
  {
    color: '#ABA6E1',
    name: 'Personaje 1',
    description: 'Lorem ipsum dolor sit amet consectetur. Ligula vel amet nullam cursus. Tincidunt quam ipsum tortor dictum sed. Velit magna nisl dignissim ullamcorper nibh malesuada iaculis sed. Faucibus at vitae lacus magna. Urna massa nisl elementum magnis porttitor enim adipiscing habitant arcu.',
    image: '/images/characters/witch.webp',
  },
  {
    color: '#546671',
    name: 'Personaje 2',
    description: 'Nisi ut eu non enim quis blandit. Id tellus mattis nibh pellentesque accumsan urna. Sed gravida laoreet dignissim eu faucibus. Volutpat felis elit arcu tellus. Fermentum morbi bibendum sed placerat arcu congue lectus id netus.',
    image: '/images/characters/arquero.webp',
  },
  {
    color: '#DAAB7D',
    name: 'Personaje 3',
    description: 'Lorem ipsum dolor sit amet consectetur. Ligula vel amet nullam cursus. Tincidunt quam ipsum tortor dictum sed. Velit magna nisl dignissim ullamcorper nibh malesuada iaculis sed. Faucibus at vitae lacus magna. Urna massa nisl elementum magnis porttitor enim adipiscing habitant arcu.',
    image: '/images/characters/changuito.webp',
  },
  {
    color: '#A07866',
    name: 'Personaje 4',
    description: 'Nisi ut eu non enim quis blandit. Id tellus mattis nibh pellentesque accumsan urna. Sed gravida laoreet dignissim eu faucibus. Volutpat felis elit arcu tellus. Fermentum morbi bibendum sed placerat arcu congue lectus id netus.',
    image: '/images/characters/prince.webp',
  },
  {
    color: '#9F96A3',
    name: 'Personaje 5',
    description: 'Lorem ipsum dolor sit amet consectetur. Ligula vel amet nullam cursus. Tincidunt quam ipsum tortor dictum sed. Velit magna nisl digniss im ullamcorper nibh malesuada iaculis sed. Faucibus at vitae lacus magna. Urna massa nisl elementum magnis porttitor enim adipiscing habitant arcu.',
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
            className="overflow-x-scroll snap-mandatory snap-x grow basis-full flex"
          >
            {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
            {characters.map((character, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
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
