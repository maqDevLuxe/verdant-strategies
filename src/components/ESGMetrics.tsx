import FadeIn from "./FadeIn";

const metrics = [
  { label: "Carbon Reduction", value: "47%", desc: "Average carbon footprint reduction across client portfolios" },
  { label: "Water Saved", value: "3.2B", unit: "Liters", desc: "Total water conservation in the last fiscal year" },
  { label: "Ethical Suppliers", value: "1,200+", desc: "Certified ethical suppliers in our global network" },
  { label: "ESG Score Improvement", value: "32%", desc: "Average ESG rating improvement within 12 months" },
];

const ESGMetrics = () => (
  <section className="section-padding bg-cream-dark">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <p className="label-text text-primary mb-6">Impact</p>
        <h2 className="heading-lg text-foreground mb-20">
          ESG Impact<br /><em className="italic">Metrics</em>
        </h2>
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {metrics.map((m, i) => (
          <FadeIn key={m.label} delay={i * 0.1}>
            <div className="border-t border-primary/20 pt-8">
              <p className="font-display text-4xl md:text-5xl text-primary mb-1">
                {m.value}
                {m.unit && <span className="text-lg ml-1">{m.unit}</span>}
              </p>
              <p className="label-text text-foreground mb-3">{m.label}</p>
              <p className="body-sm text-muted-foreground">{m.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ESGMetrics;
