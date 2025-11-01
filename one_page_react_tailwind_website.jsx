import React from "react";

export default function LandingPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks — your message has been sent! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* NAV */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">A</div>
          <div>
            <h1 className="text-lg font-semibold">Afrimara Home</h1>
            <p className="text-xs text-slate-500">Elegant living, redefined</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button className="ml-4 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">Get Started</button>
        </nav>
        <button className="md:hidden p-2 rounded-md border">☰</button>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-10 items-center py-12">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Bring your dream home to life.</h2>
            <p className="mt-4 text-lg text-slate-600">
              Afrimara Home blends elegance and modern design to create timeless living spaces. Discover the beauty of simplicity and sophistication for your home.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium">Get in touch</a>
              <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border">Explore features</a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-gradient-to-tr from-indigo-600/10 to-emerald-200/10 p-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold">Design preview</h3>
              <p className="mt-2 text-sm text-slate-500">Elegant, modern and responsive layouts.</p>

              <div className="mt-4 border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Premium Design</div>
                    <div className="text-2xl font-bold">$29<span className="text-sm font-normal">/room</span></div>
                  </div>
                  <div className="text-sm text-slate-500">Customizable</div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>✓ Interior consultation</li>
                  <li>✓ Mood boards & layouts</li>
                  <li>✓ Personalized styling</li>
                </ul>

                <button className="mt-4 w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold">Book now</button>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-12">
          <h3 className="text-2xl font-bold">Our Services</h3>
          <p className="text-slate-600 mt-2">Transforming spaces with creativity and precision.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <FeatureCard title="Interior Design" desc="Custom-designed spaces that reflect your style and comfort." />
            <FeatureCard title="Furniture & Decor" desc="Elegant and modern furniture pieces for every home." />
            <FeatureCard title="Renovations" desc="Complete makeovers with a touch of Afrimara elegance." />
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-12">
          <h3 className="text-2xl font-bold">Pricing</h3>
          <p className="text-slate-600 mt-2">Flexible packages tailored to your needs.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <PriceCard name="Basic" price="$0" features={["Initial consultation","Style advice"]} />
            <PriceCard name="Premium" price="$29" features={["Full design plan","Decor recommendations","1 revision"]} highlight />
            <PriceCard name="Luxury" price="Contact" features={["Personal designer","On-site assistance"]} />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-12">
          <h3 className="text-2xl font-bold">Get in touch</h3>
          <p className="text-slate-600 mt-2">We’d love to help you design your dream home. Choose how to reach us below.</p>

          <form action="https://formspree.io/f/your-form-id" method="POST" onSubmit={handleSubmit} className="mt-6 max-w-xl">
            <div className="grid gap-3 md:grid-cols-2">
              <input name="name" aria-label="Your name" required placeholder="Your name" className="px-4 py-3 rounded-lg border" />
              <input name="email" aria-label="Email" required type="email" placeholder="Email" className="px-4 py-3 rounded-lg border" />
            </div>
            <textarea name="message" aria-label="Message" required placeholder="Your message" className="mt-3 px-4 py-3 rounded-lg border w-full min-h-[120px]"></textarea>
            <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button type="submit" className="px-5 py-3 rounded-lg bg-indigo-600 text-white">Send message</button>
              <a href="https://wa.me/254718198162?text=Hello%20Afrimara%20Home!%20I’d%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-lg border text-center">Chat with us on WhatsApp</a>
            </div>
            <div className="mt-3 text-sm text-slate-500">Or email us directly at <a href="mailto:afrimarahome18@gmail.com" className="underline">afrimarahome18@gmail.com</a></div>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="border-t mt-12 py-8 text-sm text-slate-600">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} Afrimara Home. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <div className="text-indigo-600 text-3xl">★</div>
      <div className="mt-3 font-semibold">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function PriceCard({ name, price, features = [], highlight = false }) {
  return (
    <div className={`p-6 rounded-xl shadow-sm ${highlight ? 'ring-2 ring-indigo-200' : 'bg-white'}`}>
      <div className="text-sm font-medium">{name}</div>
      <div className="mt-2 text-3xl font-bold">{price}{price !== 'Contact' && <span className="text-sm font-normal">/mo</span>}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f}>✓ {f}</li>
        ))}
      </ul>
      <button className={`mt-6 w-full py-2 rounded-lg ${highlight ? 'bg-indigo-600 text-white' : 'border'}`}>Select</button>
    </div>
  );
}
