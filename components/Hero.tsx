// components/Hero.tsx
export default function Hero() {
  return (
    <section id="home" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 text-gradient-primary">
            Total Textile Solutions
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner in professional textile dyeing and finishing
            services. Excellence in every thread, innovation in every process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Explore Our Services</button>
            <button className="btn-accent">Get Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
}
