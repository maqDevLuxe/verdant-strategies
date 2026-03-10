import FadeIn from "./FadeIn";
import { Link } from "react-router-dom";

const ConsultationCTA = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto text-center">
      <FadeIn>
        <p className="label-text text-primary mb-8">Ready to Lead?</p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <h2 className="heading-xl text-foreground mb-8">
          Let's Build a<br />
          <em className="italic">Sustainable Legacy</em>
        </h2>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="body-lg text-muted-foreground max-w-xl mx-auto mb-12">
          Schedule a confidential consultation with our senior strategists. Together, we'll chart your path to sustainable leadership.
        </p>
      </FadeIn>
      <FadeIn delay={0.45}>
        <Link
          to="/contact"
          className="inline-block label-text px-12 py-5 bg-primary text-primary-foreground hover:bg-sage-dark transition-colors duration-300"
        >
          Request Consultation
        </Link>
      </FadeIn>
    </div>
  </section>
);

export default ConsultationCTA;
