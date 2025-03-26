import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-footer
    bg-cover
    flex
    flex-col justify-center items-center
    md:flex-row md:justify-between md:items-center gap-4 p-10"
    >
      <div className="flex flex-col
      items-center md:items-start
      justify-center gap-8"
      >

        <Link
          href="/"
          className="text-white
            text-2xl
            md:text-3xl font-bold font-title pulse
          hover:text-gray-400"
        >
          {'> '}
          Inicio
        </Link>
        <Link
          href="/#about"
          className="text-white text-2xl
        md:text-3xl font-bold font-title pulse
    hover:text-gray-400"
        >
          {'> '}
          Sobre el proyecto
        </Link>
        <Link
          href="/#characters"
          className="text-white text-2xl
        md:text-3xl font-bold font-title pulse
    hover:text-gray-400"
        >
          {'> '}
          Personajes
        </Link>
      </div>

      <div>
        <a
          href="https://github.com/gusCreator/knowledge_wardens"
          className="flex flex-col
        text-2xl font-bold font-title
        items-center gap-1 text-white pulse
        hover:text-gray-400
        "
        >
          <FaGithub size={100} />
          {' '}
          Visit repository
        </a>
      </div>

      <div>
        <Image
          src="/images/characters/changuito.webp"
          alt="Witch"
          width={200}
          height={200}
        />

      </div>

    </footer>
  );
}
