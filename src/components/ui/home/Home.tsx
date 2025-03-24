import { Session } from 'next-auth';
import { Developers } from './Developers';
import { Header } from './Header';
import { Technologies } from './Technologies';
import { Footer } from './Footer';
import { About } from './About';
import { Characters } from './Characters';

type HomeProps = {
  session?: Session | null;
};

export function Home({ session }: HomeProps) {
  return (
    <>
      <Header session={session} />
      <main>
        {/* Algunas imágenes del juego */}
        <About />
        <Characters />
        <Developers />
        <Technologies />
      </main>
      <Footer />
    </>
  );
}
