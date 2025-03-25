import { Metadata } from 'next';

const metadataConfig: Metadata = {
  title: 'Knowledge Wardens',
  description: 'Página web oficial del proyecto Knowledge Wardens.',
  authors: [
    { name: 'Christian Raúl Mestas Zegarra', url: 'https://github.com/christianmz565' },
    { name: 'Yenaro Joel Noa Camino', url: 'https://github.com/ynoacamino' },
    { name: 'Luis Gustavo Sequeiros Condori', url: 'https://github.com/gustadev24' },
    { name: 'Mariel Alisson Jara', url: 'https://github.com/Alsnj20' },
    { name: 'Jhonatan David Arias', url: 'https://github.com/JhonatanDczel' },
    { name: 'Ricardo Mauricio Chambilla Perca', url: 'https://github.com/rikich3' },
    { name: 'Diego Alejandro Carbajal', url: 'https://github.com/Gocardi' },
  ],
  creator: 'Yenaro Joel Noa Camino, Luis Gustavo Sequeiros Condori, Christian Raúl Mestas Zegarra, Mariel Alisson Jara, Jhonatan David Arias, Ricardo Mauricio Chambilla Perca, Diego Alejandro Carbajal',
  publisher: 'gustadev24',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://knowledge-wardens.vercel.app/',
    title: 'Knowledge Wardens',
    description: 'Página web oficial del proyecto Knowledge Wardens.',
    siteName: 'Knowledge Wardens',
  },
  metadataBase: new URL('https://knowledge-wardens.vercel.app/'),
};

export default metadataConfig;
