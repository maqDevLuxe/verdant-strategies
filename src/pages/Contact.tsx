import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-24">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <FadeIn>
                  <p className="label-text text-primary mb-8">Contact</p>
                </FadeIn>
                <FadeIn delay={0.15}>
                  <h1 className="heading-xl text-foreground mb-8">
                    Let's Start a<br /><em className="italic">Conversation</em>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="body-lg text-muted-foreground mb-12">
                    Whether you're exploring sustainable transformation or ready to act, we'd love to hear from you.
                  </p>
                </FadeIn>
                <FadeIn delay={0.45}>
                  <div className="space-y-6">
                    <div>
                      <p className="label-text text-muted-foreground mb-2">Email</p>
                      <p className="body-lg text-foreground">hello@verdanaconsulting.com</p>
                    </div>
                    <div>
                      <p className="label-text text-muted-foreground mb-2">Office</p>
                      <p className="body-lg text-foreground">London · New York · Singapore</p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.3}>
                {submitted ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <h3 className="heading-md text-foreground mb-4">Thank You</h3>
                      <p className="body-lg text-muted-foreground">
                        We'll be in touch within 24 hours.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {[
                      { label: "Name", type: "text", name: "name" },
                      { label: "Email", type: "email", name: "email" },
                      { label: "Organization", type: "text", name: "org" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="label-text text-muted-foreground block mb-3">{field.label}</label>
                        <input
                          type={field.type}
                          required
                          className="w-full bg-transparent border-b border-border py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="label-text text-muted-foreground block mb-3">Message</label>
                      <textarea
                        rows={4}
                        required
                        className="w-full bg-transparent border-b border-border py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="label-text px-12 py-5 bg-primary text-primary-foreground hover:bg-sage-dark transition-colors w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
