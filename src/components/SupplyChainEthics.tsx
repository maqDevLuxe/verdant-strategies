import FadeIn from "./FadeIn";

const pillars = [
  { title: "Fair Trade Sourcing", desc: "Ensuring fair wages and safe working conditions throughout the supply chain." },
  { title: "Traceability", desc: "End-to-end product traceability from seed to shelf using blockchain verification." },
  { title: "Biodiversity Protection", desc: "Supply chain practices that protect and restore local ecosystems." },
];

const SupplyChainEthics = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn>
          <p className="label-text text-primary mb-6">Ethics</p>
          <h2 className="heading-lg text-foreground mb-8">
            Supply Chain<br /><em className="italic">Ethics</em>
          </h2>
          <p className="body-lg text-muted-foreground">
            Ethical supply chains aren't just good practice — they're a competitive advantage. We help you build trust with consumers and investors alike.
          </p>
        </FadeIn>
        <div className="space-y-10">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.15}>
              <div className="border-l-2 border-primary/30 pl-8 hover:border-primary transition-colors duration-500">
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">{p.title}</h3>
                <p className="body-sm text-muted-foreground">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SupplyChainEthics;
