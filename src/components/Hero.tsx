import FadeIn from "./FadeIn";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Organic farm at sunrise" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <FadeIn delay={0.2}>
          <p className="label-text text-sage-light mb-8">Sustainable Food Consulting</p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <h1 className="heading-xl text-cream mb-8">
            Reshaping the Future<br />
            <em className="font-normal italic">of Food Systems</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.6}>
          <p className="body-lg text-cream/70 max-w-2xl mx-auto mb-12">
            We partner with global brands to build ethical, sustainable, and profitable food supply chains — from farm to table.
          </p>
        </FadeIn>
        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="label-text px-10 py-4 bg-primary text-primary-foreground hover:bg-sage-dark transition-colors duration-300"
            >
              Request Consultation
            </Link>
            <Link
              to="/strategy"
              className="label-text px-10 py-4 border border-cream/30 text-cream hover:bg-cream/10 transition-colors duration-300"
            >
              Our Approach
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <FadeIn delay={1.2}>
          <div className="w-px h-16 bg-cream/30 mx-auto mb-3" />
          <p className="label-text text-cream/40 text-[10px]">Scroll</p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
