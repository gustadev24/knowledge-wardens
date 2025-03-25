'use client';

import Image from 'next/image';
import { useState } from 'react';

const characters = [
  {
    color: '#ABA6E1',
    name: 'Personaje 1',
    description: 'Lorem ipsum dolor sit amet consectetur. Ligula vel amet nullam cursus. Tincidunt quam ipsum tortor dictum sed. Velit magna nisl dignissim ullamcorper nibh malesuada iaculis sed. Faucibus at vitae lacus magna. Urna massa nisl elementum magnis porttitor enim adipiscing habitant arcu.',
    image: '/images/characters/witch.png',
  },
  {
    color: '#546671',
    name: 'Personaje 2',
    description: 'Nisi ut eu non enim quis blandit. Id tellus mattis nibh pellentesque accumsan urna. Sed gravida laoreet dignissim eu faucibus. Volutpat felis elit arcu tellus. Fermentum morbi bibendum sed placerat arcu congue lectus id netus.',
    image: '/images/characters/arquero.png',
  },
  {
    color: '#DAAB7D',
    name: 'Personaje 3',
    description: 'Lorem ipsum dolor sit amet consectetur. Ligula vel amet nullam cursus. Tincidunt quam ipsum tortor dictum sed. Velit magna nisl dignissim ullamcorper nibh malesuada iaculis sed. Faucibus at vitae lacus magna. Urna massa nisl elementum magnis porttitor enim adipiscing habitant arcu.',
    image: '/images/characters/changuito.png',
  },
  {
    color: '#A07866',
    name: 'Personaje 4',
    description: 'Nisi ut eu non enim quis blandit. Id tellus mattis nibh pellentesque accumsan urna. Sed gravida laoreet dignissim eu faucibus. Volutpat felis elit arcu tellus. Fermentum morbi bibendum sed placerat arcu congue lectus id netus.',
    image: '/images/characters/prince.png',
  },
  {
    color: '#9F96A3',
    name: 'Personaje 5',
    description: 'Lorem ipsum dolor sit amet consectetur. Ligula vel amet nullam cursus. Tincidunt quam ipsum tortor dictum sed. Velit magna nisl digniss im ullamcorper nibh malesuada iaculis sed. Faucibus at vitae lacus magna. Urna massa nisl elementum magnis porttitor enim adipiscing habitant arcu.',
    image: '/images/characters/guardian.png',
  },
];

export function Characters() {
  const [currentCharacter, setCurrentCharacter] = useState(0);

  const handlePrevious = () => {
    setCurrentCharacter((prev) => (prev === 0 ? characters.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentCharacter((prev) => (prev === characters.length - 1 ? 0 : prev + 1));
  };

  const character = characters[currentCharacter];

  return (
    <section className="bg-btn-bg" id="characters">
      <section
        className="bg-cover bg-center
      min-h-[100vh] md:h-[100vh] w-full
      flex flex-col justify-evenly items-center md:gap-4
      md:p-[4%] text-black transition-colors duration-500"
        style={{ backgroundColor: character.color }}
      >
        <h1 className="text-3xl md:text-5xl font-title font-bold">Personajes</h1>

        <div className="flex items-center justify-between
        md:gap-10 w-[90vw]"
        >

          <button
            type="button"
            onClick={handlePrevious}
            className="text-xl md:text-4xl font-text text-bold text-center p-2 pulse"
          >
            {'< '}
          </button>

          <div className="relative md:max-w-[50vw]
          overflow-hidden max-w-[90vw]
          "
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentCharacter * 100}%)`,
              }}
            >
              {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
              {characters.map((character, index) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className="min-w-full flex flex-col items-center"
                >
                  <div className="md:p-4 bg-transparent">
                    <h2 className="text-2xl font-bold text-center">
                      {character.name}
                    </h2>
                    <p className="md:text-xl font-text text-center text-black w-[50vw]">
                      {character.description}
                    </p>
                  </div>
                  <div className="grid place-content-center">
                    <Image
                      src={character.image}
                      alt={character.name}
                      width={150}
                      height={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="text-4xl font-text text-bold text-center p-2
            pulse
            "
          >
            {'>'}
          </button>
        </div>
      </section>
    </section>
  );
}
