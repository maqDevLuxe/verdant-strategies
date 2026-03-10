import FadeIn from "./FadeIn";

const clients = [
  "Whole Foods", "Danone", "Nestlé", "Unilever", "Patagonia Provisions",
  "Beyond Meat", "Oatly", "Impossible Foods"
];

const ClientLogos = () => (
  <section className="section-padding border-b border-border">
    <FadeIn>
      <p className="label-text text-muted-foreground text-center mb-12">Trusted by Global Food Leaders</p>
    </FadeIn>
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {clients.map((c, i) => (
        <FadeIn key={c} delay={i * 0.08}>
          <span className="font-display text-lg md:text-xl text-muted-foreground/50 hover:text-primary transition-colors duration-500 cursor-default">
            {c}
          </span>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default ClientLogos;
