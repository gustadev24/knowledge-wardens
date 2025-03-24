import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-footer-mobile md:bg-footer-desktop
    bg-cover h-[max-content]
    width-[100vw] md:h-[350px] bg-center
    flex
    flex-col justify-center items-center
    md:flex-row md:justify-between md:items-center gap-4
    p-[5%]"
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
          Home
        </Link>
        <Link
          href="/#about"
          className="text-white text-2xl
        md:text-3xl font-bold font-title pulse
    hover:text-gray-400"
        >
          {'> '}
          More Info
        </Link>
        <Link
          href="/#characters"
          className="text-white text-2xl
        md:text-3xl font-bold font-title pulse
    hover:text-gray-400"
        >
          {'> '}
          Characters
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
          src="/images/characters/changuito.png"
          alt="Witch"
          width={250}
          height={100}
        />

      </div>

    </footer>
  );
}
