import natureImg from "@/assets/nature-fullwidth.jpg";
import FadeIn from "./FadeIn";

const NatureImage = () => (
  <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
    <img src={natureImg} alt="Fresh organic produce" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-charcoal/30" />
    <div className="absolute inset-0 flex items-center justify-center">
      <FadeIn>
        <blockquote className="text-center px-6 max-w-4xl">
          <p className="font-display text-2xl md:text-4xl lg:text-5xl text-cream font-light italic leading-snug">
            "The future of food is not just sustainable — it is regenerative, equitable, and abundant."
          </p>
          <cite className="label-text text-cream/60 mt-6 block not-italic">— Elena Marchetti, Verdana</cite>
        </blockquote>
      </FadeIn>
    </div>
  </section>
);

export default NatureImage;
