import { Session } from 'next-auth';
import { Developers } from './Developers';
import { Header } from './Hero';
import { Technologies } from './Technologies';
import { Footer } from './Footer';
import { About } from './About';
import { Characters } from './Characters';
import Auth from './Auth';
import MouseParticlesClient from '../../particles/MouseParticlesClient';

type HomeProps = {
  session?: Session | null;
};

export function Home({ session }: HomeProps) {
  return (
    <>
      <Header session={session} />
      <Auth session={session} />
      <main>
        <About />
        <Characters />
        <Developers />
        <Technologies />
      </main>
      <Footer />
      <MouseParticlesClient />
    </>
  );
}
