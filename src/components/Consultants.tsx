import FadeIn from "./FadeIn";
import consultant1 from "@/assets/consultant-1.jpg";
import consultant2 from "@/assets/consultant-2.jpg";

const team = [
  {
    name: "Elena Marchetti",
    role: "Founding Partner & Lead Strategist",
    bio: "Former Unilever VP of Sustainability with 18 years driving ESG transformation across Fortune 500 food companies.",
    image: consultant1,
  },
  {
    name: "James Whitfield",
    role: "Director of Supply Chain Ethics",
    bio: "Pioneered blockchain-based traceability systems adopted by 200+ organic brands worldwide.",
    image: consultant2,
  },
];

const Consultants = () => (
  <section className="section-padding bg-cream-dark">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <p className="label-text text-primary mb-6">Leadership</p>
        <h2 className="heading-lg text-foreground mb-20">
          The <em className="italic">Consultants</em>
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {team.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.2}>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden mb-8">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <p className="label-text text-primary mb-2">{t.role}</p>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">{t.name}</h3>
              <p className="body-sm text-muted-foreground max-w-md">{t.bio}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Consultants;
