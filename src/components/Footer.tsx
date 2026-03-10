import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-charcoal px-6 md:px-12 lg:px-24 py-16 md:py-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <Link to="/" className="font-display text-2xl text-cream mb-4 block">
            Verdana<span className="text-sage-light">.</span>
          </Link>
          <p className="body-sm text-cream/50 max-w-sm">
            Reshaping food systems for a sustainable, equitable, and abundant future. Based in London, working globally.
          </p>
        </div>
        <div>
          <p className="label-text text-cream/40 mb-6">Navigate</p>
          {["Home", "Strategy", "Sustainability", "Contact"].map((l) => (
            <Link
              key={l}
              to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
              className="block body-sm text-cream/60 hover:text-cream transition-colors mb-3"
            >
              {l}
            </Link>
          ))}
        </div>
        <div>
          <p className="label-text text-cream/40 mb-6">Connect</p>
          {["LinkedIn", "Twitter", "Instagram"].map((s) => (
            <a key={s} href="#" className="block body-sm text-cream/60 hover:text-cream transition-colors mb-3">
              {s}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="body-sm text-cream/30">© 2026 Verdana Consulting. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="body-sm text-cream/30 hover:text-cream/60 transition-colors">Privacy</a>
          <a href="#" className="body-sm text-cream/30 hover:text-cream/60 transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
