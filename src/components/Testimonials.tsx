import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote: "Verdana transformed our entire supply chain. Their strategic vision helped us achieve carbon neutrality two years ahead of schedule.",
    name: "Sarah Chen",
    title: "Chief Sustainability Officer, Danone",
  },
  {
    quote: "The depth of expertise and genuine commitment to ethical food systems sets Verdana apart from any consulting firm we've worked with.",
    name: "Marcus Okonkwo",
    title: "VP Operations, Whole Foods Market",
  },
];

const Testimonials = () => (
  <section className="section-padding bg-sage-dark">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <p className="label-text text-sage-light mb-6">Testimonials</p>
        <h2 className="heading-lg text-cream mb-20">
          Brand Leader<br /><em className="italic">Voices</em>
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.2}>
            <div className="border-t border-cream/15 pt-10">
              <blockquote className="font-display text-xl md:text-2xl text-cream/90 italic leading-relaxed mb-8">
                "{t.quote}"
              </blockquote>
              <p className="label-text text-cream">{t.name}</p>
              <p className="body-sm text-cream/50 mt-1">{t.title}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
