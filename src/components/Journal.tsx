import FadeIn from "./FadeIn";

const articles = [
  {
    date: "Mar 2026",
    title: "The Hidden Cost of Food Waste in Corporate Supply Chains",
    category: "Research",
  },
  {
    date: "Feb 2026",
    title: "Blockchain & Traceability: A New Era for Ethical Sourcing",
    category: "Technology",
  },
  {
    date: "Jan 2026",
    title: "How Regenerative Agriculture Is Redefining ESG Metrics",
    category: "ESG",
  },
];

const Journal = () => (
  <section className="section-padding bg-cream-dark">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <FadeIn>
          <p className="label-text text-primary mb-6">Insights</p>
          <h2 className="heading-lg text-foreground">
            Sustainability<br /><em className="italic">Journal</em>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <a href="#" className="label-text text-primary hover:text-sage-dark transition-colors">
            View All Articles →
          </a>
        </FadeIn>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <FadeIn key={a.title} delay={i * 0.12}>
            <article className="group cursor-pointer border-t border-border pt-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="label-text text-muted-foreground">{a.date}</span>
                <span className="label-text text-primary">{a.category}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-500 leading-snug">
                {a.title}
              </h3>
              <p className="label-text text-muted-foreground mt-6 group-hover:text-primary transition-colors duration-500">
                Read More →
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Journal;
