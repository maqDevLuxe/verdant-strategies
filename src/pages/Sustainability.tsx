import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";

const pillars = [
  { title: "Regenerative Agriculture", desc: "Moving beyond sustainable to restorative food production systems that heal ecosystems while feeding communities." },
  { title: "Zero-Waste Supply Chains", desc: "Designing closed-loop systems where every byproduct becomes a resource, eliminating waste at its source." },
  { title: "Carbon-Negative Operations", desc: "Strategies that don't just reduce emissions but actively remove carbon from the atmosphere through innovative practices." },
  { title: "Water Stewardship", desc: "Comprehensive water management that protects watersheds, reduces consumption, and ensures community access." },
  { title: "Biodiversity & Ecosystem Health", desc: "Ensuring food production strengthens rather than depletes the natural systems we all depend on." },
  { title: "Social Equity & Fair Labor", desc: "Guaranteeing dignified working conditions, fair wages, and community empowerment across every link in the chain." },
];

const Sustainability = () => (
  <>
    <CustomCursor />
    <Navbar />
    <main className="pt-24">
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="label-text text-primary mb-8">Our Purpose</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="heading-xl text-foreground mb-8">
              Sustainability<br /><em className="italic">at Our Core</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="body-lg text-muted-foreground max-w-2xl">
              Sustainability isn't a service we offer — it's the lens through which we see every challenge and every opportunity in the global food system.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="label-text text-primary mb-6">Pillars</p>
            <h2 className="heading-lg text-foreground mb-20">Six Pillars of <em className="italic">Change</em></h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="border-t border-border pt-8">
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">{p.title}</h3>
                  <p className="body-sm text-muted-foreground">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <FadeIn>
          <h2 className="heading-lg text-foreground mb-8">Join the Movement</h2>
          <Link
            to="/contact"
            className="inline-block label-text px-12 py-5 bg-primary text-primary-foreground hover:bg-sage-dark transition-colors"
          >
            Partner With Us
          </Link>
        </FadeIn>
      </section>
    </main>
    <Footer />
  </>
);

export default Sustainability;
