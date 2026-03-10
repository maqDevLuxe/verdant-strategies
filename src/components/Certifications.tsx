import FadeIn from "./FadeIn";

const certs = [
  "B Corp Certified",
  "ISO 14001",
  "Fair Trade USA",
  "USDA Organic",
  "Rainforest Alliance",
  "Carbon Trust Standard",
];

const Certifications = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto text-center">
      <FadeIn>
        <p className="label-text text-primary mb-6">Compliance</p>
        <h2 className="heading-lg text-foreground mb-6">
          Certification<br /><em className="italic">Compliance</em>
        </h2>
        <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          We guide brands through the certification landscape, ensuring compliance with the most rigorous global standards.
        </p>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {certs.map((c, i) => (
          <FadeIn key={c} delay={i * 0.08}>
            <div className="border border-border rounded-sm p-6 hover:border-primary/40 hover:bg-card transition-all duration-500">
              <p className="font-display text-sm text-foreground">{c}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
