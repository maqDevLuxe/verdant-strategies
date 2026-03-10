import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

const Counter = ({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl md:text-7xl text-primary mb-3">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="label-text text-muted-foreground">{label}</p>
    </div>
  );
};

const WasteCounters = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <p className="label-text text-primary text-center mb-16">Our Collective Impact</p>
      </FadeIn>
      <div className="grid sm:grid-cols-3 gap-12">
        <FadeIn delay={0.1}><Counter target={2400000} suffix="+" label="Tons of Waste Diverted" /></FadeIn>
        <FadeIn delay={0.2}><Counter target={340} suffix="+" label="Global Brand Partners" /></FadeIn>
        <FadeIn delay={0.3}><Counter target={52} label="Countries Impacted" /></FadeIn>
      </div>
    </div>
  </section>
);

export default WasteCounters;
