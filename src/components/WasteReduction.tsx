import FadeIn from "./FadeIn";

const steps = [
  { step: "Audit", desc: "Comprehensive waste stream analysis across your entire supply chain." },
  { step: "Strategize", desc: "Custom reduction blueprints with measurable KPIs and timelines." },
  { step: "Implement", desc: "Hands-on deployment with your operations teams globally." },
  { step: "Measure", desc: "Real-time tracking dashboards and quarterly impact reports." },
];

const WasteReduction = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <FadeIn>
          <p className="label-text text-primary mb-6">Methodology</p>
          <h2 className="heading-lg text-foreground mb-6">
            Waste Reduction<br />
            <em className="italic">Framework</em>
          </h2>
          <p className="body-lg text-muted-foreground max-w-md">
            Our proprietary four-phase methodology has helped brands eliminate over 2M tons of food waste annually.
          </p>
        </FadeIn>
        <div className="space-y-8">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.12}>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <span className="label-text text-primary group-hover:text-primary-foreground transition-colors duration-500 text-[11px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">{s.step}</h3>
                  <p className="body-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WasteReduction;
