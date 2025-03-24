import { Developer } from './Developer';

export function Developers() {
  return (
    <section className="p-8">
      <h1 className="text-5xl font-title font-bold text-center mb-8">Developers</h1>
      <div className="flex flex-wrap justify-center gap-5">
        <Developer username="gusCreator" trueName="Luis Gustavo Sequeiros" shortDescription="UNSA student" />
        <Developer username="cmestasz" trueName="Christian Raúl Mestas" shortDescription="UNSA student" />
        <Developer username="ynoacamino" trueName="Yenaro Joel Noa" shortDescription="UNSA student" />
        <Developer username="Alsnj20" trueName="Mariel Alisson Jara" shortDescription="UNSA student" />
        <Developer username="ALVARO-QUISPE-UNSA" trueName="Álvaro Raúl Quispe" shortDescription="UNSA student" />
        <Developer username="JhonatanDczel" trueName="Jhonatan David Arias" shortDescription="UNSA student" />
        <Developer username="rikich3" trueName="Ricardo Mauricio Chambilla" shortDescription="UNSA student" />
        <Developer username="Gocardi" trueName="Diego Alejandro Carbajal" shortDescription="UNSA student" />
      </div>
    </section>

  );
}
