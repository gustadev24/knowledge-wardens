import { Developer } from './Developer';

export function Developers() {
  return (
    <section className="p-8">
      <h1 className="text-5xl font-title font-bold text-center mb-8">Desarrolladores</h1>
      <div className="flex flex-wrap justify-center gap-5">
        <Developer username="christianmz565" trueName="Christian Raúl Mestas" shortDescription="Estudiante UNSA" />
        <Developer username="gustadev24" trueName="Luis Gustavo Sequeiros" shortDescription="Estudiante UNSA" />
        <Developer username="ynoacamino" trueName="Yenaro Joel Noa" shortDescription="Estudiante UNSA" />
        <Developer username="Alsnj20" trueName="Mariel Alisson Jara" shortDescription="Estudiante UNSA" />
        <Developer username="JhonatanDczel" trueName="Jhonatan David Arias" shortDescription="Estudiante UNSA" />
        <Developer username="rikich3" trueName="Ricardo Mauricio Chambilla" shortDescription="Estudiante UNSA" />
        <Developer username="Gocardi" trueName="Diego Alejandro Carbajal" shortDescription="Estudiante UNSA" />
      </div>
    </section>

  );
}
