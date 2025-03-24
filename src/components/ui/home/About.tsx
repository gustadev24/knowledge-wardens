import Image from 'next/image';

export function About() {
  return (
    <section className="bg-btn-bg" id="about">
      <section className="bg-accent bg-cover bg-center
    min-h-[100vh] md:h-[100vh] w-full container
    flex flex-col justify-evenly items-center gap-4
    p-[4%] text-black"
      >
        <h1 className="text-4xl md:text-6xl font-title font-bold text-center">Sobre el proyecto</h1>

        <div className=" md:p-10 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 place-content-center">

          <div className="bg-btn-bg border-yellow-500 border-8 md:p-4">
            <p className="text-2xl font-text text-center text-white">
              Lorem ipsum dolor sit amet consectetur. Ligula vel amet nullam cursus. Tincidunt quam ipsum tortor dictum sed. Velit magna nisl dignissim ullamcorper nibh malesuada iaculis sed. Faucibus at vitae lacus magna. Urna massa nisl elementum magnis porttitor enim adipiscing habitant arcu.
              Nisi ut eu non enim quis blandit. Id tellus mattis nibh pellentesque accumsan urna. Sed gravida laoreet dignissim eu faucibus. Volutpat felis elit arcu tellus. Fermentum morbi bibendum sed placerat arcu congue lectus id netus.
            </p>
          </div>

          <div className="grid place-content-center">
            <Image
              src="/images/about.png"
              alt="About"
              width={350}
              height={100}
              className="w-200 md:w-[350]"
            />

          </div>
        </div>

      </section>
    </section>

  );
}
