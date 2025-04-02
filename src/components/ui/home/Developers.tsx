import { Developer } from './Developer';

const developers = [
  {
    username: 'christianmz565',
    trueName: 'Christian Raúl Mestas',
    shortDescription: 'Estudiante UNSA',
  },
  {
    username: 'gustadev24',
    trueName: 'Luis Gustavo Sequeiros',
    shortDescription: 'Estudiante UNSA',
  },
  {
    username: 'ynoacamino',
    trueName: 'Yenaro Joel Noa',
    shortDescription: 'Estudiante UNSA',
  },
  {
    username: 'Alsnj20',
    trueName: 'Mariel Alisson Jara',
    shortDescription: 'Estudiante UNSA',
  },
  {
    username: 'JhonatanDczel',
    trueName: 'Jhonatan David Arias',
    shortDescription: 'Estudiante UNSA',
  },
  {
    username: 'rikich3',
    trueName: 'Ricardo Mauricio Chambilla',
    shortDescription: 'Estudiante UNSA',
  },
  {
    username: 'Gocardi',
    trueName: 'Diego Alejandro Carbajal',
    shortDescription: 'Estudiante UNSA',
  },
];

export function Developers() {
  return (
    <section className="p-8 max-w-full overflow-hidden flex flex-col gap-10">
      <h1 className="text-3xl md:text-5xl font-title font-bold text-center mb-8">Desarrolladores</h1>
      <div className="flex flex-wrap justify-center gap-12 ">
        {
          developers.map((developer) => (
            <Developer key={developer.username} {...developer} />
          ))
        }

      </div>
    </section>

  );
}
