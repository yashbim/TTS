// components/Hero.tsx
export default function Hero() {
  return (
    <section id="home" className="relative section-padding overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.webm" type="video/webm" />
        {/* optional fallback */}
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto container-padding">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 text-gradient-primary">
            Total Textile Solutions
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
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
