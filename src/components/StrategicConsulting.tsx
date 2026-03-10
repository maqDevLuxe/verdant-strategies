import FadeIn from "./FadeIn";

const services = [
  {
    num: "01",
    title: "Sustainable Sourcing Strategy",
    desc: "We design procurement frameworks that prioritize ethical suppliers, reduce carbon footprint, and ensure long-term supply resilience.",
  },
  {
    num: "02",
    title: "Circular Food Economy",
    desc: "From waste-to-value conversion to closed-loop packaging, we help brands transition to truly circular business models.",
  },
  {
    num: "03",
    title: "ESG Compliance & Reporting",
    desc: "Navigate complex regulatory landscapes with data-driven ESG strategies that satisfy stakeholders and regulators alike.",
  },
];

const StrategicConsulting = () => (
  <section className="section-padding bg-sage-dark">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <p className="label-text text-sage-light mb-6">What We Do</p>
        <h2 className="heading-lg text-cream mb-20">
          Strategic Sustainability<br />
          <em className="italic font-light">Consulting</em>
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-12 md:gap-8">
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.15}>
            <div className="group">
              <span className="label-text text-sage-light/50 block mb-4">{s.num}</span>
              <h3 className="font-display text-xl md:text-2xl text-cream mb-4 group-hover:text-sage-light transition-colors duration-500">
                {s.title}
              </h3>
              <p className="body-sm text-cream/60">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default StrategicConsulting;
