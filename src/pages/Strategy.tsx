import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";

const approaches = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "Deep analysis of your current food systems, supply chains, waste streams, and ESG positioning to identify critical opportunities.",
  },
  {
    num: "02",
    title: "Strategic Blueprint",
    desc: "Custom sustainability roadmaps with measurable KPIs, phased timelines, and stakeholder alignment frameworks.",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "Hands-on deployment alongside your teams — from supplier onboarding to operational transformation across global networks.",
  },
  {
    num: "04",
    title: "Measurement & Reporting",
    desc: "Real-time dashboards, quarterly impact reports, and continuous optimization to ensure lasting, compounding results.",
  },
];

const Strategy = () => (
  <>
    <CustomCursor />
    <Navbar />
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="label-text text-primary mb-8">Our Approach</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="heading-xl text-foreground mb-8">
              Strategy Built<br />
              <em className="italic">for Impact</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="body-lg text-muted-foreground max-w-2xl">
              We don't believe in one-size-fits-all solutions. Every engagement begins with deep understanding and ends with measurable transformation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-sage-dark">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="label-text text-sage-light mb-6">Process</p>
            <h2 className="heading-lg text-cream mb-20">How We <em className="italic">Work</em></h2>
          </FadeIn>
          <div className="space-y-16">
            {approaches.map((a, i) => (
              <FadeIn key={a.num} delay={i * 0.1}>
                <div className="grid md:grid-cols-[100px_1fr] gap-8 border-t border-cream/10 pt-10">
                  <span className="font-display text-4xl text-sage-light/30">{a.num}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-cream mb-4">{a.title}</h3>
                    <p className="body-lg text-cream/60 max-w-2xl">{a.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <FadeIn>
          <h2 className="heading-lg text-foreground mb-8">Ready to Start?</h2>
          <Link
            to="/contact"
            className="inline-block label-text px-12 py-5 bg-primary text-primary-foreground hover:bg-sage-dark transition-colors"
          >
            Request Consultation
          </Link>
        </FadeIn>
      </section>
    </main>
    <Footer />
  </>
);

export default Strategy;
